/* ============================================================
   CONTENIDO DEL SITIO — este es el único archivo que hay que
   tocar para añadir o cambiar proyectos y textos.

   Cada texto visible existe en dos idiomas: { en: "...", sv: "..." }.

   Para añadir un proyecto:
     1. Crea la carpeta  img/work/<slug>/  y mete las imágenes
        numeradas: 01.jpg, 02.jpg, 03.jpg ...  (la 01 es la portada)
     2. Copia un bloque de PROJECTS, cámbiale el slug y los textos.
     3. En "images" pon cuántas imágenes hay.
   Los campos client / year / role / tools son opcionales: si un
   campo no está, simplemente no se muestra.
   Pon  draft: true  para ocultar un proyecto sin borrarlo.

   Vídeos (reels): campo opcional  videos: [ ... ]  con una entrada
   por vídeo, que se muestran antes de las imágenes. Dos formas:
     { file: "reel-01.mp4", poster: "reel-01.jpg", title: { en: "…", sv: "…" } }
       → archivo .mp4 en la misma carpeta img/work/<slug>/ (poster y
         title opcionales). Comprimir antes de subir; ver README.
     { embed: "https://www.youtube.com/embed/VIDEO_ID", title: { … } }
       → vídeo alojado en YouTube o Vimeo, sin subir nada al repo.
   ============================================================ */

const SITE = {
  name: "Linnéa Svärd Martin",
  email: "linneasvard00@gmail.com",
  linkedin: "https://www.linkedin.com/in/linnea-svard",
  instagram: "https://www.instagram.com/linnea_creations/",
  cv: "cv/Linnea-Svard-Martin-CV.pdf",   // deja el PDF en la carpeta cv/
  photo: "img/linnea.jpg",
};

/* Orden de las disciplinas en la portada. */
const GROUPS = [
  { id: "brand",        label: { en: "Brand & identity",     sv: "Varumärke & identitet" } },
  { id: "photo",        label: { en: "Photography",          sv: "Fotografi" } },
  { id: "3d",           label: { en: "3D & visualisation",   sv: "3D & visualisering" } },
  { id: "editorial",    label: { en: "Editorial & print",    sv: "Redaktionellt & tryck" } },
  { id: "illustration", label: { en: "Illustration",         sv: "Illustration" } },
];

