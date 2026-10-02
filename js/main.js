/* ============================================
   ALY QUINTERO — PORTFOLIO JS
   Custom cursor, filter, i18n, scroll, lazy video
   ============================================ */

(function () {
  'use strict';

  // ==========================================
  // TRANSLATIONS (ES / EN)
  // ==========================================
  const translations = {
    es: {
      'nav.work': 'Trabajo',
      'nav.clients': 'Clients',
      'nav.about': 'Sobre mí',
      'nav.hire': 'CONTÁCTAME',
      'hero.role1': 'VIDEO EDITOR',
      'hero.role2': 'MOTION DESIGNER',
      'hero.role3': 'AI FILMMAKER',
      'hero.tagline': 'Dando vida a historias a través de la edición, el motion design y la IA — cuadro a cuadro.',
      'hero.status': 'DISPONIBLE PARA NUEVOS PROYECTOS',
      'hero.showreel': '▶ VER MI TRABAJO',
      'hero.hire': 'CONTÁCTAME →',
      'trusted.label': 'CREADORES Y MARCAS QUE CONFÍAN EN MÍ',
      'work.title': 'MI<br>TRABAJO',
      'work.label': 'PROYECTOS',
      'work.hint': 'TOCA UNA CATEGORÍA PARA FILTRAR',
      'filter.all': 'TODOS',
      'filter.more': 'VER MÁS →',
      'filter.empty': 'CONTENIDO EN ACTUALIZACIÓN — VUELVE PRONTO',
      'nav.contact': 'Contacto',
      'contact.label': 'CONTACTO',
      'contact.title': 'TRABAJEMOS JUNTOS',
      'contact.sub': 'Encuéntrame en estas plataformas — empecemos algo genial.',
      'filter.reels': 'REELS',
      'filter.ads': 'ADS',
      'filter.vsl': 'VSL',
      'filter.podcast': 'PODCAST',
      'filter.motion': 'MOTION DESIGN',
      'filter.ai': 'AI ADS',
      'filter.youtube': 'YOUTUBE',
      'filter.eventcorp': 'EVENTOS & CORPORATIVOS',
      'cat.reels': 'REELS',
      'cat.eventcorp': 'EVENTOS & CORPORATIVOS',
      'type.event': 'VIDEO DE EVENTO',
      'type.corp': 'PROMOCIÓN CORPORATIVA',
      'cat.ads': 'ADS',
      'cat.vsl': 'VSL / VIDEO SALES LETTER',
      'cat.youtube': 'YOUTUBE / LONG-FORM',
      'cat.podcast': 'PODCAST',
      'cat.motion': 'MOTION DESIGN',
      'cat.ai': 'AI ADS',
      'clients.label': 'CLIENTS',
      'clients.title': 'HE TRABAJADO CON',
      'clients.creators': 'CREADORES DE CONTENIDO',
      'clients.companies': 'EMPRESAS',
      'clients.modalLabel': 'CLIENTE',
      'back.work': 'VOLVER A PROYECTOS',
      'switch.label': 'CAMBIAR DE SECCIÓN',
      'views.label': 'VISTAS',
      'tool.pr': 'Donde edito cada proyecto, de principio a fin',
      'tool.ae': 'Donde las motion graphics cobran vida',
      'tool.davinci': 'Color grading y el look final de cada video',
      'tool.ps': 'Thumbnails, retoque y pulido visual',
      'tool.melius': 'Flujos de producción asistidos por IA',
      'tool.higgsfield': 'Movimientos de cámara cinematográficos con IA',
      'tool.nano': 'Generación y edición de imágenes con IA',
      'tool.seedance': 'Generación de video con IA para mis anuncios',
      'title.ads': 'ADS /<br>PUBLICIDAD',
      'title.ai': 'AI ADS /<br>INNOVACIÓN',
      'title.vsl': 'VSL /<br>VENTAS EN VIDEO',
      'count.1': '1 PROYECTO',
      'count.4': '4 PROYECTOS',
      'count.5': '5 PROYECTOS',
      'count.6': '6 PROYECTOS',
      'count.8': '8 PROYECTOS',
      'count.10': '10 PROYECTOS',
      'count.20': '20 PROYECTOS',
      'count.2': '2 PROYECTOS',
      'count.3': '3 PROYECTOS',
      'count.9': '9 PROYECTOS',
      'count.16': '16 PROYECTOS',
      'count.19': '19 PROYECTOS',
      'proj.1': 'PROYECTO 1',
      'proj.2': 'PROYECTO 2',
      'proj.3': 'PROYECTO 3',
      'proj.4': 'PROYECTO 4',
      'proj.5': 'PROYECTO 5',
      'proj.6': 'PROYECTO 6',
      'proj.7': 'PROYECTO 7',
      'proj.8': 'PROYECTO 8',
      'proj.9': 'PROYECTO 9',
      'proj.10': 'PROYECTO 10',
      'proj.11': 'PROYECTO 11',
      'proj.12': 'PROYECTO 12',
      'proj.13': 'PROYECTO 13',
      'proj.14': 'PROYECTO 14',
      'proj.15': 'PROYECTO 15',
      'proj.16': 'PROYECTO 16',
      'clients.desc.eliteceos': 'Plataforma de coaching que ha generado más de $100M en ingresos y ayudado a sus clientes a ganar más de $1B — ofertas de alto ticket, copywriting, ads, ventas, embudos y operaciones para coaches de salud, riqueza y relaciones.',
      'clients.desc.v2visuals': 'Empresa de producción de video con base en San Diego, destacada en CNBC con más de 7 años creando medios de alto impacto: producción y edición de video, motion design, fotografía, creatividad para ads, branding y servicios de IA para marcas y eventos.',
      'clients.desc.phunware': 'Empresa de tecnología hotelera detrás del Guest Intelligence Platform — concierge con IA, wayfinding y datos de ubicación desplegados en resorts de renombre como Atlantis Paradise Island y Wailea Beach Resort, donde la adopción de la app supera el 70% durante la estadía.',
      'clients.desc.thatisimpossible': 'Canal de YouTube con 1.72M de suscriptores y más de 200M de vistas totales, donde James LaFleur analiza en detalle videos virales extraños, misteriosos y a veces sin explicación.',
      'clients.desc.jaymez': 'Canal de YouTube de reacciones con 539K suscriptores y más de 79M de vistas totales, cubriendo lo más extraño de internet por más de 10 años — misterios, lugares extraños, videos perturbadores y fenómenos paranormales.',
      'clients.desc.adrop': 'Equipo de creatividad publicitaria white-label para agencias de performance marketing — ads mejorados con IA, entregados en 24–72h, con más de 50 agencias activas y pago por cada ad producido.',
      'about.label': 'SOBRE MÍ',
      'about.text': "Soy Aly Quintero — Video Editor, Motion Designer y AI Filmmaker, creando contenido visual para marcas, coaches y creadores de todo el mundo.<br><br>Me encargo de todo: Facebook Ads, YouTube de formato largo, TikTok Reels y campañas con IA. Mi flujo de trabajo cubre edición, color grading, audio, motion graphics y producción asistida por IA.<br><br>Si tu proyecto necesita ese nivel de precisión, hablemos.",
      'about.cta': 'HABLEMOS',
      'about.ctaNote': 'SIN FORMULARIOS. SOLO EMAIL — LEO TODOS.',
      'about.contact': 'Contacto:',
      'copy.email': 'COPIAR',
      'copy.done': 'COPIADO!',
      'cta.next': 'SIGUIENTE PASO',
      'cta.want': '¿QUIERES ALGO ASÍ?',
      'cta.sub': 'UN SOLO CORREO. RESPONDO EN 24 HORAS CON IDEAS, TIEMPO Y PRECIO.',
      'cta.emailLabel': 'CORREO DE CONTACTO:',
    },
    en: {
      'nav.work': 'Work',
      'nav.clients': 'Clients',
      'nav.about': 'About',
      'nav.hire': 'HIRE ME',
      'hero.role1': 'VIDEO EDITOR',
      'hero.role2': 'MOTION DESIGNER',
      'hero.role3': 'AI FILMMAKER',
      'hero.tagline': 'Crafting visual stories through editing, motion design<br>& AI — frame by frame.',
      'hero.status': 'AVAILABLE FOR NEW PROJECTS',
      'hero.showreel': '▶ WATCH MY WORK',
      'hero.hire': 'HIRE ME →',
      'trusted.label': 'TRUSTED BY CREATORS & BRANDS',
      'work.title': 'MY<br>WORK',
      'work.label': 'WORK',
      'work.hint': 'TAP A CATEGORY TO FILTER',
      'filter.all': 'ALL',
      'filter.more': 'SEE MORE →',
      'filter.empty': 'CONTENT BEING UPDATED — CHECK BACK SOON',
      'nav.contact': 'Contact',
      'contact.label': 'CONTACT',
      'contact.title': "LET'S WORK TOGETHER",
      'contact.sub': "Find me on these platforms — let's start something great.",
      'filter.reels': 'REELS',
      'filter.ads': 'ADS',
      'filter.vsl': 'VSL',
      'filter.podcast': 'PODCAST',
      'filter.motion': 'MOTION DESIGN',
      'filter.ai': 'AI ADS',
      'filter.youtube': 'YOUTUBE',
      'filter.eventcorp': 'EVENT & CORPORATE',
      'cat.reels': 'REELS',
      'cat.eventcorp': 'EVENT & CORPORATE',
      'type.event': 'EVENT FILM',
      'type.corp': 'CORPORATE PROMO',
      'cat.ads': 'ADS',
      'cat.vsl': 'VSL / VIDEO SALES LETTER',
      'cat.youtube': 'YOUTUBE / LONG-FORM',
      'cat.podcast': 'PODCAST',
      'cat.motion': 'MOTION DESIGN',
      'cat.ai': 'AI ADS',
      'clients.label': 'CLIENTS',
      'clients.title': "I'VE WORKED WITH",
      'clients.creators': 'CONTENT CREATORS',
      'clients.companies': 'COMPANIES',
      'clients.modalLabel': 'CLIENT',
      'back.work': 'BACK TO WORK',
      'switch.label': 'SWITCH SECTION',
      'views.label': 'VIEWS',
      'tool.pr': 'Where I cut every project, start to finish',
      'tool.ae': 'Where motion graphics come to life',
      'tool.davinci': 'Color grading and the final look of every video',
      'tool.ps': 'Thumbnails, retouching and visual polish',
      'tool.melius': 'AI-assisted production workflows',
      'tool.higgsfield': 'Cinematic AI camera moves',
      'tool.nano': 'AI image generation and editing',
      'tool.seedance': 'AI video generation for my ad concepts',
      'title.ads': 'ADS /<br>ADVERTISING',
      'title.ai': 'AI ADS /<br>INNOVATION',
      'title.vsl': 'VSL /<br>VIDEO SALES',
      'count.1': '1 PROJECT',
      'count.4': '4 PROJECTS',
      'count.5': '5 PROJECTS',
      'count.6': '6 PROJECTS',
      'count.8': '8 PROJECTS',
      'count.10': '10 PROJECTS',
      'count.20': '20 PROJECTS',
      'count.2': '2 PROJECTS',
      'count.3': '3 PROJECTS',
      'count.9': '9 PROJECTS',
      'count.16': '16 PROJECTS',
      'count.19': '19 PROJECTS',
      'proj.1': 'VIDEO 1',
      'proj.2': 'VIDEO 2',
      'proj.3': 'VIDEO 3',
      'proj.4': 'VIDEO 4',
      'proj.5': 'VIDEO 5',
      'proj.6': 'VIDEO 6',
      'proj.7': 'VIDEO 7',
      'proj.8': 'VIDEO 8',
      'proj.9': 'VIDEO 9',
      'proj.10': 'VIDEO 10',
      'proj.11': 'VIDEO 11',
      'proj.12': 'VIDEO 12',
      'proj.13': 'VIDEO 13',
      'proj.14': 'VIDEO 14',
      'proj.15': 'VIDEO 15',
      'proj.16': 'VIDEO 16',
      'clients.desc.eliteceos': 'Coaching platform that has generated $100M+ in revenue and helped its clients earn $1B+ — high-ticket offers, copywriting, ads, sales, funnels, and operations for coaches in the health, wealth, and relationship niches.',
      'clients.desc.v2visuals': 'San Diego-based video production company, featured on CNBC, with 7+ years crafting high-impact media: video production and editing, motion design, photography, ad creative, branding, and AI services for brands and events.',
      'clients.desc.phunware': 'Hospitality technology company behind the Guest Intelligence Platform — AI concierge, wayfinding, and location data deployed at renowned resorts like Atlantis Paradise Island and Wailea Beach Resort, where app adoption tops 70% during guest stays.',
      'clients.desc.thatisimpossible': 'YouTube channel with 1.72M subscribers and 200M+ total views where James LaFleur gives in-depth analyses of strange, mysterious, and sometimes unexplained viral videos.',
      'clients.desc.jaymez': 'YouTube reaction channel with 539K subscribers and 79M+ total views, covering the strangest things online for 10+ years — mysteries, strange places, creepy videos, and paranormal phenomena.',
      'clients.desc.adrop': 'White-label ad creative team for performance marketing agencies — AI-enhanced ads delivered in 24–72h, trusted by 50+ active agencies on a pay-per-ad model.',
      'about.label': 'ABOUT',
      'about.text': "I'm Aly Quintero — Video Editor, Motion Designer &amp; AI Filmmaker crafting visual content for brands, coaches, and creators worldwide.<br><br>I handle everything from Facebook Ads and YouTube long-form to TikTok Reels and AI-generated campaigns. My workflow covers the full pipeline: editing, color grading, audio mixing, motion graphics, and AI-assisted production.<br><br>If your project needs that level of precision, let's talk.",
      'about.cta': 'GET IN TOUCH',
      'about.ctaNote': 'NO FORMS. JUST EMAIL — I READ EVERY ONE.',
      'about.contact': 'Contact:',
      'copy.email': 'COPY',
      'copy.done': 'COPIED!',
      'cta.next': 'NEXT STEP',
      'cta.want': 'WANT SOMETHING LIKE THIS?',
      'cta.sub': 'ONE EMAIL. I REPLY WITHIN 24 HOURS WITH IDEAS, TIMELINE &amp; PRICE.',
      'cta.emailLabel': 'CONTACT EMAIL:',
    }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
    document.documentElement.lang = lang;
    try { localStorage.setItem('aq-lang', lang); } catch (e) {}

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update lang toggle visual
    const langES = document.getElementById('langES');
    const langEN = document.getElementById('langEN');
    if (langES && langEN) {
      langES.classList.toggle('lang-active', lang === 'es');
      langEN.classList.toggle('lang-active', lang === 'en');
    }

    // Update filter bar active text
    updateFilterActiveText();
  }

  // --- Language Toggle ---
  const langToggle = document.getElementById('langToggle');
  const langEN = document.getElementById('langEN');
  const langES = document.getElementById('langES');

  // Restore saved language (default: English)
  try {
    const saved = localStorage.getItem('aq-lang');
    if (saved === 'es' || saved === 'en') {
      currentLang = saved;
      setLanguage(saved);
    }
  } catch (e) {}

  if (langToggle && langEN && langES) {
    function updateLangLabels() {
      if (currentLang === 'en') {
        langEN.textContent = 'ENGLISH';
        langEN.className = 'lang-label lang-active-label';
        langES.textContent = 'ES';
        langES.className = 'lang-label lang-inactive-label';
      } else {
        langEN.textContent = 'EN';
        langEN.className = 'lang-label lang-inactive-label';
        langES.textContent = 'ESPAÑOL';
        langES.className = 'lang-label lang-active-label';
      }
    }
    updateLangLabels();

    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
      updateLangLabels();
    });

    // Hover: expand inactive side
    langToggle.addEventListener('mouseenter', () => {
      if (currentLang === 'en') {
        langES.textContent = 'ESPAÑOL';
      } else {
        langEN.textContent = 'ENGLISH';
      }
    });
    langToggle.addEventListener('mouseleave', () => {
      updateLangLabels();
    });
  }

  // ==========================================
  // SCROLL SPY — highlight active nav link
  // ==========================================
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = [];
  navLinks.forEach((link) => {
    const id = link.getAttribute('data-section');
    const section = document.getElementById(id);
    if (section) sections.push({ id, el: section, link });
  });

  if (sections.length > 0) {
    // Hero observer — remove all active when at top
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
          }
        });
      }, { threshold: 0, rootMargin: '-20% 0px -80% 0px' });
      heroObserver.observe(heroEl);
    }

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('data-section') === id);
          });
        }
      });
    }, {
      threshold: 0,
      rootMargin: '-50% 0px -50% 0px',
    });

    sections.forEach(({ el }) => spyObserver.observe(el));
  }

  // ==========================================
  // FILTER SYSTEM — ALL shows category cards, categories show featured videos
  // ==========================================
  const filterBar = document.getElementById('filterBar');
  const workGrid = document.getElementById('workGrid');
  const filterPanel = document.getElementById('filterPanel');

  // Estado del filtro en la vista ALL (null = vista ALL con tiles)
  let currentCategory = null;
  let expandedCategory = null;   // categoría cuya lista completa ya está desplegada
  const catCardsCache = {};      // categoría -> tarjetas .video-card de SU página (fuente única de verdad)

  const featuredWork = {
    reels: {
      href: 'reels.html',
      items: [
        { drive: '1up1usn3P9nrIxW7n_1J4TQJbmKsSE5Ub', poster: 'img/work/reels-1.jpg', ar: 'ar-9x16', t: 'VIDEO 1', tKey: 'proj.1', c: 'V2 VISUALS' },
        { drive: '1ffmq7tNKYc8elZs-m18pW4MRzQ6Nlnzq', poster: 'img/work/reels-2.jpg', ar: 'ar-9x16', t: 'VIDEO 2', tKey: 'proj.2', c: 'V2 VISUALS' },
        { drive: '1y3Nf9NS_OmBVj65FB2jQrd7HV1fmA_ba', poster: 'img/work/reels-3.jpg', ar: 'ar-9x16', t: 'VIDEO 3', tKey: 'proj.3', c: 'V2 VISUALS' },
        { drive: '1ra7eIMXq9HMQYcFVPGIpUjxEmEnOSzAY', poster: 'img/work/reels-4.jpg', ar: 'ar-9x16', t: 'VIDEO 4', tKey: 'proj.4', c: 'V2 VISUALS' },
        { drive: '1YrE0Dbm0QlgLxZd5Y99XS7mE72_CIMQE', poster: 'img/work/reels-5.jpg', ar: 'ar-9x16', t: 'VIDEO 5', tKey: 'proj.5', c: 'V2 VISUALS' }
      ]
    },
    ads: {
      href: 'ads.html',
      grid: 'cols5',
      items: [
        { drive: '1xtMmAxQDsTOyK2xegeUwDTuJKxuP1k9d', poster: 'img/work/ads-1.jpg', ar: 'ar-4x5', t: 'VIDEO 1', tKey: 'proj.1', c: 'KYLE HENRIS' },
        { drive: '1FRIiYrqBr5SxAM11talx5X003uQNhJPs', poster: 'img/work/ads-2.jpg', ar: 'ar-4x5', t: 'VIDEO 2', tKey: 'proj.2', c: 'ELITE CEOs' },
        { drive: '1cXA2ZAm8W6V2hp1YWvJoxa-fwD_hKJFu', poster: 'img/work/ads-3.jpg', ar: 'ar-4x5', t: 'VIDEO 3', tKey: 'proj.3', c: 'TANNER CHIDESTER' },
        { drive: '1dvqRrVEOpT9o82AZlTB1DK8h0lP6vT46', poster: 'img/work/ads-4.jpg', ar: 'ar-4x5', t: 'VIDEO 4', tKey: 'proj.4', c: 'THEODORE STERN' },
        { drive: '1yOo_e-wxUjPHTFgNr5SGlvL_Ml4pAi3j', poster: 'img/work/ads-5.jpg', ar: 'ar-4x5', t: 'VIDEO 5', tKey: 'proj.5', c: 'ORONDE JONES' }
      ]
    },
    ai: {
      href: 'ai.html',
      items: [
        { drive: '1vpjDgtRy8tSdftDAn-V89nsXiaNsmGD2', poster: 'img/work/ai-5.jpg', ar: 'ar-9x16', t: 'VIDEO 1', tKey: 'proj.1', c: 'ADDROP' },
        { drive: '1_WPbWZ4DSNh91X1mJyK9zjcDmh46i8Te', poster: 'img/work/ai-2.jpg', ar: 'ar-9x16', t: 'VIDEO 2', tKey: 'proj.2', c: 'ADDROP' },
        { drive: '1BZKcZv-tehrvDTqh6BzlsOs8yG-Id_iG', poster: 'img/work/ai-3.jpg', ar: 'ar-9x16', t: 'VIDEO 3', tKey: 'proj.3', c: 'ADDROP' },
        { drive: '1weQYakO_Qo0rmEbNt-GWp-iY3SujJXj7', poster: 'img/work/ai-7.jpg', ar: 'ar-9x16', t: 'VIDEO 4', tKey: 'proj.4', c: 'ADDROP' },
        { drive: '1hY1A3BWYl2zWyS51LxbJCny5iG4rdGCK', poster: 'img/work/ai-1.jpg', ar: 'ar-9x16', t: 'VIDEO 5', tKey: 'proj.5', c: 'ADDROP' }
      ]
    },
    eventcorp: {
      href: 'eventcorp.html',
      grid: 'wide',
      items: [
        { drive: '1rx8SK2V4S0Ng_nZynZpHZWn4P6YxqfCo', poster: 'img/work/ec-1.jpg', ar: 'ar-16x9', t: 'A BEAUTIFUL LIFE', c: 'CORPORATE PROMO', cKey: 'type.corp' },
        { drive: '1KGnHNExp_-w_Vw90CYTwdXQCx4saThbg', poster: 'img/work/ec-2.jpg', ar: 'ar-16x9', t: 'ACADIA', c: 'EVENT FILM', cKey: 'type.event' },
        { drive: '1kYbUNuI6Db5pXNOFBRm5ULfmOMOus8dv', poster: 'img/work/ec-3.jpg', ar: 'ar-16x9', t: 'APARTMENT LIST', c: 'EVENT FILM', cKey: 'type.event' },
        { drive: '1b77GXYCcqE6Ems2cCoEu3n2lZosOaBCC', poster: 'img/work/ec-4.jpg', ar: 'ar-16x9', t: 'BOLDER BARBERS', c: 'CORPORATE PROMO', cKey: 'type.corp' },
        { drive: '1sEi8PpzymCyhEYEUk-71bNdDOJRK99O4', poster: 'img/work/ec-5.jpg', ar: 'ar-16x9', t: 'CAPSTONE COLLEGE', c: 'CORPORATE PROMO', cKey: 'type.corp' }
      ]
    },
    youtube: {
      href: 'youtube.html',
      grid: 'wide',
      items: [
        { yt: 'HWT1wKEDcQw', thumb: 'https://i.ytimg.com/vi/HWT1wKEDcQw/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 4', tKey: 'proj.4', c: 'THAT IS IMPOSSIBLE', vw: '2.4M' },
        { yt: 'hHj-WOnoJ1Q', thumb: 'https://i.ytimg.com/vi/hHj-WOnoJ1Q/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 3', tKey: 'proj.3', c: 'THAT IS IMPOSSIBLE', vw: '1.8M' },
        { yt: 'M9U9jdHNYLQ', thumb: 'https://i.ytimg.com/vi/M9U9jdHNYLQ/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 5', tKey: 'proj.5', c: 'THAT IS IMPOSSIBLE', vw: '974K' },
        { yt: '3OiUStvL5z0', thumb: 'https://i.ytimg.com/vi/3OiUStvL5z0/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 8', tKey: 'proj.8', c: 'JAYMEZ', vw: '925K' },
        { yt: 'NlygkaZGm_I', thumb: 'https://i.ytimg.com/vi/NlygkaZGm_I/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 7', tKey: 'proj.7', c: 'JAYMEZ', vw: '601K' },
        { yt: 'tm78dj6pAuA', thumb: 'https://i.ytimg.com/vi/tm78dj6pAuA/hqdefault.jpg', ar: 'ar-16x9', t: 'VIDEO 9', tKey: 'proj.9', c: 'JAYMEZ', vw: '711K' }
      ]
    },
    motion: {
      href: 'motion.html',
      items: [
        { drive: '1kaXN52Y10Jsjp0EkMt2nUQkHwG5eF0H0', poster: 'img/work/motion-1.jpg', ar: 'ar-1x1', t: 'RESCUE CONCEPT' },
        { drive: '186GkxB8zVWSmKh33UEe-l149hE0GqbQy', poster: 'img/work/motion-2.jpg', ar: 'ar-1x1', t: 'SETUP CONCEPT · RAZER' },
        { drive: '10CfBOz1-N__QiNPm7u4jA364k28TWdba', poster: 'img/work/motion-3.jpg', ar: 'ar-1x1', t: 'DELIVERY CONCEPT · SNEAKERS' }
      ]
    },
    vsl: {
      href: 'vsl.html',
      items: [
        { drive: '1Hhm9s4Fz5AQOKpDtE1F1BHKIqw0Id8vM', poster: 'img/work/vsl-1.jpg', ar: 'ar-16x9', letterbox: true, t: 'AUDREY & MASON MAHONEY', c: 'VSL' },
        { drive: '1FiXTuj6KI2MBc_wBMjmVw03bX75rs3lQ', poster: 'img/work/vsl-2.jpg', ar: 'ar-16x9', letterbox: true, t: 'NATALIE SUSI', c: 'VSL 1' },
        { drive: '1RqSb5hyVUP6DfDBcWpLU1OEkaK2lHoS3', poster: 'img/work/vsl-3.jpg', ar: 'ar-16x9', letterbox: true, t: 'NATALIE SUSI', c: 'VSL 2' }
      ]
    },
    podcast: {
      href: 'podcast.html',
      items: [
        { drive: '1ivA97pwc80Q0fmR-J8K10FBvk-cZepLS', poster: 'img/work/podcast-1.jpg', ar: 'ar-16x9', t: 'PODCAST', tKey: 'cat.podcast', c: 'VIDEO 1', cKey: 'proj.1' }
      ]
    }
  };

  function renderFeaturedPanel(category) {
    if (!filterPanel) return;
    const cfg = featuredWork[category];
    if (!cfg) { filterPanel.hidden = true; return; }

    let html = '';
    if (cfg.items.length > 0) {
      const gridCls = cfg.grid
        ? ' featured-grid--' + cfg.grid
        : (cfg.items.length <= 2 ? ' featured-grid--center' : '');
      html += '<div class="featured-grid' + gridCls + '">';
      cfg.items.forEach((it, i) => {
        // Video de Drive o YouTube: póster + título; la ventana se abre solo al hacer click (sin autoplay en carga)
        const isDrive = !!it.drive;
        const isYt = !isDrive && !!it.yt;
        const mediaCls = isDrive
          ? 'card-media card-media--embed card-media--drive' + (it.letterbox ? ' card-media--letterbox' : '')
          : (isYt ? 'card-media card-media--embed yt-lite' : 'card-media card-media--empty');
        const mediaAttr = isDrive
          ? ' data-drive="' + it.drive + '"'
          : (isYt ? ' data-yt="' + it.yt + '"' : '');
        let mediaInner = '';
        if (isDrive) {
          mediaInner = '<img class="card-poster" src="' + it.poster + '" alt="" loading="lazy">';
        } else if (isYt) {
          mediaInner = '<img class="yt-poster" src="' + it.thumb + '" alt="" loading="lazy">'
            + '<span class="yt-playbtn" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg></span>';
        }
        // Título EXACTAMENTE igual que en las páginas de categoría:
        // card-category (+ card-client y card-views en YouTube) — mismas clases, misma i18n.
        const t = it.t || '';
        const c = it.c || '';
        const vw = it.vw || '';
        html += '<a class="work-card featured-card" href="' + cfg.href + '" style="animation-delay:' + (i * 0.07) + 's">'
          + '<div class="' + mediaCls + ' ' + it.ar + '"' + mediaAttr + '>'
          + mediaInner
          + '<span class="card-enter" aria-hidden="true">&#8599;</span>'
          + '</div>'
          + '<div class="featured-card-info"><div class="card-info-main">'
          + (t ? '<span class="card-category"' + (it.tKey ? ' data-i18n="' + it.tKey + '"' : '') + '>' + t + '</span>' : '')
          + (c ? '<span class="card-client"' + (it.cKey ? ' data-i18n="' + it.cKey + '"' : '') + '>' + c + '</span>' : '')
          + (vw ? '<span class="card-views">' + vw + ' <span data-i18n="views.label">VIEWS</span></span>' : '')
          + '</div></div>'
          + '</a>';
      });
      html += '</div>';
    } else {
      html += '<div class="featured-empty" data-i18n="filter.empty">CONTENT BEING UPDATED — CHECK BACK SOON</div>';
    }
    html += '<a class="btn btn-ghost glow-ring featured-more" href="' + cfg.href + '" data-i18n="filter.more">SEE MORE &rarr;</a>';

    filterPanel.innerHTML = html;
    filterPanel.hidden = false;
    currentCategory = category;
    expandedCategory = null;
    if (currentLang) setLanguage(currentLang);

    // Si la categoría no tiene videos fuera de los destacados, oculta SEE MORE
    fetchCategoryCards(category).then((cards) => {
      if (!cards.length || currentCategory !== category || expandedCategory) return;
      const more = filterPanel.querySelector('.featured-more');
      if (!more) return;
      const ids = new Set(cfg.items.map((it) => it.drive || it.yt).filter(Boolean));
      const hasRest = cards.some((card) => {
        const m = card.querySelector('[data-drive], [data-yt]');
        const id = m && (m.getAttribute('data-drive') || m.getAttribute('data-yt'));
        return !!id && !ids.has(id);
      });
      if (!hasRest) more.remove();
    });
  }

  // Lee las tarjetas reales de la página de categoría. Al agregar videos nuevos a
  // reels.html etc. aparecen aquí automáticamente (sin tocar el home).
  function fetchCategoryCards(category) {
    const cfg = featuredWork[category];
    if (!cfg) return Promise.resolve([]);
    if (catCardsCache[category]) return Promise.resolve(catCardsCache[category]);
    return fetch(cfg.href, { cache: 'force-cache' })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error('HTTP ' + r.status))))
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        catCardsCache[category] = Array.from(doc.querySelectorAll('.video-card'));
        return catCardsCache[category];
      })
      .catch(() => []);
  }

  function gridClassFor(category) {
    const cfg = featuredWork[category] || {};
    if (cfg.grid) return ' full-grid--' + cfg.grid;
    if ((cfg.items || []).length <= 1) return ' full-grid--center';
    return '';
  }

  // Click en un tile del ALL: TODOS los videos de la categoría, sin destacados ni SEE MORE
  function renderFullOnly(category) {
    if (!filterPanel) return;
    currentCategory = category;
    expandedCategory = category;
    filterPanel.innerHTML = '<div class="full-grid' + gridClassFor(category) + '"></div>';
    filterPanel.hidden = false;
    const gridEl = filterPanel.firstElementChild;
    fetchCategoryCards(category).then((cards) => {
      if (currentCategory !== category) return; // el usuario ya cambió de filtro
      if (!cards.length) {
        filterPanel.innerHTML = '<div class="featured-empty" data-i18n="filter.empty">CONTENT BEING UPDATED — CHECK BACK SOON</div>';
      } else {
        cards.forEach((card) => {
          const clone = card.cloneNode(true);
          gridEl.appendChild(clone);
          observeFade(clone);
        });
      }
      if (currentLang) setLanguage(currentLang);
    });
  }

  // SEE MORE (o la flecha ↗ de un destacado): despliega el resto de videos aquí mismo
  function expandCurrentCategory() {
    const category = currentCategory;
    if (!category || !filterPanel || expandedCategory === category) return;
    const cfg = featuredWork[category];
    const more = filterPanel.querySelector('.featured-more');
    if (!cfg) return;
    expandedCategory = category;
    fetchCategoryCards(category).then((cards) => {
      if (currentCategory !== category) return;
      if (!cards.length) { expandedCategory = null; return; } // fallo de red: conserva el botón
      const ids = new Set(cfg.items.map((it) => it.drive || it.yt).filter(Boolean));
      const rest = cards.filter((card) => {
        const m = card.querySelector('[data-drive], [data-yt]');
        const id = m && (m.getAttribute('data-drive') || m.getAttribute('data-yt'));
        return !id || !ids.has(id);
      });
      if (rest.length) {
        let gridEl = filterPanel.querySelector('.full-grid');
        if (!gridEl) {
          gridEl = document.createElement('div');
          gridEl.className = 'full-grid' + gridClassFor(category);
          if (more) { more.parentNode.insertBefore(gridEl, more); } else { filterPanel.appendChild(gridEl); }
        }
        rest.forEach((card) => {
          const clone = card.cloneNode(true);
          gridEl.appendChild(clone);
          observeFade(clone);
        });
      }
      if (more) more.remove();
      if (currentLang) setLanguage(currentLang);
    }).catch(() => { expandedCategory = null; });
  }

  if (filterBar && workGrid) {
    const filterBtns = filterBar.querySelectorAll('.filter-btn');
    const allCards = workGrid.querySelectorAll('.work-card');

    function setActivePill(category) {
      filterBtns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-filter') === category));
    }

    function showAllView() {
      currentCategory = null;
      expandedCategory = null;
      if (filterPanel) { filterPanel.hidden = true; filterPanel.innerHTML = ''; }
      workGrid.style.display = '';
      allCards.forEach((card) => card.classList.remove('hidden'));

      const visibleCards = workGrid.querySelectorAll('.work-card:not(.hidden)');
      visibleCards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 0.06}s`;
        card.classList.remove('visible');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.classList.add('visible');
          });
        });
      });
    }

    function showCategoryView(category, direct) {
      allCards.forEach((card) => card.classList.add('hidden'));
      workGrid.style.display = 'none';
      if (direct) {
        renderFullOnly(category);
      } else {
        renderFeaturedPanel(category);
      }
    }

    // direct=false → píldora: 5 destacados + SEE MORE · direct=true → tile: lista completa
    function activateFilter(category, direct) {
      if (category === 'all') { setActivePill('all'); showAllView(); return; }
      if (!featuredWork[category]) return;
      setActivePill(category);
      showCategoryView(category, direct);
    }

    // Píldoras de filtro
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        activateFilter(btn.getAttribute('data-filter'), false);
      });
    });

    // Tiles de la vista ALL: cambian a la categoría EN ESTA PÁGINA con todos sus videos
    workGrid.addEventListener('click', (e) => {
      const tile = e.target.closest('.work-card[data-category]');
      if (!tile) return;
      e.preventDefault(); // nunca navega a reels.html etc.
      activateFilter(tile.getAttribute('data-category'), true);
      if (filterBar) filterBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Panel de filtro: SEE MORE y ↗ expanden la lista en el sitio;
    // póster o título de una tarjeta = modal del video (sin salir de la página)
    if (filterPanel) {
      filterPanel.addEventListener('click', (e) => {
        const more = e.target.closest('.featured-more');
        if (more) { e.preventDefault(); expandCurrentCategory(); return; }

        const card = e.target.closest('.featured-card, .video-card');
        if (!card || !filterPanel.contains(card)) return;
        if (e.target.closest('.card-enter')) { e.preventDefault(); expandCurrentCategory(); return; }
        if (e.target.closest('[data-drive], [data-yt]')) return; // la delegación global ya abre el modal
        const media = card.querySelector('[data-drive], [data-yt]');
        if (media) {
          e.preventDefault();
          openVideoModal(
            media.hasAttribute('data-yt') ? 'yt' : 'drive',
            media.getAttribute('data-yt') || media.getAttribute('data-drive'),
            cardTitle(card),
            videoAR(media)
          );
        }
      });
    }
  }

  function updateFilterActiveText() {
    // Filter buttons use data-i18n and are updated by setLanguage directly.
    // Kept as a no-op hook for future dynamic labels (e.g. counts).
  }

  // ==========================================
  // CUSTOM CURSOR (arrow with direction)
  // ==========================================
  const cursorEl = document.getElementById('cursorArrow');
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let prevMouseX = 0, prevMouseY = 0;
  let angle = 0;
  const CURSOR_ROTATE = false; // ← true = restaurar la rotación del cursor por dirección del mouse
  let lastFrameTime = performance.now();

  if (cursorEl) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor(now) {
      // Frame-rate independent smoothing (normalized to 60fps)
      const dt = Math.min(now - lastFrameTime, 64); // clamp after tab switches
      lastFrameTime = now;
      const k = 1 - Math.pow(1 - 0.3, dt / 16.67);   // position ease (snappy, minimal lag for accurate clicks)
      const ka = CURSOR_ROTATE ? 1 - Math.pow(1 - 0.24, dt / 16.67) : 0; // rotation ease (0 = sin rotación)

      cursorX += (mouseX - cursorX) * k;
      cursorY += (mouseY - cursorY) * k;

      // Calculate direction angle from mouse movement
      const dx = mouseX - prevMouseX;
      const dy = mouseY - prevMouseY;
      if (Math.abs(dx) > 0.6 || Math.abs(dy) > 0.6) {
        const target = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        // Shortest-path angle interpolation (no 360° spin on direction flips)
        const diff = ((target - angle + 540) % 360) - 180;
        angle += diff * ka;
      }
      prevMouseX += (mouseX - prevMouseX) * 0.3;
      prevMouseY += (mouseY - prevMouseY) * 0.3;

      // GPU-composited transform instead of left/top (no layout per frame)
      // Container top-left = real pointer position; the svg is offset in CSS
      // so the arrow's TIP (not its center) lands exactly on the pointer.
      cursorEl.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0) rotate(${angle}deg)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Click ripple + pulse effect
    document.addEventListener('click', (e) => {
      // Ripple
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
      // Pulse on arrow
      document.body.classList.add('cursor-click');
      setTimeout(() => document.body.classList.remove('cursor-click'), 300);
    });

    // Hover effect (guarded against flicker when moving between child elements)
    const hoverSelector = 'a, button, .work-card, .copy-email-btn, .filter-btn, .lang-toggle, .yt-lite, .client-item, .tool';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelector)) {
        document.body.classList.add('cursor-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      const from = e.target.closest(hoverSelector);
      const to = e.relatedTarget && e.relatedTarget.closest
        ? e.relatedTarget.closest(hoverSelector)
        : null;
      if (from && !to) {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  // ==========================================
  // VIDEOS — nunca se reproducen solos.
  // Homepage cards: click to play/pause (bindCardClickPlay).
  // Category pages: native controls — play on click only.
  // ==========================================

  // ==========================================
  // VIDEOS EN VENTANA — se abren SOLO con click del usuario (nunca autoplay al cargar).
  // Clic en tarjeta con data-drive (Google Drive) o data-yt (YouTube) →
  // ventana con el video en su resolución/relación de aspecto nativa,
  // así evitamos ajustar los cuadros a cada resolución de video.
  // ==========================================
  let videoModal = null;
  let videoModalFrame = null;
  let videoModalCaption = null;
  let videoModalClose = null;
  let lastFocused = null;

  function buildVideoModal() {
    if (videoModal) return;
    videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.setAttribute('role', 'dialog');
    videoModal.setAttribute('aria-modal', 'true');
    videoModal.innerHTML =
      '<div class="video-modal-backdrop" data-lb-close></div>' +
      '<button type="button" class="video-modal-close" data-lb-close aria-label="Close video">&#10005;</button>' +
      '<div class="video-modal-stage">' +
        '<div class="video-modal-frame"></div>' +
        '<p class="video-modal-caption" hidden></p>' +
      '</div>';
    document.body.appendChild(videoModal);
    videoModalFrame = videoModal.querySelector('.video-modal-frame');
    videoModalCaption = videoModal.querySelector('.video-modal-caption');
    videoModalClose = videoModal.querySelector('.video-modal-close');

    // Clic en el fondo o en la X → cerrar
    videoModal.addEventListener('click', (e) => {
      if (e.target.closest('[data-lb-close]')) closeVideoModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('open')) closeVideoModal();
    });
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (videoModalFrame) videoModalFrame.innerHTML = ''; // corta el audio al instante
    if (lastFocused && lastFocused.focus) {
      try { lastFocused.focus(); } catch (e) {}
    }
  }

  // Relación de aspecto nativa del video (del póster; YouTube = 16:9)
  function videoAR(media) {
    if (media.hasAttribute('data-yt')) return 16 / 9;
    const img = media.querySelector('.card-poster');
    if (img && img.naturalWidth && img.naturalHeight) return img.naturalWidth / img.naturalHeight;
    const m = (media.className || '').match(/ar-(\d+)x(\d+)/);
    if (m) return parseInt(m[1], 10) / parseInt(m[2], 10);
    return 16 / 9;
  }

  function cardTitle(card) {
    if (!card) return '';
    const label = card.querySelector('.card-label');
    if (label) return label.textContent.trim();
    const ft = card.querySelector('.featured-card-title');
    if (ft) {
      const v = card.querySelector('.card-views');
      const t = ft.textContent.trim();
      const vt = v ? v.textContent.trim() : '';
      return vt ? (t + ' · ' + vt) : t;
    }
    const parts = [];
    ['.card-category', '.card-client', '.card-views'].forEach((sel) => {
      const el = card.querySelector(sel);
      if (el) {
        const t = el.textContent.trim();
        if (t) parts.push(t);
      }
    });
    return parts.join(' · ');
  }

  function openVideoModal(kind, id, title, ar) {
    if (!id) return;
    buildVideoModal();
    lastFocused = document.activeElement;

    const src = kind === 'drive'
      ? 'https://drive.google.com/file/d/' + id + '/preview'
      : 'https://www.youtube-nocookie.com/embed/' + id +
        '?autoplay=1&mute=0&controls=1&rel=0&playsinline=1';

    const frame = document.createElement('iframe');
    frame.src = src;
    frame.title = title || 'Video';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';

    videoModalFrame.style.setProperty('--ar', String(ar));
    videoModalFrame.innerHTML = '';
    videoModalFrame.appendChild(frame);
    videoModalCaption.textContent = title || '';
    videoModalCaption.hidden = !title;
    videoModal.classList.add('open');
    document.body.classList.add('modal-open');
    try { videoModalClose.focus(); } catch (e) {}
  }

  document.addEventListener('click', (e) => {
    // La flecha ↗ navega a la categoría: no interferir
    if (e.target.closest('.card-enter')) return;

    const yt = e.target.closest('[data-yt]');
    if (yt) {
      e.preventDefault();
      openVideoModal('yt', yt.getAttribute('data-yt'),
        cardTitle(yt.closest('.work-card, .video-card')), videoAR(yt));
      return;
    }

    const media = e.target.closest('[data-drive]');
    if (media) {
      e.preventDefault();
      openVideoModal('drive', media.getAttribute('data-drive'),
        cardTitle(media.closest('.work-card, .video-card')), videoAR(media));
    }
  });

  // ==========================================
  // NAV SCROLL EFFECT + PROGRESS BAR
  // ==========================================
  const nav = document.getElementById('nav');
  const scrollProgress = document.getElementById('scrollProgress');
  if (nav || scrollProgress) {
    window.addEventListener('scroll', () => {
      if (nav) {
        if (window.scrollY > 80) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
      if (scrollProgress) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        scrollProgress.style.width = pct + '%';
      }
    }, { passive: true });
  }

  // ==========================================
  // INTERSECTION OBSERVER — FADE UP
  // ==========================================
  const fadeEls = document.querySelectorAll('.fade-up');
  const fadeObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      })
    : null;
  if (fadeObserver) fadeEls.forEach((el) => fadeObserver.observe(el));

  // Tarjetas insertadas dinámicamente (lista completa tras SEE MORE o click en tile)
  function observeFade(el) {
    if (fadeObserver) { fadeObserver.observe(el); } else { el.classList.add('visible'); }
  }

  // ==========================================
  // VIDEOS — nunca se reproducen solos; solo al hacer click en la tarjeta
  // ==========================================
  function bindCardClickPlay(root) {
    const scope = root || document;
    scope.querySelectorAll('video[data-lazy]').forEach((v) => {
      const card = v.closest('.work-card');
      if (!card || card.dataset.videoBound) return;
      card.dataset.videoBound = '1';

      // Si el video sale de pantalla, se detiene (evita audio "fantasma")
      if ('IntersectionObserver' in window) {
        const cardIo = new IntersectionObserver((entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting && !v.paused) {
              v.pause();
              v.currentTime = 0;
              card.classList.remove('is-playing');
            }
          });
        }, { threshold: 0.25 });
        cardIo.observe(card);
      }

      card.addEventListener('click', (e) => {
        // La flecha ↗ navega a la categoría: no interferir
        if (e.target.closest('.card-enter')) return;

        if (v.paused) {
          // Pausa cualquier otro video del homepage
          scope.querySelectorAll('video[data-lazy]').forEach((other) => {
            if (other !== v && !other.paused) {
              other.pause();
              other.currentTime = 0;
              const oc = other.closest('.work-card');
              if (oc) oc.classList.remove('is-playing');
            }
          });
          v.muted = false; // click = gesto del usuario → puede haber sonido
          v.play()
            .then(() => { if (!v.paused) card.classList.add('is-playing'); })
            .catch(() => {
              v.muted = true; // fallback silencioso si el navegador lo exige
              v.play().then(() => { if (!v.paused) card.classList.add('is-playing'); }).catch(() => {});
            });
        } else {
          v.pause();
          v.currentTime = 0;
          card.classList.remove('is-playing');
        }
      });
    });
  }
  bindCardClickPlay();

  // Un click fuera de cualquier tarjeta detiene toda reproducción
  document.addEventListener('click', (e) => {
    if (e.target.closest('.work-card')) return;
    document.querySelectorAll('video[data-lazy]').forEach((o) => {
      if (!o.paused) {
        o.pause();
        o.currentTime = 0;
        const oc = o.closest('.work-card');
        if (oc) oc.classList.remove('is-playing');
      }
    });
  });

  // ==========================================
  // TILE LOOPS — highlights en loop por categoría (vista ALL, estilo Heli Sulbarán).
  // Nunca autoplay al cargar: el loop arranca SOLO cuando la tarjeta entra
  // cerca del viewport (rootMargin 200px) y se pausa al salir. Mudo siempre
  // (sonido = solo videos de contenido vía click). No usan data-lazy para
  // no entrar en bindCardClickPlay.
  // ==========================================
  function bindTileLoops() {
    const loops = document.querySelectorAll('video[data-loop]');
    if (!loops.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const v = en.target;
        const card = v.closest('.work-card');
        if (en.isIntersecting) {
          if (!v.dataset.loopLoaded) {
            v.dataset.loopLoaded = '1';
            try { v.load(); } catch (err) { /* noop */ }
          }
          v.play().then(() => {
            v.classList.add('is-ready');
            if (!v.paused && card) card.classList.add('is-playing');
          }).catch(() => {
            // Autoplay bloqueado u mp4 ausente: queda la imagen estática
          });
        } else if (!v.paused) {
          v.pause();
          if (card) card.classList.remove('is-playing');
        }
      });
    }, { rootMargin: '200px' });

    loops.forEach((v) => io.observe(v));
  }
  bindTileLoops();

  // ==========================================
  // TRUSTED-BY MARQUEE — seamless loop
  // Duplicate groups until the track is at least 2x the wrap width,
  // so the -50% loop never runs out of content (no empty gaps).
  // ==========================================
  const mqWrap = document.querySelector('.marquee-wrap');
  if (mqWrap) {
    const mqTrack = mqWrap.querySelector('.marquee-track');
    const mqBase = mqTrack && mqTrack.querySelector('.marquee-group');
    const fitMarquee = () => {
      if (!mqTrack || !mqBase) return;
      // Reset: keep only the original group
      Array.from(mqTrack.querySelectorAll('.marquee-group')).slice(1).forEach((g) => g.remove());
      const groupW = mqBase.offsetWidth;
      const wrapW = mqWrap.clientWidth;
      if (!groupW || !wrapW) return;
      let copies = Math.max(2, Math.ceil((wrapW * 2) / groupW));
      if (copies % 2) copies += 1; // the -50% translate needs an even copy count
      for (let i = 1; i < copies; i++) {
        const clone = mqBase.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        mqTrack.appendChild(clone);
      }
    };
    fitMarquee();
    window.addEventListener('load', fitMarquee);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitMarquee).catch(() => {});
    let mqResizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(mqResizeTimer);
      mqResizeTimer = setTimeout(fitMarquee, 150);
    });
  }

  // ==========================================
  // COPY EMAIL
  // ==========================================
  document.querySelectorAll('[data-copy-email]').forEach((copyBtn) => {
    copyBtn.addEventListener('click', () => {
      const row = copyBtn.parentElement;
      const emailLink = row ? row.querySelector('a[href^="mailto:"]') : null;
      if (emailLink && navigator.clipboard) {
        navigator.clipboard.writeText(emailLink.textContent.trim()).then(() => {
          const span = copyBtn.querySelector('span');
          span.textContent = translations[currentLang]['copy.done'];
          setTimeout(() => { span.textContent = translations[currentLang]['copy.email']; }, 2000);
        }).catch(() => {});
      }
    });
  });

  // ==========================================
  // CLIENT MODAL
  // ==========================================
  const clientModal = document.getElementById('clientModal');
  const clientModalTitle = document.getElementById('clientModalTitle');
  const clientModalText = document.getElementById('clientModalText');
  const clientModalLinks = document.getElementById('clientModalLinks');
  const clientModalLogo = document.getElementById('clientModalLogo');
  let activeClientKey = null;

  // Logo/avatar per client (falls back to hidden if missing)
  const clientImages = {
    eliteceos: 'img/clients/eliteceos.png',
    v2visuals: 'img/clients/v2visuals.png',
    phunware: 'img/clients/phunware.png',
    adrop: 'img/clients/adrop.png',
    thatisimpossible: 'img/clients/thatisimpossible.jpg',
    jaymez: 'img/clients/jaymez.jpg',
  };

  // Clients whose logos are black → invert so they're visible on the dark modal
  const clientInvert = ['phunware', 'v2visuals'];

  // Social media links per client
  const clientLinks = {
    eliteceos: [
      { label: 'Website', url: 'https://go.eliteceos.com/' },
      { label: 'Facebook', url: 'https://www.facebook.com/elite.ceos1' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/elite-ceos' },
    ],
    v2visuals: [
      { label: 'Website', url: 'https://v2visuals.com/' },
      { label: 'Instagram', url: 'https://www.instagram.com/v2visuals_/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/v2-visuals' },
    ],
    phunware: [
      { label: 'Website', url: 'https://www.phunware.com/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/phunware' },
      { label: 'Facebook', url: 'https://www.facebook.com/phunware/' },
    ],
    adrop: [
      { label: 'Website', url: 'https://addrop.framer.website/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/ad-drop/about/' },
    ],
    thatisimpossible: [
      { label: 'YouTube', url: 'https://www.youtube.com/@thatisimpossible' },
    ],
    jaymez: [
      { label: 'YouTube', url: 'https://www.youtube.com/@Jaymez' },
    ],
  };

  function renderClientModal() {
    if (!activeClientKey || !clientModalText) return;
    const dict = translations[currentLang];
    const key = 'clients.desc.' + activeClientKey;
    if (dict[key]) clientModalText.textContent = dict[key];

    if (clientModalLogo) {
      const src = clientImages[activeClientKey];
      if (src) {
        clientModalLogo.src = src;
        clientModalLogo.alt = (clientModalTitle ? clientModalTitle.textContent : '') + ' logo';
        clientModalLogo.hidden = false;
        clientModalLogo.classList.toggle('client-modal-logo--invert', clientInvert.includes(activeClientKey));
      } else {
        clientModalLogo.hidden = true;
      }
    }

    if (clientModalLinks) {
      const links = clientLinks[activeClientKey] || [];
      clientModalLinks.innerHTML = links
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`)
        .join('');
    }
  }

  function openClientModal(key, title) {
    if (!clientModal) return;
    activeClientKey = key;
    if (clientModalTitle) clientModalTitle.textContent = title;
    renderClientModal();
    clientModal.classList.add('open');
    clientModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeClientModal() {
    if (!clientModal) return;
    activeClientKey = null;
    clientModal.classList.remove('open');
    clientModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.client-item[data-client]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openClientModal(btn.getAttribute('data-client'), btn.textContent.trim());
    });
  });

  if (clientModal) {
    clientModal.querySelectorAll('[data-close-modal]').forEach((el) => {
      el.addEventListener('click', closeClientModal);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && clientModal.classList.contains('open')) {
        closeClientModal();
      }
    });
  }

  // Re-render open modal when language changes
  const origSetLanguage = setLanguage;
  setLanguage = function (lang) {
    origSetLanguage(lang);
    renderClientModal();
  };

  // ==========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ==========================================
  // STAGGER FADE-UP ON WORK CARDS
  // ==========================================
  const workCards = document.querySelectorAll('.work-card.fade-up');
  workCards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

})();
