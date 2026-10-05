// The site's language: the same browser key as the app (ss-lang), so the choice carries over to the dashboard.
export type Lang = "it" | "en";
export const LANGS: { code: Lang; label: string }[] = [{ code: "it", label: "Italiano" }, { code: "en", label: "English" }];
const known = (l: string | null): l is Lang => LANGS.some((x) => x.code === l);
const stored = localStorage.getItem("ss-lang");
const browser = navigator.language.slice(0, 2);
export let lang: Lang = known(stored) ? stored : known(browser) ? browser : "en";
export function setLang(l: Lang): void {
  lang = l;
  localStorage.setItem("ss-lang", l);
  document.documentElement.lang = l;
}
