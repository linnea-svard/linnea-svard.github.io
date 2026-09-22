/* Renderizado y cambio de idioma. No hace falta tocar este archivo
   para añadir proyectos: eso se hace en data.js. */
(function () {
  "use strict";

  const LANGS = ["en", "sv"];
  const KEY = "lang";

  function detectLang() {
    try {
      const saved = localStorage.getItem(KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* almacenamiento bloqueado: usamos el idioma del navegador */ }
    return (navigator.language || "").toLowerCase().startsWith("sv") ? "sv" : "en";
  }

  let lang = detectLang();

  /* Devuelve el texto en el idioma actual. Acepta un string (igual en
     ambos idiomas) o un objeto { en, sv }. */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.en || "";
  }
  function ui(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }

  function visibleProjects() { return PROJECTS.filter(p => !p.draft && p.images > 0); }
  function imgPath(p, n) { return `img/work/${p.slug}/${String(n).padStart(2, "0")}.jpg`; }

  function el(tag, attrs, children) {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "html") n.innerHTML = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(c => c && n.appendChild(c));
    return n;
  }

  /* --- textos fijos ------------------------------------------------ */
  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(n => { n.textContent = ui(n.dataset.i18n); });
    document.querySelectorAll("[data-lang]").forEach(b => {
      const active = b.dataset.lang === lang;
      b.setAttribute("aria-pressed", String(active));
    });
    const sw = document.querySelector("[data-lang-switch]");
    if (sw) sw.setAttribute("aria-label", ui("lang.switch"));
    const cv = document.querySelector("[data-cv]"); if (cv) cv.href = SITE.cv;
    const em = document.querySelector("[data-email]"); if (em) { em.href = "mailto:" + SITE.email; em.textContent = SITE.email; }
    const li = document.querySelector("[data-linkedin]"); if (li) li.href = SITE.linkedin;
    const ig = document.querySelector("[data-instagram]"); if (ig) ig.href = SITE.instagram;
    const ph = document.querySelector("[data-photo]"); if (ph) { ph.src = SITE.photo; ph.alt = SITE.name; }
    document.querySelectorAll("[data-year]").forEach(n => n.textContent = new Date().getFullYear());
  }

  /* --- portada: grid por disciplina -------------------------------- */
  function renderHome() {
    const root = document.getElementById("work");
    if (!root) return;
    root.innerHTML = "";
    const projects = visibleProjects();
    GROUPS.forEach(g => {
      const items = projects.filter(p => p.group === g.id);
      if (!items.length) return;
      const grid = el("div", { class: "grid" }, items.map(p =>
        el("a", { class: "card", href: `project.html?p=${p.slug}` }, [
          el("figure", { class: "card-img" }, [
            el("img", { src: imgPath(p, 1), alt: t(p.title), loading: "lazy", decoding: "async" })
          ]),
          el("div", { class: "card-text" }, [
            el("h3", { text: t(p.title) }),
            el("p", { class: "meta", text: [
              t(p.client), p.year,
              p.videos && p.videos.length ? `${p.videos.length} ${p.videos.length === 1 ? "reel" : "reels"}` : ""
            ].filter(Boolean).join(" · ") })
          ])
        ])
      ));
      root.appendChild(el("section", { class: "group", "aria-labelledby": `g-${g.id}` }, [
        el("h2", { class: "group-label", id: `g-${g.id}`, text: t(g.label) }),
        grid
      ]));
    });
  }

  /* --- ficha de proyecto ------------------------------------------- */
  function renderProject() {
    const root = document.getElementById("project");
    if (!root) return;
    const slug = new URLSearchParams(location.search).get("p");
    const list = visibleProjects();
    const i = list.findIndex(p => p.slug === slug);
    root.innerHTML = "";

    if (i < 0) {
      root.appendChild(el("p", { class: "notfound", text: ui("project.notfound") }));
      root.appendChild(el("a", { class: "back", href: "index.html", text: "← " + ui("project.back") }));
      document.title = SITE.name;
      return;
    }
    const p = list[i], g = GROUPS.find(x => x.id === p.group);
    document.title = `${t(p.title)} — ${SITE.name}`;

    const meta = [
      ["project.client", t(p.client)],
      ["project.year", p.year],
      ["project.role", t(p.role)],
      ["project.tools", t(p.tools)],
    ].filter(r => r[1]);

    root.appendChild(el("header", { class: "p-head" }, [
      el("p", { class: "group-label", text: g ? t(g.label) : "" }),
      el("h1", { text: t(p.title) }),
      el("dl", { class: "p-meta" }, meta.flatMap(r => [el("dt", { text: ui(r[0]) }), el("dd", { text: r[1] })])),
      el("div", { class: "p-summary", html: t(p.summary) }),
    ]));

    /* vídeos (reels): .mp4 en la carpeta del proyecto, o embed de YouTube/Vimeo */
    if (p.videos && p.videos.length) {
      root.appendChild(el("div", { class: "p-videos" }, p.videos.map(v => {
        const fig = el("figure", { class: "p-video" });
        if (v.embed) {
          fig.appendChild(el("iframe", {
            src: v.embed, loading: "lazy", allowfullscreen: "",
            allow: "autoplay; fullscreen; picture-in-picture",
            title: t(v.title) || t(p.title)
          }));
        } else {
          const vid = el("video", { controls: "", playsinline: "", preload: "metadata" });
          if (v.poster) vid.setAttribute("poster", `img/work/${p.slug}/${v.poster}`);
          vid.appendChild(el("source", { src: `img/work/${p.slug}/${v.file}`, type: "video/mp4" }));
          fig.appendChild(vid);
        }
        if (v.title) fig.appendChild(el("figcaption", { class: "meta", text: t(v.title) }));
        return fig;
      })));
    }

    const imgs = [];
    for (let n = 1; n <= p.images; n++) {
      imgs.push(el("figure", { class: "p-fig" }, [
        el("img", { src: imgPath(p, n), alt: `${t(p.title)} — ${n}`, loading: n === 1 ? "eager" : "lazy", decoding: "async" })
      ]));
    }
    root.appendChild(el("div", { class: "p-images" }, imgs));

    const prev = list[(i - 1 + list.length) % list.length];
    const next = list[(i + 1) % list.length];
    root.appendChild(el("nav", { class: "p-nav", "aria-label": "Projects" }, [
      el("a", { href: `project.html?p=${prev.slug}` }, [
        el("span", { class: "meta", text: "← " + ui("project.prev") }),
        el("span", { text: t(prev.title) })
      ]),
      el("a", { href: "index.html", class: "p-nav-all", text: ui("project.back") }),
      el("a", { href: `project.html?p=${next.slug}`, class: "p-nav-next" }, [
        el("span", { class: "meta", text: ui("project.next") + " →" }),
        el("span", { text: t(next.title) })
      ]),
    ]));
  }

  function renderAll() { applyStatic(); renderHome(); renderProject(); }

  function setLang(l) {
    if (!LANGS.includes(l) || l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) { /* sin persistencia, no pasa nada */ }
    renderAll();
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-lang]");
    if (b) { e.preventDefault(); setLang(b.dataset.lang); }
  });

  renderAll();
})();