const PROJECTS = [
  {
    slug: "nordbo",
    group: "brand",
    title: { en: "Nordbo — Stonethread", sv: "Nordbo — Stonethread" },
    client: { en: "Concept project", sv: "Konceptprojekt" },
    role: { en: "Brand identity, packaging, web design", sv: "Visuell identitet, förpackning, webbdesign" },
    tools: "Illustrator, Photoshop",
    summary: {
      en: "Brand identity concept for Nordbo, a Nordic outdoor clothing brand, built around its hard-wearing Stonethread line. The mark combines a line-drawn mountain with topographic waves, and the tagline — <em>En oöverträffad slit</em> — carries the promise. Applied across packaging, garment tags and a website concept.",
      sv: "Konceptuell visuell identitet för Nordbo, ett nordiskt friluftsvarumärke, byggd kring den slitstarka linjen Stonethread. Märket kombinerar ett linjetecknat berg med topografiska vågor, och taglinen — <em>En oöverträffad slit</em> — bär löftet. Applicerad på förpackning, plaggetiketter och ett webbkoncept."
    },
    images: 3,
  },
  {
    slug: "avincis",
    group: "brand",
    title: { en: "Avincis — corporate communication", sv: "Avincis — företagskommunikation" },
    client: { en: "Avincis · aerial emergency services", sv: "Avincis · flygburen räddningstjänst" },
    year: "2024–2025",
    role: { en: "Graphic design (freelance)", sv: "Grafisk formgivning (frilans)" },
    tools: "Photoshop, Illustrator, InDesign",
    summary: {
      en: "A series of freelance commissions for Avincis, an aerial emergency-services operator. A multilingual Christmas card for social media built around one of the company's helicopters; an A1 poster presenting the company values; an internal awards certificate; and a set of print-ready photo frames in four colour variants — all within Avincis' brand guidelines.",
      sv: "En serie frilansuppdrag för Avincis, en operatör inom flygburen räddningstjänst. Ett flerspråkigt julkort för sociala medier byggt kring en av bolagets helikoptrar; en A1-affisch med företagets värderingar; ett internt diplom; och en uppsättning tryckfärdiga fotoramar i fyra färgvarianter — allt inom Avincis grafiska riktlinjer."
    },
    images: 4,
  },
  {
    slug: "love-spirit",
    group: "photo",
    title: { en: "Love Spirit — Benidorm Fest & Autobello", sv: "Love Spirit — Benidorm Fest & Autobello" },
    client: { en: "Love Spirit Brands", sv: "Love Spirit Brands" },
    year: "2025",
    role: { en: "Event & product photography, social content", sv: "Event- och produktfoto, innehåll för sociala medier" },
    tools: { en: "Photography, Photoshop", sv: "Fotografi, Photoshop" },
    summary: {
      en: "Event and product photography for Love Spirit, a premium spirits brand, shot during my time on its marketing team. Coverage of Benidorm Fest 2025 and Autobello Alicante — stage, guests and product — edited for the brand's social channels, alongside bottle and cocktail shots for the feed.",
      sv: "Event- och produktfotografi för Love Spirit, ett premiumvarumärke inom spritdrycker, taget under min tid i marknadsteamet. Bevakning av Benidorm Fest 2025 och Autobello Alicante — scen, gäster och produkt — redigerat för varumärkets sociala kanaler, tillsammans med flask- och cocktailbilder för flödet."
    },
    images: 7,
  },
  {
    slug: "226ers",
    group: "photo",
    title: { en: "226ERS — #ZeroWaste", sv: "226ERS — #ZeroWaste" },
    client: { en: "226ERS · sports nutrition", sv: "226ERS · sportnutrition" },
    role: { en: "Product & campaign photography", sv: "Produkt- och kampanjfoto" },
    tools: { en: "Photography, Photoshop", sv: "Fotografi, Photoshop" },
    summary: {
      en: "Product and lifestyle photography for 226ERS, a sports-nutrition brand from Alicante, around its #ZeroWaste message: gels and bars in use, and a series pairing the packaging with the ground it should never end up on.",
      sv: "Produkt- och livsstilsfotografi för 226ERS, ett sportnutritionsvarumärke från Alicante, kring budskapet #ZeroWaste: gels och bars i användning, och en serie som ställer förpackningen mot marken den aldrig ska hamna på."
    },
    images: 3,
  },
  {
    slug: "grafyco",
    group: "3d",
    title: { en: "Grafyco — exhibition stand in 3D", sv: "Grafyco — mässmonter i 3D" },
    client: { en: "Grafyco", sv: "Grafyco" },
    year: "2024",
    role: { en: "3D modelling & rendering (freelance)", sv: "3D-modellering & rendering (frilans)" },
    tools: "Blender",
    summary: {
      en: "A 3D model and renders of a trade-fair stand for Grafyco, produced in Blender on a short deadline. The brief called for a clear read of the layout — meeting areas, seating, display walls — so the client could sign off the design before build.",
      sv: "3D-modell och renderingar av en mässmonter för Grafyco, gjorda i Blender med kort deadline. Uppdraget krävde en tydlig läsning av planlösningen — mötesytor, sittplatser, displayväggar — så att kunden kunde godkänna designen före bygget."
    },
    images: 2,
  },
  {
    slug: "archive-paper",
    group: "editorial",
    title: { en: "The Archive Paper", sv: "The Archive Paper" },
    client: { en: "Personal · Umeå universitet", sv: "Eget arbete · Umeå universitet" },
    role: { en: "Editorial design, typography", sv: "Redaktionell design, typografi" },
    tools: "InDesign, Photoshop",
    summary: {
      en: "An editorial series in three issues — <em>City</em>, <em>The World Is Forgetting</em>, <em>War &amp; Tanks</em> — built on a strict black-and-white grid and archival photography. An exercise in typographic hierarchy: how far a layout can be pushed while the text stays readable.",
      sv: "En redaktionell serie i tre nummer — <em>City</em>, <em>The World Is Forgetting</em>, <em>War &amp; Tanks</em> — byggd på ett strikt svartvitt raster och arkivfotografi. En övning i typografisk hierarki: hur långt en layout kan drivas medan texten förblir läsbar."
    },
    images: 3,
  },
  {
    slug: "ritual-noise",
    group: "editorial",
    title: { en: "Ritual Noise — Black Tide", sv: "Ritual Noise — Black Tide" },
    client: { en: "Personal", sv: "Eget arbete" },
    role: { en: "Cover & poster design, illustration", sv: "Omslag & affisch, illustration" },
    tools: "Illustrator, Photoshop",
    summary: {
      en: "Album cover and tour poster for a fictional release. Screen-print inspired: two flat inks, a cut-out portrait and heavy condensed type, with the tour dates set as part of the composition rather than an afterthought.",
      sv: "Skivomslag och turnéaffisch för en fiktiv release. Inspirerad av screentryck: två platta färger, ett urklippt porträtt och tung, smal typografi, med turnédatumen satta som en del av kompositionen snarare än en eftertanke."
    },
    images: 1,
  },
  {
    slug: "seven-days-of-drift",
    group: "editorial",
    title: { en: "7 Days of Drift", sv: "7 Days of Drift" },
    client: { en: "Personal", sv: "Eget arbete" },
    role: { en: "Poster design", sv: "Affischdesign" },
    tools: "Photoshop, Illustrator",
    summary: {
      en: "Event poster for a week-long drift series at Silverstone. Motion, smoke and a tight type lock-up carry the energy; the information hierarchy — dates, tickets, sponsors — stays legible underneath it.",
      sv: "Eventaffisch för en veckolång driftserie på Silverstone. Rörelse, rök och en tät typografisk låsning bär energin; informationshierarkin — datum, biljetter, sponsorer — förblir läsbar under den."
    },
    images: 1,
  },
  {
    slug: "f4-phantom",
    group: "illustration",
    title: { en: "F-4 Phantom series", sv: "F-4 Phantom-serien" },
    client: { en: "Personal", sv: "Eget arbete" },
    role: { en: "Illustration, merchandise", sv: "Illustration, merchandise" },
    tools: "Illustrator, Photoshop",
    summary: {
      en: "An illustration series around the F-4 Phantom: a halftone aircraft over a rising sun in two colourways, and its application to apparel. Built to work as a print, a T-shirt and a social post without redrawing.",
      sv: "En illustrationsserie kring F-4 Phantom: ett rastrerat flygplan över en stigande sol i två färgställningar, och dess applicering på kläder. Byggd för att fungera som tryck, T-shirt och inlägg i sociala medier utan att ritas om."
    },
    images: 3,
  },
  {
    /* Sin imágenes todavía — añade img/work/virtual-norte/01.jpg (la tarjeta
       de visita) y quita  draft: true  para que aparezca. */
    slug: "virtual-norte",
    group: "brand",
    draft: true,
    title: { en: "Virtual Norte — visual identity", sv: "Virtual Norte — visuell identitet" },
    client: { en: "Virtual Norte SL", sv: "Virtual Norte SL" },
    year: "2024",
    role: { en: "Brand identity (freelance)", sv: "Visuell identitet (frilans)" },
    tools: "Illustrator",
    summary: {
      en: "Visual identity for Virtual Norte, including business cards and the brand basics.",
      sv: "Visuell identitet för Virtual Norte, inklusive visitkort och grundläggande varumärkeselement."
    },
    images: 0,
  },
];

