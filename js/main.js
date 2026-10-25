/* ============================================================
   Delilah · página personal
   ------------------------------------------------------------
   DÓNDE EDITAR (cada contenido tiene su lista aquí abajo):
   · TASTES   → gustos (añade { name } a la categoría)
   · ART      → dibujos (añade { src, title, desc?, alt? })
   · PROJECTS → proyectos (añade un objeto; los campos opcionales se omiten solos)
   · QA       → preguntas y respuestas por categoría
   · STAMPS   → sellos
   · Canciones → audio/playlist.json (nombre exacto del .mp3)
   Las redes sociales están en index.html (lista .socials).
   ============================================================ */

(function () {
  'use strict';

  /* ================= DATOS ================= */

  // img es opcional. Portadas de la carpeta img/covers/
  const TASTES = [
    { title: '♫ música', items: [
      { name: 'Parade', sub: 'Susumu Hirasawa' },
      { name: 'Cuarteto de Nos', img: 'img/covers/cuarteto-de-nos.jpg' },
      { name: 'Pale Machine', img: 'img/covers/pale-machine.jpg' }
    ]},
    { title: '🎮 videojuegos', items: [
      { name: 'ULTRAKILL', img: 'img/covers/ultrakill.jpg' },
      { name: 'Hollow Knight', img: 'img/covers/hollow-knight.jpg' },
      { name: 'Terraria', img: 'img/covers/terraria.jpg' }
    ]},
    { title: '📺 películas', items: [
      { name: 'Coyote VS ACME' },
      { name: 'Paprika', img: 'img/covers/paprika.jpg' },
      { name: 'LOKI IRL' }
    ]}
  ];

  // title y desc (opcional) salen en la galería y en la lightbox.
  const ART = [
    { src: 'img/art-1.png', title: 'dibujo 1', alt: 'Página de cómic de tres viñetas con globos de texto vacíos' },
    { src: 'img/art-2.png', title: 'dibujo 2', alt: 'Personaje con capa de bandera británica junto a un televisor sonriente' },
    { src: 'img/art-3.png', title: 'dibujo 3', alt: 'Armadura morada con alas amarillas y ventanas de error estilo Windows' },
    { src: 'img/art-4.png', title: 'dibujo 4', alt: 'Pixel art de dos personajes corriendo, uno con cola y calcetines de arcoíris' },
    { src: 'img/art-5.png', title: 'dibujo 5', alt: 'Televisor con estática y un personaje hecho de estática' }
  ];

  // Opcionales: tags, status, repo, demo. Sin repo/demo no se muestra enlace.
  const PROJECTS = [
    { name: 'Esta página personal', desc: 'HTML + CSS + JavaScript puro. Mi primer proyecto web propio.', tags: ['HTML', 'CSS', 'JavaScript'] }
    // { name: 'Nombre', desc: 'Qué es', tags: ['Python'], status: 'en desarrollo', repo: 'https://github.com/...', demo: 'https://...' },
  ];

  // Textos tal como están en informacion_mia.txt
  const QA = [
    { group: 'Sobre tu arte', items: [
      ['¿Qué dibujas normalmente?', 'Dibujo normalmente cada 3mil años habiles pero cuando lo hago suele ser porque los astros se alinearon'],
      ['¿Digital o tradicional?', 'lo que caiga.'],
      ['¿Cuánto tardas en un dibujo?', 'depende de que luna de jupiter este vibrando mas alto, puede tomarme horas o eones.'],
      ['¿Aceptas requests o comisiones?', 'platica ñam, si acepto'],
      ['¿Cuál es tu herramienta/programa favorito?', 'krita forever nenas']
    ]},
    { group: 'Escritura', items: [
      ['¿Qué escribes?', 'puro worlbuilding, a este paso detallare hasta los pelos de los huevos de cada personaje'],
      ['¿De dónde sale la inspiración?', 'puras proyectadas mijo'],
      ['¿Puedo leer algo tuyo?', 'si me siento bien en confianza quizas te de algun sneek peek']
    ]},
    { group: 'Programación y matemáticas', items: [
      ['¿Qué lenguajes usas?', 'python, c++, html, js, css y un hombre que segun se llama json'],
      ['¿Qué estás aprendiendo ahora?', 'a que hay mas formas de cagarla que atomos en el universo'],
      ['¿Por qué te gustan las matemáticas?', 'porque soy masoquista'],
      ['¿Qué vas a estudiar?', 'Ingeniería en Electrónica']
    ]},
    { group: 'Neurodivergencia', items: [
      ['¿Eres neurodivergente?', 'Sí: autismo, TDAH, altas capacidades, y trastornos de procesamiento sensorial, auditivo y vestibular. Lo digo abiertamente porque explicar cómo funciona mi cabeza me ahorra diez conversaciones incómodas después.'],
      ['¿Qué significa eso en el día a día?', 'Ruido de fondo que no puedo filtrar, hiperfocos que duran 8 horas, y necesitar instrucciones escritas en vez de habladas.'],
      ['¿Cómo prefieres que me comunique contigo?', 'Por escrito si es posible, con paciencia si tardo en responder, y sin lenguaje indirecto. Lo directo no me ofende.']
    ]},
    { group: 'Identidad', items: [
      ['¿Cuáles son tus pronombres?', 'Ella. Si te equivocas y lo corriges con naturalidad, no pasa nada.'],
      ['¿Eres LGBT+?', 'Sí. Soy una chica trans, pansexual, demiromántica y asexual. Sí, las cuatro cosas a la vez; no, no me tengo que elegir una.'],
      ['¿Estás en transición?', '«¿Te parece que somos ricos?»\n— Lois, Malcolm el de en medio']
    ]},
    { group: 'Gustos y vida diaria', items: [
      ['¿Qué música escuchas?', 'Lo que caiga amigo, si me gusta me gusta'],
      ['¿Qué estás leyendo/viendo ahora?', 'como sobrevivir a la uni'],
      ['¿De dónde eres?', 'no me doxeare'],
      ['¿Qué haces cuando no dibujas ni programas?', 'es imposible, es mi unico estado (jugar en chess.com)']
    ]}
  ];

  // Si el PNG no existe se muestra una etiqueta con el texto (label).
  const STAMPS = [
    { src: 'img/stamps/stamp-1.png', label: 'Delilah' },
    { src: 'img/stamps/stamp-2.png', label: 'she/her' },
    { src: 'img/stamps/stamp-3.png', label: 'made with love' },
    { src: 'img/stamps/stamp-4.png', label: 'coding' }
  ];

  /* ================= UTILIDADES ================= */

  function el(tag, props, children) {
    const n = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === 'text') n.textContent = props[k];
      else if (k === 'class') n.className = props[k];
      else n.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  const $ = function (id) { return document.getElementById(id); };

  /* ---------- Toast ---------- */
  const toastEl = $('toast');
  let toastTimer = null;
  function showToast(msg, ms) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(function () { toastEl.classList.add('show'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
      setTimeout(function () { toastEl.hidden = true; }, 320);
    }, ms || 2600);
  }

  /* ================= RENDER ================= */

  function renderTastes() {
    const root = $('tastes');
    TASTES.forEach(function (cat) {
      const ul = el('ul');
      cat.items.forEach(function (it) {
        const thumb = it.img
          ? el('img', { src: it.img, alt: '', loading: 'lazy' })
          : el('span', { class: 'noimg', 'aria-hidden': 'true', text: '✦' });
        if (it.img) thumb.addEventListener('error', function () { thumb.replaceWith(el('span', { class: 'noimg', 'aria-hidden': 'true', text: '✦' })); });
        const label = el('span', { text: it.name }, it.sub ? [el('small', { text: it.sub })] : []);
        ul.appendChild(el('li', {}, [thumb, label]));
      });
      root.appendChild(el('div', { class: 'taste' }, [el('h3', { text: cat.title }), ul]));
    });
  }

  function renderGallery() {
    const root = $('gallery');
    ART.forEach(function (a, i) {
      const img = el('img', { src: a.src, alt: a.alt || a.title, loading: 'lazy' });
      img.addEventListener('error', function () { img.style.display = 'none'; });
      const btn = el('button', { type: 'button', 'aria-label': 'Ampliar ' + a.title }, [img]);
      btn.addEventListener('click', function () { openLightbox(i, btn); });
      const cap = el('figcaption', { text: a.title }, a.desc ? [el('span', { text: a.desc })] : []);
      root.appendChild(el('figure', { class: 'art' }, [btn, cap]));
    });
  }

  function renderProjects() {
    const root = $('projects');
    if (!PROJECTS.length) { root.appendChild(el('li', { class: 'hint', text: 'Pronto habrá proyectos aquí ✦' })); return; }
    PROJECTS.forEach(function (p) {
      const h = el('h3', { text: p.name }, p.status ? [el('span', { class: 'status', text: p.status })] : []);
      const li = el('li', { class: 'project' }, [h, el('p', { text: p.desc })]);
      if (p.tags && p.tags.length) li.appendChild(el('ul', { class: 'tags' }, p.tags.map(function (t) { return el('li', { class: 'tag', text: t }); })));
      const links = [];
      if (p.repo) links.push(el('a', { href: p.repo, target: '_blank', rel: 'noopener', text: 'repositorio' }));
      if (p.demo) links.push(el('a', { href: p.demo, target: '_blank', rel: 'noopener', text: 'demo' }));
      if (links.length) li.appendChild(el('div', { class: 'links' }, links));
      root.appendChild(li);
    });
  }

  function renderQA() {
    const root = $('qa-list');
    QA.forEach(function (g) {
      const wrap = el('div', { class: 'qa-group' }, [el('h3', { text: g.group })]);
      g.items.forEach(function (qa) {
        wrap.appendChild(el('details', {}, [el('summary', { text: qa[0] }), el('div', { text: qa[1] })]));
      });
      root.appendChild(wrap);
    });
  }

  function renderStamps() {
    const root = $('stamps');
    STAMPS.forEach(function (s, i) {
      const img = el('img', { src: s.src, alt: 'stamp ' + s.label, loading: 'lazy' });
      img.addEventListener('error', function () {
        img.replaceWith(el('span', { class: 'stamp-fallback', text: s.label }));
      });
      root.appendChild(img);
    });
  }

  /* ================= LIGHTBOX (con navegación) ================= */

  const lb = $('lightbox');
  const lbImg = lb.querySelector('.lightbox-img');
  const lbCap = lb.querySelector('.lightbox-cap');
  let lbIndex = 0, lbOpener = null;

  function showLb(i) {
    lbIndex = (i + ART.length) % ART.length;
    const a = ART[lbIndex];
    lbImg.src = a.src;
    lbImg.alt = a.alt || a.title;
    lbCap.textContent = a.title + (a.desc ? ' — ' + a.desc : '') + '  (' + (lbIndex + 1) + '/' + ART.length + ')';
  }
  function openLightbox(i, opener) {
    lbOpener = opener || null;
    showLb(i);
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox-close').focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (lbOpener) lbOpener.focus();
  }
  lb.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lb.querySelector('.lb-prev').addEventListener('click', function () { showLb(lbIndex - 1); });
  lb.querySelector('.lb-next').addEventListener('click', function () { showLb(lbIndex + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLightbox(); });
  lbImg.addEventListener('error', function () { showToast('no pude cargar esta imagen ✦'); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
    else if (e.key === 'ArrowRight') showLb(lbIndex + 1);
    else if (e.key === 'Tab') { // mantener el foco dentro del diálogo
      const f = lb.querySelectorAll('button');
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ================= ÍNDICE ACTIVO ================= */

  function initTOC() {
    const links = document.querySelectorAll('.toc a');
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('.content section[id]').forEach(function (s) { obs.observe(s); });
  }

  /* ================= ESTRELLAS (canvas) ================= */

  function initStars() {
    const cv = $('stars');
    const ctx = cv.getContext('2d');
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const COLORS = ['255,255,255', '255,255,255', '224,185,79', '224,185,79', '157,123,242'];
    let stars = [], w = 0, h = 0, raf = 0, mx = 0, my = 0, tx = 0, ty = 0;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(220, Math.round(w * h / 9000));
      stars = [];
      for (let i = 0; i < n; i++) {
        const depth = Math.random();
        stars.push({
          x: Math.random() * w, y: Math.random() * h, depth: depth,
          r: 0.4 + depth * 1.3, base: 0.25 + Math.random() * 0.55,
          sp: 0.4 + Math.random() * 1.4, ph: Math.random() * 6.28,
          c: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
    }
    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      mx += (tx - mx) * 0.05; my += (ty - my) * 0.05;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const a = mq.matches ? s.base : s.base * (0.6 + 0.4 * Math.sin(t / 1000 * s.sp + s.ph));
        const x = (s.x + mx * s.depth * 14 + w) % w, y = (s.y + my * s.depth * 14 + h) % h;
        ctx.fillStyle = 'rgba(' + s.c + ',' + a.toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();
        if (s.r > 1.4) { ctx.fillRect(x - s.r * 2.2, y - 0.3, s.r * 4.4, 0.6); ctx.fillRect(x - 0.3, y - s.r * 2.2, 0.6, s.r * 4.4); }
      }
    }
    function loop(t) { draw(t); raf = requestAnimationFrame(loop); }
    function start() { cancelAnimationFrame(raf); if (mq.matches) draw(0); else raf = requestAnimationFrame(loop); }

    let rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { build(); start(); }, 150); });
    document.addEventListener('visibilitychange', function () { if (document.hidden) cancelAnimationFrame(raf); else start(); });
    if (mq.addEventListener) mq.addEventListener('change', start);
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', function (e) { tx = e.clientX / w - 0.5; ty = e.clientY / h - 0.5; }, { passive: true });
    }
    build(); start();
  }

  /* ================= INICIO ================= */
  renderTastes(); renderGallery(); renderProjects(); renderQA(); renderStamps();
  initTOC(); initStars();


  /* ============================================================
     MINI REPRODUCTOR · aleatorio + metadatos ID3 (título y cover)
     ============================================================ */
  (function initMusicPlayer() {

    const DIR = 'audio/';

    const audioEl  = document.getElementById('bg-music');
    const panel    = document.getElementById('player');
    if (!audioEl || !panel) return;

    const openBtn  = document.getElementById('music-toggle');
    const closeBtn = document.getElementById('player-close');
    const coverEl  = document.getElementById('player-cover');
    const coverFb  = document.getElementById('player-cover-fallback');
    const titleEl  = document.getElementById('player-title');
    const artistEl = document.getElementById('player-artist');
    const seekEl   = document.getElementById('player-seek');
    const curEl    = document.getElementById('player-current');
    const durEl    = document.getElementById('player-duration');
    const playBtn  = document.getElementById('player-play');
    const prevBtn  = document.getElementById('player-prev');
    const nextBtn  = document.getElementById('player-next');
    const countEl  = document.getElementById('player-count');
    const volEl    = document.getElementById('player-volume');

    /* ---------- Parser ID3v2 ---------- */
    function syncsafe(b, i) {
      return (b[i] & 0x7f) * 2097152 + (b[i+1] & 0x7f) * 16384 +
             (b[i+2] & 0x7f) * 128 + (b[i+3] & 0x7f);
    }
    function decodeString(bytes, start, end) {
      if (start >= end) return '';
      const enc = bytes[start];
      const data = bytes.subarray(start + 1, end);
      let text = '';
      
      try {
        if (enc === 0) {
          // A veces guardan UTF-8 con enc=0. Intentamos leerlo bien.
          try {
            text = new TextDecoder('utf-8', { fatal: true }).decode(data);
          } catch (e) {
            text = new TextDecoder('windows-1252').decode(data);
          }
        } else if (enc === 1) {
          // UTF-16 (el que causa el chino). Revisamos cómo empieza la letra.
          if (data[0] === 0xFF && data[1] === 0xFE) {
            text = new TextDecoder('utf-16le').decode(data.subarray(2));
          } else if (data[0] === 0xFE && data[1] === 0xFF) {
            text = new TextDecoder('utf-16be').decode(data.subarray(2));
          } else {
            text = new TextDecoder('utf-16le').decode(data);
          }
        } else if (enc === 2) {
          text = new TextDecoder('utf-16be').decode(data);
        } else {
          text = new TextDecoder('utf-8').decode(data);
        }
      } catch (e) { return ''; }
      
      // Limpiamos los espacios raros y los caracteres invisibles
      return text.replace(/\0/g, '').trim();
    }
    function readPicture(bytes, start, end, ver) {
      const enc = bytes[start];
      let p = start + 1;
      let mime = 'image/jpeg';
      if (ver === 2) {
        const fmt = String.fromCharCode(bytes[p], bytes[p+1], bytes[p+2]).toUpperCase();
        mime = fmt === 'PNG' ? 'image/png' : 'image/jpeg';
        p += 3;
      } else {
        let mimeEnd = p;
        while (mimeEnd < end && bytes[mimeEnd] !== 0) mimeEnd++;
        let raw = '';
        for (let i = p; i < mimeEnd; i++) raw += String.fromCharCode(bytes[i]);
        raw = raw.toLowerCase();
        if (raw.indexOf('png') !== -1) mime = 'image/png';
        else if (raw.indexOf('webp') !== -1) mime = 'image/webp';
        else if (raw.indexOf('gif') !== -1) mime = 'image/gif';
        else mime = 'image/jpeg';
        p = mimeEnd + 1;
      }
      p += 1;
      if (enc === 1 || enc === 2) {
        while (p + 1 < end && !(bytes[p] === 0 && bytes[p+1] === 0)) p += 2;
        p += 2;
      } else {
        while (p < end && bytes[p] !== 0) p++;
        p += 1;
      }
      if (p >= end) return null;
      try {
        return URL.createObjectURL(new Blob([bytes.subarray(p, end)], { type: mime }));
      } catch (e) { return null; }
    }
    function parseID3(buffer) {
      const meta = { title: '', artist: '', album: '', cover: null };
      const bytes = new Uint8Array(buffer);
      if (bytes.length < 10) return meta;
      if (bytes[0] !== 0x49 || bytes[1] !== 0x44 || bytes[2] !== 0x33) return meta;
      const ver    = bytes[3];
      const flags  = bytes[5];
      const tagEnd = Math.min(10 + syncsafe(bytes, 6), bytes.length);
      let p = 10;
      if (flags & 0x40) {
        if (ver >= 4) p += syncsafe(bytes, p);
        else {
          const ext = ((bytes[p] << 24) | (bytes[p+1] << 16) |
                       (bytes[p+2] << 8) | bytes[p+3]) >>> 0;
          p += 4 + ext;
        }
      }
      while (p + 6 <= tagEnd) {
        let id, size, header;
        if (ver === 2) {
          id = String.fromCharCode(bytes[p], bytes[p+1], bytes[p+2]);
          size = (bytes[p+3] << 16) | (bytes[p+4] << 8) | bytes[p+5];
          header = 6;
        } else {
          id = String.fromCharCode(bytes[p], bytes[p+1], bytes[p+2], bytes[p+3]);
          size = ver >= 4 ? syncsafe(bytes, p + 4)
            : (((bytes[p+4] << 24) | (bytes[p+5] << 16) |
                (bytes[p+6] << 8) | bytes[p+7]) >>> 0);
          header = 10;
        }
        if (!id || id.charCodeAt(0) === 0 || size <= 0) break;
        const start = p + header;
        const end = Math.min(start + size, tagEnd);
        if (start >= tagEnd) break;
        if (id === 'TIT2' || id === 'TT2')       meta.title  = decodeString(bytes, start, end);
        else if (id === 'TPE1' || id === 'TP1')  meta.artist = decodeString(bytes, start, end);
        else if (id === 'TALB' || id === 'TAL')  meta.album  = decodeString(bytes, start, end);
        else if (id === 'APIC' || id === 'PIC') {
          const pic = readPicture(bytes, start, end, ver);
          if (pic && !meta.cover) meta.cover = pic;
        }
        p = start + size;
      }
      return meta;
    }
    async function readTags(url) {
      try {
        const res = await fetch(url, { headers: { Range: 'bytes=0-524287' } });
        if (!res.ok) return {};
        return parseID3(await res.arrayBuffer());
      } catch (e) { return {}; }
    }

    /* ---------- Descubrir canciones (4 niveles) ---------- */
    async function discoverSongs() {
      try {
        const res = await fetch(DIR + 'playlist.json', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : data.songs;
          if (Array.isArray(list) && list.length) return list;
        }
      } catch (e) { }

      try {
        const res = await fetch(DIR, { cache: 'no-store' });
        if (res.ok) {
          const html = await res.text();
          const found = [];
          const re = /href="([^"]+\.mp3)"/gi;
          let m;
          while ((m = re.exec(html)) !== null) {
            const name = decodeURIComponent(m[1].split('/').pop());
            if (name && found.indexOf(name) === -1) found.push(name);
          }
          if (found.length) return found;
        }
      } catch (e) { }

      const inlineEl = document.getElementById('song-list');
      if (inlineEl) {
        try {
          const data = JSON.parse(inlineEl.textContent);
          const list = Array.isArray(data) ? data : data.songs;
          if (Array.isArray(list) && list.length) return list;
        } catch (e) { }
      }

      return ['song.mp3'];
    }

    /* ---------- Estado ---------- */
    let songs        = [];
    const tagsCache  = new Map();
    let current      = -1;
    let history      = [];
    let seeking      = false;
    let started      = false;
    let readyPromise = null;
    let lastCover    = null;

    function ready() {
      if (!readyPromise) {
        readyPromise = discoverSongs().then(function (list) {
          songs = list;
          if (countEl) countEl.textContent = list.length;
          return list;
        });
      }
      return readyPromise;
    }

    /* ---------- Abrir / Cerrar panel ---------- */
    function openPanel() {
      panel.classList.add('open');
      panel.setAttribute('aria-hidden', 'false');
    }

    function closePanel() {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }

    /* ---------- Utilidades UI ---------- */
    function fmt(sec) {
      if (!isFinite(sec) || sec < 0) return '0:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return m + ':' + String(s).padStart(2, '0');
    }
    function prettyName(file) {
      return decodeURIComponent(file)
        .replace(/\.mp3$/i, '')
        .replace(/[_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    }
    function paint(range) {
      if (!range) return;
      const max = Number(range.max) || 1;
      range.style.setProperty('--fill', (Number(range.value) / max) * 100 + '%');
    }
        function showCover(url) {
      // Quitamos la línea que revocaba la imagen anterior para que no se rompa al repetir
      if (url) {
        coverEl.src = url;
        coverEl.hidden = false;
        coverFb.hidden = true;
      } else {
        coverEl.removeAttribute('src');
        coverEl.hidden = true;
        coverFb.hidden = false;
      }
    }
    function updatePlayButton() {
      const playing = !audioEl.paused;
      playBtn.textContent = playing ? '⏸' : '▶';
      playBtn.setAttribute('aria-label', playing ? 'Pausar' : 'Reproducir');
      playBtn.title = playing ? 'Pausar' : 'Reproducir';
      openBtn.classList.toggle('playing', playing);
    }

    /* ---------- Carga de pistas ---------- */
    async function loadTrack(index, autoplay) {
      if (index < 0 || index >= songs.length) return;
      current = index;
      const file = songs[index];
      const url  = DIR + encodeURIComponent(file);

      titleEl.textContent  = prettyName(file);
      artistEl.textContent = '…';
      showCover(null);
      seekEl.value = 0;
      paint(seekEl);
      curEl.textContent = '0:00';
      durEl.textContent = '0:00';

      audioEl.src = url;
      audioEl.load();

      if (autoplay) {
        try { await audioEl.play(); }
        catch (e) { showToast('toca ▶ para reproducir ✦'); }
      }

      let tags = tagsCache.get(url);
      if (!tags) {
        tags = await readTags(url);
        tagsCache.set(url, tags);
      }
      if (current !== index) return;

      if (tags.title)  titleEl.textContent  = tags.title;
      artistEl.textContent = tags.artist || tags.album || 'desconocido';
      if (tags.cover)  showCover(tags.cover);
      updateMediaSession(tags);
    }
    function pickRandom() {
      const n = songs.length;
      if (n === 0) return -1;
      if (n === 1) return 0;
      let i;
      do { i = Math.floor(Math.random() * n); } while (i === current);
      return i;
    }
    function nextTrack() {
      if (!songs.length) return;
      if (current >= 0) {
        history.push(current);
        if (history.length > 30) history.shift();
      }
      loadTrack(pickRandom(), true);
    }
    function prevTrack() {
      if (!songs.length) return;
      if (audioEl.currentTime > 3 || history.length === 0) {
        audioEl.currentTime = 0;
        return;
      }
      loadTrack(history.pop(), true);
    }

    /* ---------- Media Session ---------- */
    function updateMediaSession(tags) {
      if (!('mediaSession' in navigator)) return;
      try {
        navigator.mediaSession.metadata = new MediaMetadata({
          title:  tags.title  || titleEl.textContent,
          artist: tags.artist || '',
          album:  tags.album  || '',
          artwork: tags.cover ? [{ src: tags.cover, sizes: '512x512', type: 'image/jpeg' }] : []
        });
      } catch (e) { }
    }
    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.setActionHandler('play',          function () { audioEl.play(); });
        navigator.mediaSession.setActionHandler('pause',         function () { audioEl.pause(); });
        navigator.mediaSession.setActionHandler('nexttrack',     nextTrack);
        navigator.mediaSession.setActionHandler('previoustrack', prevTrack);
      } catch (e) { }
    }

    /* ---------- Eventos audio ---------- */
    audioEl.volume = 0.5;
    if (volEl) {
      volEl.value = 50;
      paint(volEl);
      volEl.addEventListener('input', function () {
        audioEl.volume = Number(volEl.value) / 100;
        paint(volEl);
      });
    }

    audioEl.addEventListener('loadedmetadata', function () {
      durEl.textContent = fmt(audioEl.duration);
    });
    audioEl.addEventListener('timeupdate', function () {
      if (!seeking) {
        const d = audioEl.duration;
        if (isFinite(d) && d > 0) {
          seekEl.value = Math.round((audioEl.currentTime / d) * 1000);
          paint(seekEl);
        }
        curEl.textContent = fmt(audioEl.currentTime);
      }
    });
    audioEl.addEventListener('play',  updatePlayButton);
    audioEl.addEventListener('pause', updatePlayButton);
    audioEl.addEventListener('ended', nextTrack);

    let failures = 0;
    audioEl.addEventListener('error', function () {
      if (current < 0 || !songs.length) return;
      failures++;
      if (failures > songs.length + 1) {
        showToast('no pude cargar ninguna canción ✦');
        return;
      }
      showToast('no pude cargar «' + prettyName(songs[current]) + '» ✦');
      setTimeout(nextTrack, 800);
    });

    /* ---------- Barra de progreso ---------- */
    seekEl.addEventListener('input', function () {
      seeking = true;
      const d = audioEl.duration;
      if (isFinite(d) && d > 0) curEl.textContent = fmt((Number(seekEl.value) / 1000) * d);
      paint(seekEl);
    });
    seekEl.addEventListener('change', function () {
      const d = audioEl.duration;
      if (isFinite(d) && d > 0) audioEl.currentTime = (Number(seekEl.value) / 1000) * d;
      seeking = false;
    });

    /* ---------- Botones ---------- */
    playBtn.addEventListener('click', async function () {
      await ready();
      if (!songs.length) { showToast('no encontré canciones en audio/ ✦'); return; }
      if (current < 0) { loadTrack(pickRandom(), true); return; }
      if (audioEl.paused) {
        try { await audioEl.play(); }
        catch (e) { showToast('no se pudo reproducir ✦'); }
      } else {
        audioEl.pause();
      }
    });

    nextBtn.addEventListener('click', async function () {
      await ready();
      if (!songs.length) { showToast('no encontré canciones en audio/ ✦'); return; }
      nextTrack();
    });

    prevBtn.addEventListener('click', async function () {
      await ready();
      if (!songs.length) return;
      prevTrack();
    });

    closeBtn.addEventListener('click', closePanel);

    openBtn.addEventListener('click', async function () {
      if (panel.classList.contains('open')) {
        closePanel();
        return;
      }
      
      openPanel();

      if (!started) {
        started = true;
        await ready();
        if (songs.length) loadTrack(pickRandom(), true);
        else showToast('agrega .mp3 en audio/ ✦');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
    });

    ready();
  })();

})();
