// Landing page copy, Italian the reference, English complete. Kept apart from the app's i18n: long marketing text,
// different audience. The language follows the same browser choice as the app (ss-lang).
export type Lang = "it" | "en";

const it = {
  title: "SmartSoil — il profilo idrico del substrato, da 1 a 10 cm",
  description: "SmartSoil legge come l'acqua si muove nel vaso, strato per strato. Una sentinella per zona, non un sensore per vaso. Programma pilota 2026 per vivai, manutenzione del verde e ricerca.",
  nav_how: "Come funziona", nav_learn: "Apprendimento", nav_why: "Perché è diverso", nav_uses: "Applicazioni", nav_pilot: "Programma pilota",
  login: "Accedi", language: "Lingua", theme: "Tema",
  badge: "Programma pilota 2026 · non ancora in vendita",
  hero_h1: "Il profilo idrico del substrato, da 1 a 10 cm.",
  hero_p: "Tutti misurano l'umidità in un punto. SmartSoil legge come l'acqua si muove nel vaso, strato per strato, e la mette in relazione con luce, temperatura e umidità dell'aria. Una sentinella per zona, non un sensore per vaso.",
  cta_pilot: "Candidati come partner pilota", cta_login: "Accedi alla dashboard",
  hero_caption: "La sonda legge dieci strati, da 1 a 10 cm: qui superficie che asciuga, radici ancora idratate.",
  photo_credit: "Foto", depth_surface: "superficie", depth_deep: "profondo", wet: "bagnato", dry: "secco",

  quote: "Una sentinella per zona, non un sensore per vaso.",
  quote_sub: "Vasi dello stesso lotto, stesso substrato e stessa ala irrigua si comportano allo stesso modo: poche sonde ben piazzate raccontano tutta la zona.",
  why_h2: "Un sensore dice \"umido\" o \"secco\". Il profilo dice perché.",
  why_p: "Dieci letture da 1 a 10 cm trasformano un numero in una dinamica. Da quella si ricavano indicatori che una sonda puntuale non può dare.",
  kpi: [
    { title: "Fronte di bagnatura", text: "Dopo l'irrigazione l'acqua arriva in fondo? In quanto tempo? Il profilo lo mostra strato per strato, e dice se la dose basta o è troppa." },
    { title: "Percolazione e lisciviazione", text: "Fondo saturo subito dopo l'irrigazione: acqua e concime stanno uscendo dal vaso. Uno spreco che nessun sensore singolo vede." },
    { title: "Substrato idrofobo", text: "Torba seccata che non si ribagna: la superficie resta secca mentre l'acqua scorre lungo le pareti. Solo un profilo distingue questo caso da un vaso davvero asciutto." },
    { title: "Evaporazione o traspirazione", text: "Superficie che asciuga con luce forte e fondo stabile: evapora. Profilo che cala uniforme: la pianta beve. Il sensore di luce rende leggibile la differenza." },
  ],

  how_h2: "Come funziona",
  how_steps: [
    { title: "Sentinelle, non censimento", text: "Vasi dello stesso lotto, stesso substrato e stessa ala irrigua si comportano allo stesso modo. Poche sentinelle per zona bastano a decidere quando, quanto e dove irrigare." },
    { title: "Dati sicuri, in continuo", text: "Ogni sonda ha il proprio certificato e parla con la piattaforma su MQTT con TLS reciproco. Batteria e pannello solare: nessun cavo nel vaso." },
    { title: "Dashboard per zona", text: "Vasi raggruppati in aree, ogni grandezza mostrata come intervallo tra le sentinelle, andamenti su 24 ore fino a 90 giorni, avvisi quando una zona esce dal suo profilo." },
  ],
  specs_h3: "Scheda tecnica (prototipo)",
  specs: [
    "Umidità del substrato su 10 livelli, da 1 a 10 cm di profondità (sonda capacitiva)",
    "Luminosità, temperatura e umidità dell'aria",
    "Batteria con ricarica da pannello solare; autonomia stimata in dashboard",
    "Wi‑Fi; Bluetooth in roadmap",
    "Certificato per dispositivo, rinnovo automatico, revoca dalla console",
    "Dati su piattaforma propria, esportabili",
  ],

  learn_h2: "Impara dalla vostra zona, non da una tabella.",
  learn_p: "Ogni substrato, vaso e posizione è diverso. SmartSoil non applica soglie fisse: le costruisce sul posto, con i dati delle sonde e con quello che gli dite voi.",
  learn: [
    { title: "Calibrazione per sonda", text: "Secco e bagnato sono misurati su ogni vaso: il secco è il minimo degli ultimi 30 giorni, il bagnato la lettura dopo l'irrigazione. Dopo la prima settimana lo stato di ogni sentinella è affidabile." },
    { title: "Il vostro feedback conta", text: "\"Sta bene\", \"soffre\", \"ho innaffiato\", \"l'ho spostato\": ogni risposta sposta le soglie di quella pianta e insegna al sistema cosa tollera davvero. Nessuna taratura manuale." },
    { title: "Analisi puntuale per area", text: "Le sentinelle della stessa area vengono lette insieme: ogni grandezza come intervallo tra i vasi, la posizione migliore finora, la luce stagionale. Il risultato è un giudizio su quella zona, non una media generica." },
  ],

  uses_h2: "Dove fa la differenza",
  uses: [
    { title: "Vivai", text: "Audit irriguo per lotto e settore: uniformità, percolazione, tempo di esaurimento. Un kit di sentinelle per alcune settimane, un report che resta." },
    { title: "Manutenzione del verde", text: "Molte piante su molti siti, visite a calendario: le sentinelle dicono quale sito ha bisogno della visita e quale no, e documentano il servizio al cliente." },
    { title: "Prove e ricerca", text: "Substrati, biostimolanti, regimi irrigui: il profilo per vaso su decine di repliche, con luce e clima registrati insieme." },
    { title: "Tetti verdi e verde urbano", text: "Substrati sottili, 8‑15 cm: il range 1‑10 cm li copre per intero. In roadmap: versione per esterno con autonomia estesa." },
  ],

  pilot_h2: "Programma pilota",
  pilot_p: "SmartSoil non è ancora in vendita. Stiamo portando il prototipo in campo con pochi partner selezionati, per validare gli indicatori su casi reali prima del rilascio.",
  offer_h3: "Cosa offriamo", ask_h3: "Cosa chiediamo",
  offer: ["Sentinelle in comodato per la durata del pilota", "Dashboard, avvisi e un report finale sulla vostra irrigazione", "Un canale diretto con chi sviluppa il prodotto", "Condizioni riservate al rilascio"],
  ask: ["Una zona reale da monitorare per almeno una stagione", "Feedback onesto: cosa torna utile, cosa no", "Il permesso di usare i dati, in forma anonima, per tarare gli indicatori"],
  form_h3: "Candidatura",
  f_name: "Nome e cognome", f_org: "Azienda o ente", f_kind: "Attività", f_email: "Email", f_phone: "Telefono (facoltativo)",
  f_scale: "Dimensione (es. 2.000 vasi su 3 settori, 40 siti)", f_message: "Cosa vorreste capire della vostra irrigazione?",
  f_consent: "Acconsento al trattamento dei dati inseriti per essere ricontattato a proposito del programma pilota.",
  f_send: "Invia la candidatura", f_sending: "Invio…",
  f_ok: "Ricevuto, grazie. Vi scriviamo entro pochi giorni.",
  f_err: "Invio non riuscito. Riprova, oppure scrivici direttamente.",
  kinds: { nursery: "Vivaio", maintenance: "Manutenzione del verde", research: "Ricerca o prove", green_roof: "Tetti verdi, verde urbano", other: "Altro" },

  footer_p: "SmartSoil è un progetto AB Engineering. Prototipo in fase pilota: non è un prodotto in commercio.",
  footer_contact: "Contatti", footer_photos: "Foto", footer_privacy: "I dati del modulo servono solo a ricontattarvi per il pilota e non vengono ceduti a terzi.",
};