/* Textos fijos de la interfaz. */
const I18N = {
  en: {
    "nav.work": "Work",
    "nav.about": "About",
    "intro": "I design and produce digital content — graphics, social media, 3D and motion — for brands that need to look consistent across every channel.",
    "work.title": "Selected work",
    "about.title": "About",
    "about.p1": "I'm Linnéa Svärd Martin, a graphic designer and content producer with a BSc in Digital Media Production from Umeå universitet.",
    "about.p2": "Since graduating I've worked on brand identity, print-ready design, social campaigns, photography and 3D visualisation, both in-house and freelance — for Avincis, Grafyco, Love Spirit and Virtual Norte among others. I work in Adobe Illustrator, Photoshop, InDesign and Blender.",
    "about.p3": "Alongside the design work I've spent the last year coordinating a busy international office, which taught me how to run a project with real deadlines, real clients and several people who each want something slightly different.",
    "about.p4": "Swedish and Spanish citizen, based on the Costa Blanca. I work in Swedish, English and Spanish, and I'm open to remote and hybrid roles in content production, graphic design and marketing.",
    "contact.title": "Contact",
    "contact.cv": "Download CV",
    "footer.based": "Based on the Costa Blanca, Spain",
    "project.back": "All work",
    "project.client": "Client",
    "project.year": "Year",
    "project.role": "Role",
    "project.tools": "Tools",
    "project.prev": "Previous",
    "project.next": "Next",
    "project.notfound": "That project isn't here.",
    "lang.switch": "Byt till svenska",
  },
  sv: {
    "nav.work": "Arbeten",
    "nav.about": "Om mig",
    "intro": "Jag formger och producerar digitalt innehåll — grafik, sociala medier, 3D och rörlig grafik — för varumärken som behöver hålla ihop visuellt i alla kanaler.",
    "work.title": "Utvalda arbeten",
    "about.title": "Om mig",
    "about.p1": "Jag är Linnéa Svärd Martin, grafisk formgivare och innehållsproducent med en kandidatexamen i Digital medieproduktion från Umeå universitet.",
    "about.p2": "Sedan examen har jag arbetat med visuell identitet, tryckfärdig formgivning, kampanjer för sociala medier, fotografi och 3D-visualisering, både internt och som frilans — för bland andra Avincis, Grafyco, Love Spirit och Virtual Norte. Jag arbetar i Adobe Illustrator, Photoshop, InDesign och Blender.",
    "about.p3": "Parallellt med designarbetet har jag det senaste året koordinerat ett internationellt kontor med högt tempo, vilket har lärt mig att driva ett projekt med verkliga deadlines, verkliga kunder och flera personer som var och en vill ha något lite olika.",
    "about.p4": "Svensk och spansk medborgare, baserad på Costa Blanca. Jag arbetar på svenska, engelska och spanska och är öppen för roller på distans eller hybrid inom innehållsproduktion, grafisk formgivning och marknadsföring.",
    "contact.title": "Kontakt",
    "contact.cv": "Ladda ner CV",
    "footer.based": "Baserad på Costa Blanca, Spanien",
    "project.back": "Alla arbeten",
    "project.client": "Kund",
    "project.year": "År",
    "project.role": "Roll",
    "project.tools": "Verktyg",
    "project.prev": "Föregående",
    "project.next": "Nästa",
    "project.notfound": "Det projektet finns inte här.",
    "lang.switch": "Switch to English",
  },
};
