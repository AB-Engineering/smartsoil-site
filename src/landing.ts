// smart-soil.eu: what the probe sees, who it is for, the pilot-partner form. Same look as the app; "Sign in" goes
// to the app (__APP_URL__), the form posts to the platform API (__API_BASE__, POST /api/v1/leads). Language and
// theme share the app's browser keys (ss-lang, ss-theme).
import { html, nothing, render, svg, type TemplateResult } from "lit";
import { icon } from "./icons";
import { LANGS, lang, setLang, type Lang } from "./i18n";
import { CREDITS, IMG } from "./images";
import { texts } from "./texts";

const app = document.getElementById("app")!;

// dry (yellow) to wet (blue), as the pot in the app
const DRY = [242, 227, 107], WET = [90, 200, 232];
function moistureColor(index: number): string {
  const x = Math.max(0, Math.min(1, index));
  const c = DRY.map((d, i) => Math.round(d + (WET[i] - d) * x));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
const CONTACT = "info@ab-engineering.it";
const F = { status: "idle" as "idle" | "busy" | "ok" | "err" };

// --- theme (as the app) ---
function applyTheme(theme: string): void {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("ss-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f4f7f5" : "#0f1512");
}
applyTheme(localStorage.getItem("ss-theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));

/** A real pot (public/img/hero-pot.png, 500x334) with the probe's ten depth layers drawn over its soil, surface first,
 *  and a 1-10 cm ruler beside it. `focus` brackets the depths that tell the story (cm, inclusive). Coordinates in
 *  the photo's pixels; the photo is drawn inside the SVG so the crop (viewBox) applies to both. */
const HERO = [0.78, 0.75, 0.72, 0.68, 0.62, 0.55, 0.47, 0.38, 0.28, 0.14];
function depthFigure(profile: number[], id: string, focus?: [number, number]): TemplateResult {
  const t = texts[lang];
  const top = 246, bottom = 316, step = (bottom - top) / 10;  // the pot body: rim at 246, foot at 316 (measured on the photo)
  const layers = [...profile].reverse();  // surface first
  return html`<div class="shot">
    <svg viewBox="118 24 332 310" aria-hidden="true">
      <image href=${`${import.meta.env.BASE_URL}img/hero-pot.png`} x="0" y="0" width="500" height="334"/>
      <defs>
        <clipPath id=${`${id}-clip`}><path d="M208 246 H305 L290 316 H224 Z"/></clipPath>
        <linearGradient id=${`${id}-scale`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color=${moistureColor(0)}/><stop offset="1" stop-color=${moistureColor(1)}/></linearGradient>
      </defs>
      <g clip-path=${`url(#${id}-clip)`}>
        ${layers.map((m, i) => svg`<rect class="layer" x="200" y=${top + i * step} width="130" height=${step} fill=${moistureColor(m)} opacity=".4"/>`)}
        ${layers.map((_, i) => svg`<line x1="200" x2="330" y1=${top + i * step} y2=${top + i * step} stroke="rgba(0,0,0,.2)" stroke-width=".8"/>`)}
      </g>
      <g font-size="11" fill="#fff" stroke="none" style="text-shadow:0 1px 3px rgba(0,0,0,.8)">
        <rect x="311" y=${top} width="6" height=${bottom - top} rx="2" fill=${`url(#${id}-scale)`} stroke="rgba(0,0,0,.4)" stroke-width=".6"/>
        <line x1="322" y1=${top} x2="322" y2=${bottom} stroke="#fff" stroke-width="1.2"/>
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cm) => svg`<line x1="322" x2=${cm % 5 === 0 || cm === 1 ? 332 : 327} y1=${top + (cm - 1) * step + step / 2} y2=${top + (cm - 1) * step + step / 2} stroke="#fff" stroke-width="1.2"/>`)}
        <text x="336" y=${top + step / 2 + 4}>1 cm · ${t.depth_surface} · <tspan fill=${moistureColor(0)} font-weight="700">${t.dry}</tspan></text>
        <text x="336" y=${top + 4.5 * step + 4}>5 cm</text>
        <text x="336" y=${top + 9.5 * step + 4}>10 cm · ${t.depth_deep} · <tspan fill=${moistureColor(1)} font-weight="700">${t.wet}</tspan></text>
        <path d=${`M257 ${top - 20} v${bottom - top + 14}`} stroke="#fff" stroke-width="2" stroke-dasharray="3 3" opacity=".9"/>
        <rect x="251" y=${top - 30} width="12" height="10" rx="2" fill="#34d399"/>
      </g>
      ${focus ? svg`<path class="focus" d=${`M204 ${top + (focus[0] - 1) * step} h-8 v${(focus[1] - focus[0] + 1) * step} h8`} fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round"/>` : nothing}
    </svg>
  </div>`;
}

const PROFILES = [
  [0.72, 0.76, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.9, 0.88],   // wetting front reached the bottom, even
  [1, 1, 0.98, 0.92, 0.8, 0.68, 0.58, 0.52, 0.48, 0.44],      // drainage: bottom saturated
  [0.82, 0.7, 0.4, 0.18, 0.1, 0.08, 0.08, 0.1, 0.12, 0.16],   // hydrophobic: dry core, water went down the walls
  [0.7, 0.68, 0.66, 0.64, 0.6, 0.52, 0.4, 0.26, 0.14, 0.06],  // evaporation: surface gone, roots fine
];
const FOCUS: [number, number][] = [[7, 10], [8, 10], [2, 6], [1, 3]];  // the depths each indicator reads from

// the KPI carousel: advances by itself every 5 s until the visitor picks one
const W = { i: 0, auto: true };
setInterval(() => { if (W.auto) { W.i = (W.i + 1) % PROFILES.length; rerender(); } }, 5000);
const pick = (i: number) => () => { W.i = i; W.auto = false; rerender(); };

// --- form ---
async function submit(e: Event): Promise<void> {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const f = new FormData(form);
  const body = Object.fromEntries(f.entries()) as Record<string, unknown>;
  body.consent = f.get("consent") === "on";
  body.lang = lang;
  F.status = "busy"; rerender();
  try {
    const res = await fetch(`${__API_BASE__}/api/v1/leads`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (!res.ok) throw new Error(String(res.status));
    F.status = "ok";
    form.reset();
  } catch {
    F.status = "err";
  }
  rerender();
}

function chooseLang(l: Lang): void {
  setLang(l);
  rerender();
}

const li = (items: string[]) => items.map((x) => html`<li>${x}</li>`);

function page(): TemplateResult {
  const t = texts[lang];
  document.title = t.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
  const theme = document.documentElement.dataset.theme;
  return html`
    <header class="top">
      <h1><a href="#top">${icon("potted_plant")} SmartSoil</a></h1>
      <nav class="menu">
        <a href="#why">${t.nav_why}</a><a href="#how">${t.nav_how}</a><a href="#learn">${t.nav_learn}</a><a href="#uses">${t.nav_uses}</a><a href="#pilot">${t.nav_pilot}</a>
      </nav>
      <span class="spacer"></span>
      <select class="lang" title=${t.language} aria-label=${t.language} @change=${(e: Event) => chooseLang((e.target as HTMLSelectElement).value as Lang)}>
        ${LANGS.map((l) => html`<option value=${l.code} ?selected=${lang === l.code}>${l.code.toUpperCase()}</option>`)}</select>
      <button class="icon" title=${t.theme} @click=${() => { applyTheme(theme === "light" ? "dark" : "light"); rerender(); }}>${icon(theme === "light" ? "dark_mode" : "light_mode")}</button>
      <a class="btn primary" href=${__APP_URL__}>${t.login}</a>
    </header>

    <main class="landing" id="top">
      <section class="hero" style=${`--img:url(${IMG.hero})`}>
        <div class="wrap">
          <div class="copy">
            <span class="badge">${t.badge}</span>
            <h2>${t.hero_h1}</h2>
            <p class="lead">${t.hero_p}</p>
            <div class="ctas">
              <a class="btn primary big" href="#pilot">${t.cta_pilot}</a>
              <a class="btn glass big" href=${__APP_URL__}>${t.cta_login}</a>
            </div>
          </div>
          <figure class="glass depth">
            ${depthFigure(HERO, "hero")}
            <figcaption>${t.hero_caption}</figcaption>
            <div class="credit">${t.photo_credit}: <a href="https://it.freepik.com/foto-vettori-gratuito/vasi-con-piante" rel="noopener">Freepik</a></div>
          </figure>
        </div>
      </section>

      <section id="why" class="band dark" style=${`--img:url(${IMG.why})`}>
        <div class="wrap">
          <h2>${t.why_h2}</h2>
          <p class="lead">${t.why_p}</p>
          <div class="kpis">
            <figure class="glass depth">${depthFigure(PROFILES[W.i], "kpi", FOCUS[W.i])}<figcaption>${t.kpi[W.i].title}</figcaption></figure>
            <ol class="kpi-list">
              ${t.kpi.map((k, i) => html`<li class=${i === W.i ? "active" : ""} @click=${pick(i)}><h3>${k.title}</h3><p>${k.text}</p></li>`)}
            </ol>
          </div>
        </div>
      </section>

      <section id="how" class="wrap">
        <h2>${t.how_h2}</h2>
        <ol class="steps">
          ${t.how_steps.map((s, i) => html`<li><span class="n">${i + 1}</span><h3>${s.title}</h3><p>${s.text}</p></li>`)}
        </ol>
        <div class="card specs">
          <h3>${t.specs_h3}</h3>
          <ul class="chips">
            ${[icon("water_drop"), icon("light_mode"), icon("solar_power"), icon("link_off"), icon("settings"), icon("grid_view")].map((ic, i) => html`<li>${ic}<span>${t.specs[i]}</span></li>`)}
          </ul>
        </div>
      </section>

      <section id="learn" class="wrap">
        <h2>${t.learn_h2}</h2>
        <p class="lead">${t.learn_p}</p>
        <div class="cards three">
          ${t.learn.map((l, i) => html`<article class="card">${[icon("humidity_percentage"), icon("thumb_up"), icon("grid_view")][i]}<h3>${l.title}</h3><p>${l.text}</p></article>`)}
        </div>
      </section>

      <section class="quote" style=${`--img:url(${IMG.quote})`}>
        <div class="wrap"><p class="q">${t.quote}</p><p class="sub">${t.quote_sub}</p></div>
      </section>

      <section id="uses" class="wrap">
        <h2>${t.uses_h2}</h2>
        <div class="bento">
          ${[IMG.nursery, IMG.indoor, IMG.research, IMG.rooftop].map((src, i) => html`
            <a class="photo" href="#pilot" style=${`--img:url(${src})`}><div class="txt"><h3>${t.uses[i].title}</h3><p>${t.uses[i].text}</p></div></a>`)}
        </div>
      </section>

      <section id="pilot" class="band pilot" style=${`--img:url(${IMG.pilot})`}>
        <div class="wrap">
          <h2>${t.pilot_h2}</h2>
          <p class="lead">${t.pilot_p}</p>
          <div class="pilot-grid">
            <form class="card form" @submit=${submit}>
              <h3>${t.form_h3}</h3>
              <label>${t.f_name}<input name="name" required maxlength="100" autocomplete="name"></label>
              <label>${t.f_org}<input name="organization" required maxlength="150" autocomplete="organization"></label>
              <label>${t.f_kind}<select name="kind">${Object.entries(t.kinds).map(([k, v]) => html`<option value=${k}>${v}</option>`)}</select></label>
              <label>${t.f_email}<input name="email" type="email" required maxlength="255" autocomplete="email"></label>
              <label>${t.f_phone}<input name="phone" type="tel" maxlength="40" autocomplete="tel"></label>
              <label>${t.f_scale}<input name="scale" maxlength="150"></label>
              <label>${t.f_message}<textarea name="message" rows="3" maxlength="2000"></textarea></label>
              <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
              <label class="check"><input type="checkbox" name="consent" required><span>${t.f_consent}</span></label>
              <button class="primary" ?disabled=${F.status === "busy"}>${F.status === "busy" ? t.f_sending : t.f_send}</button>
              ${F.status === "ok" ? html`<div class="ok">${t.f_ok}</div>` : F.status === "err" ? html`<div class="err">${t.f_err} <a href=${`mailto:${CONTACT}`}>${CONTACT}</a></div>` : nothing}
            </form>
            <div class="side">
              <div class="card glass"><h3>${t.offer_h3}</h3><ul class="ticks">${li(t.offer)}</ul></div>
              <div class="card glass"><h3>${t.ask_h3}</h3><ul class="ticks">${li(t.ask)}</ul></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>${t.footer_p}</p>
      <p>${t.footer_contact}: <a href=${`mailto:${CONTACT}`}>${CONTACT}</a></p>
      <p class="muted small">${t.footer_privacy}</p>
      <p class="muted small">${t.footer_photos}: <a href="https://it.freepik.com/foto-vettori-gratuito/vasi-con-piante" rel="noopener">Freepik</a> · Unsplash · ${CREDITS.map((c) => html`<a href=${`https://unsplash.com/@${c}`} rel="noopener">@${c}</a> `)}</p>
    </footer>`;
}

const rerender = (): void => { render(page(), app); };
setLang(lang);
rerender();