const en: typeof it = {
  title: "SmartSoil — the substrate water profile, 1 to 10 cm",
  description: "SmartSoil reads how water moves through the pot, layer by layer. One sentinel per zone, not a sensor per pot. 2026 pilot programme for nurseries, landscape maintenance and research.",
  nav_how: "How it works", nav_learn: "Learning", nav_why: "Why it is different", nav_uses: "Applications", nav_pilot: "Pilot programme",
  login: "Sign in", language: "Language", theme: "Theme",
  badge: "2026 pilot programme · not on sale yet",
  hero_h1: "The substrate water profile, from 1 to 10 cm.",
  hero_p: "Everyone measures moisture at one point. SmartSoil reads how water moves through the pot, layer by layer, and relates it to light, temperature and air humidity. One sentinel per zone, not a sensor per pot.",
  cta_pilot: "Apply as a pilot partner", cta_login: "Open the dashboard",
  hero_caption: "The probe reads ten layers, 1 to 10 cm: here the surface drying, the roots still hydrated.",
  photo_credit: "Photo", depth_surface: "surface", depth_deep: "deep", wet: "wet", dry: "dry",

  quote: "One sentinel per zone, not a sensor per pot.",
  quote_sub: "Pots from the same batch, same substrate and same irrigation line behave alike: a few well-placed probes tell the whole zone.",
  why_h2: "A sensor says \"wet\" or \"dry\". The profile says why.",
  why_p: "Ten readings from 1 to 10 cm turn a number into a dynamic. From it come indicators a single probe cannot give.",
  kpi: [
    { title: "Wetting front", text: "After watering, does the water reach the bottom? How fast? The profile shows it layer by layer and tells whether the dose is enough or too much." },
    { title: "Drainage and leaching", text: "Bottom saturated right after watering: water and fertiliser are leaving the pot. A waste no single sensor sees." },
    { title: "Hydrophobic substrate", text: "Dried peat that will not rewet: the surface stays dry while water runs down the walls. Only a profile tells this apart from a truly dry pot." },
    { title: "Evaporation or transpiration", text: "Surface drying under strong light, bottom stable: evaporation. Profile falling evenly: the plant is drinking. The light sensor makes the difference readable." },
  ],

  how_h2: "How it works",
  how_steps: [
    { title: "Sentinels, not a census", text: "Pots from the same batch, same substrate and same irrigation line behave alike. A few sentinels per zone are enough to decide when, how much and where to water." },
    { title: "Secure, continuous data", text: "Each probe has its own certificate and talks to the platform over MQTT with mutual TLS. Battery and solar panel: no cable in the pot." },
    { title: "A dashboard per zone", text: "Pots grouped in areas, every measure shown as the range across the sentinels, trends from 24 hours to 90 days, alerts when a zone leaves its profile." },
  ],
  specs_h3: "Specifications (prototype)",
  specs: [
    "Substrate moisture at 10 levels, 1 to 10 cm deep (capacitive probe)",
    "Light, temperature and air humidity",
    "Battery charged by a solar panel; estimated life in the dashboard",
    "Wi‑Fi; Bluetooth on the roadmap",
    "Per-device certificate, automatic renewal, revocation from the console",
    "Data on our own platform, exportable",
  ],

  learn_h2: "It learns from your zone, not from a table.",
  learn_p: "Every substrate, pot and spot is different. SmartSoil does not apply fixed thresholds: it builds them on site, from the probes' data and from what you tell it.",
  learn: [
    { title: "Calibration per probe", text: "Dry and wet are measured on each pot: dry is the minimum of the last 30 days, wet the reading after watering. After the first week every sentinel's status is reliable." },
    { title: "Your feedback counts", text: "\"Doing well\", \"suffering\", \"I watered it\", \"I moved it\": every answer moves that plant's thresholds and teaches the system what it really tolerates. No manual tuning." },
    { title: "A precise analysis per area", text: "Sentinels in the same area are read together: every measure as the range across the pots, the best spot so far, seasonal light. The result is a verdict on that zone, not a generic average." },
  ],

  uses_h2: "Where it makes a difference",
  uses: [
    { title: "Nurseries", text: "Irrigation audit per batch and sector: uniformity, drainage, time to depletion. A kit of sentinels for a few weeks, a report that stays." },
    { title: "Landscape maintenance", text: "Many plants across many sites, visits on a schedule: sentinels tell which site needs the visit and which does not, and document the service to the client." },
    { title: "Trials and research", text: "Substrates, biostimulants, irrigation regimes: the per-pot profile across dozens of replicates, with light and climate recorded alongside." },
    { title: "Green roofs and urban greenery", text: "Thin substrates, 8‑15 cm: the 1‑10 cm range covers them fully. On the roadmap: an outdoor version with extended autonomy." },
  ],

  pilot_h2: "Pilot programme",
  pilot_p: "SmartSoil is not on sale yet. We are taking the prototype into the field with a few selected partners, to validate the indicators on real cases before release.",
  offer_h3: "What we offer", ask_h3: "What we ask",
  offer: ["Sentinels on loan for the duration of the pilot", "Dashboard, alerts and a final report on your irrigation", "A direct line to the people building the product", "Reserved terms at release"],
  ask: ["A real zone to monitor for at least one season", "Honest feedback: what helps, what does not", "Permission to use the data, anonymised, to tune the indicators"],
  form_h3: "Application",
  f_name: "Full name", f_org: "Company or institution", f_kind: "Activity", f_email: "Email", f_phone: "Phone (optional)",
  f_scale: "Scale (e.g. 2,000 pots in 3 sectors, 40 sites)", f_message: "What would you like to understand about your irrigation?",
  f_consent: "I agree to the processing of the data entered so that I can be contacted about the pilot programme.",
  f_send: "Send the application", f_sending: "Sending…",
  f_ok: "Received, thank you. We will write to you within a few days.",
  f_err: "Sending failed. Try again, or write to us directly.",
  kinds: { nursery: "Nursery", maintenance: "Landscape maintenance", research: "Research or trials", green_roof: "Green roofs, urban greenery", other: "Other" },

  footer_p: "SmartSoil is an AB Engineering project. Prototype in its pilot phase: not a commercial product.",
  footer_contact: "Contact", footer_photos: "Photos", footer_privacy: "The form data is used only to contact you about the pilot and is not shared with third parties.",
};

export const texts: Record<Lang, typeof it> = { it, en };
