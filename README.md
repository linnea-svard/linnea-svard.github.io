# Portfolio — Linnéa Svärd Martin

Sitio estático, sin dependencias ni proceso de build. Se sube tal cual a GitHub Pages.

```
index.html          portada: intro, trabajos por disciplina, sobre mí, contacto
project.html        ficha de cada proyecto (lee ?p=<slug> de la URL)
js/data.js          ← EL ÚNICO ARCHIVO QUE HAY QUE EDITAR: proyectos y textos EN/SV
js/site.js          renderizado y cambio de idioma (no hace falta tocarlo)
css/style.css       estilos
img/work/<slug>/    imágenes de cada proyecto: 01.jpg (portada), 02.jpg, 03.jpg …
img/archive/        las 15 imágenes del WordPress que no se muestran, por si se quieren rescatar
img/linnea.jpg      foto de perfil
cv/                 dejar aquí el PDF del CV con el nombre  Linnea-Svard-Martin-CV.pdf
```

## Probarlo en local

Basta con abrir `index.html` en el navegador. Si el navegador bloquea algo por ser
`file://`, servirlo con Python desde esta carpeta:

```
python -m http.server 8000
```

y abrir http://localhost:8000

## Añadir un proyecto

1. Crear `img/work/<slug>/` y meter las imágenes como `01.jpg`, `02.jpg`… La `01` es
   la que sale en la portada (se recorta a 4:5 en la rejilla, así que que el motivo
   esté centrado). Tamaño recomendado: 1600 px en el lado largo, JPEG.
2. En `js/data.js`, copiar un bloque de `PROJECTS`, cambiar el `slug` (igual que la
   carpeta), el `group` (uno de los ids de `GROUPS`), los textos en `en` y `sv`, y
   poner en `images` cuántas fotos hay.
3. Guardar y subir. No hay nada más.

Los campos `client`, `year`, `role` y `tools` son opcionales: si faltan, no se muestran.
`draft: true` oculta un proyecto sin borrarlo.

## Pendiente de completar

- [ ] **Virtual Norte**: está en `data.js` como `draft: true` sin imágenes. Añadir la
      tarjeta de visita como `img/work/virtual-norte/01.jpg` y quitar el `draft`.
- [ ] **CV en PDF** en `cv/Linnea-Svard-Martin-CV.pdf` (o cambiar la ruta en `SITE.cv`).
- [ ] **Confirmar la naturaleza de tres proyectos** y ajustar el campo `client` si hace falta:
      - 226ERS — ¿encargo o trabajo propio? Ahora figura como cliente.
      - Nordbo / Stonethread — figura como «Concept project». Si fue para la universidad
        o para un cliente real, cambiarlo.
      - 7 Days of Drift — figura como «Personal».
- [ ] **Marca de agua en Love Spirit**: las 7 fotos llevan el mosaico «Linnéa Svärd Martin —
      do not use without permission» que tenían en WordPress. En un portfolio propio resta
      más que protege. Si existen los originales limpios, sustituir `img/work/love-spirit/01–07.jpg`
      (1600 px en el lado largo, JPEG).
- [ ] **Años** de los proyectos personales, si se quieren mostrar (ahora no se muestran).
- [ ] Leer los textos EN y SV de cada proyecto y corregir lo que no encaje con lo que
      realmente se hizo. Están escritos a partir de las descripciones de LinkedIn y de
      las propias imágenes; algún detalle puede estar mal.

## Dónde está publicado

Repositorio: https://github.com/linnea-svard/linnea-svard.github.io
Sitio: **https://linnea-svard.github.io/**

Es un *user site* de GitHub Pages: se publica solo desde la rama `main`, raíz, cada vez
que se hace push. Tarda uno o dos minutos en actualizarse.

## Publicar un cambio

```
cd linnea-portfolio
git add .
git commit -m "Describe el cambio"
git push
```

El repo tiene configurada la identidad de Linnéa (`user.name` / `user.email` locales al
repo) y la credencial de `linnea-svard` está guardada en el Credential Manager de Windows,
así que no pide nada.

## Dominio propio

Un dominio tipo `linneasvard.com` o `linneasvardmartin.com` cuesta unos 10 €/año y es un
salto de credibilidad real frente a una URL de github.io o wordpress.com.

1. Comprar el dominio (Namecheap, Porkbun, Cloudflare Registrar…).
2. En el DNS del dominio:
   - `CNAME`  `www`  →  `linnea-svard.github.io`
   - Cuatro registros `A` en el apex (`@`) apuntando a las IPs de GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (comprobar que siguen vigentes en
     https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
3. En el repo, **Settings → Pages → Custom domain**: escribir el dominio (sin `www`) y,
   cuando el DNS haya propagado, marcar *Enforce HTTPS*. GitHub crea el archivo `CNAME`
   en la raíz del repo automáticamente — no borrarlo.
4. Cambiar el `og:image` de `index.html` para que apunte al dominio nuevo.
5. Actualizar el enlace «My Portfolio» de LinkedIn y dar de baja el WordPress.

## Idiomas

El sitio detecta el idioma del navegador (sueco → SV, resto → EN) y recuerda la
elección del botón EN/SV. Para añadir un tercer idioma habría que añadir su clave a
`LANGS` en `site.js` y sus textos en `I18N` y en cada proyecto de `data.js`.
