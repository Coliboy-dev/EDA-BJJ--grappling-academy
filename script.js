/* ============================================================
   EDA ACADEMY v2 — script.js
   ============================================================ */
(function () {
  'use strict';

  /* 1. BURGER MENU */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link');

  function closeMobileMenu() {
    burger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.removeEventListener('keydown', trapMobileMenuFocus);
    burger.focus();
  }

  function trapMobileMenuFocus(e) {
    if (e.key !== 'Tab') return;
    const links = Array.from(mobileMenu.querySelectorAll('.mobile-menu__link'));
    const first = links[0];
    const last  = links[links.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); burger.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); burger.focus();
    }
  }

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('is-open');
      burger.classList.toggle('is-open', !isOpen);
      mobileMenu.classList.toggle('is-open', !isOpen);
      burger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      if (!isOpen) {
        const firstLink = mobileMenu.querySelector('.mobile-menu__link');
        if (firstLink) firstLink.focus();
        mobileMenu.addEventListener('keydown', trapMobileMenuFocus);
      } else {
        mobileMenu.removeEventListener('keydown', trapMobileMenuFocus);
      }
    });
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('is-open') && !burger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  /* 2. HEADER SCROLL */
  const header = document.getElementById('header');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* 3. NAV ACTIVE */
  const navLinks = document.querySelectorAll('.nav__link:not(.nav__link--cta)');
  const sections = document.querySelectorAll('section[id]');
  const navMap = {};
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) navMap[href.slice(1)] = link;
  });
  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        const id = entry.target.getAttribute('id');
        if (navMap[id]) navMap[id].classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' }).observe && sections.forEach(function (s) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove('active'); });
          const id = entry.target.getAttribute('id');
          if (navMap[id]) navMap[id].classList.add('active');
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' }).observe(s);
  });

  /* 4. FAQ ACCORDÉON */
  document.querySelectorAll('.faq__item').forEach(function (item) {
    const q = item.querySelector('.faq__question');
    const a = item.querySelector('.faq__answer');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      const expanded = q.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq__item').forEach(function (other) {
        const oq = other.querySelector('.faq__question');
        const oa = other.querySelector('.faq__answer');
        if (oq && oa && other !== item) {
          oq.setAttribute('aria-expanded', 'false');
          oa.setAttribute('hidden', '');
        }
      });
      if (expanded) { q.setAttribute('aria-expanded', 'false'); a.setAttribute('hidden', ''); }
      else { q.setAttribute('aria-expanded', 'true'); a.removeAttribute('hidden'); }
    });
  });

  /* 5. REVEAL AU SCROLL */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -70px 0px', threshold: 0.08 });
    reveals.forEach(function (el) {
      const siblings = Array.from(el.parentElement.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(el);
      if (idx > 0) el.style.transitionDelay = (idx * 0.1) + 's';
      obs.observe(el);
    });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* 6. SCROLL SMOOTH */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const h = header ? header.offsetHeight : 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - h, behavior: 'smooth' });
    });
  });

  /* 7. PARALLAXE HERO (desktop uniquement) */
  if (window.innerWidth > 860) {
    const heroContent = document.querySelector('.hero__content');
    const heroWatermark = document.querySelector('.hero__watermark');
    window.addEventListener('scroll', function () {
      const y = window.scrollY;
      if (heroContent) heroContent.style.transform = 'translateY(' + (y * 0.05) + 'px)';
      if (heroWatermark) heroWatermark.style.transform = 'translateY(calc(-50% + ' + (y * 0.08) + 'px))';
    }, { passive: true });
  }

})();

/* ============================================================
   LIGHTBOX GALERIE
============================================================ */
(function() {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Galerie photos EDA BJJ/Grappling Academy');
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML = `
    <button class="lightbox__close" aria-label="Fermer la galerie">ESC &nbsp;✕</button>
    <button class="lightbox__nav lightbox__prev" aria-label="Photo précédente">&#8592;</button>
    <img class="lightbox__img" src="" alt="" />
    <button class="lightbox__nav lightbox__next" aria-label="Photo suivante">&#8594;</button>
    <div class="lightbox__caption" aria-live="polite"></div>
  `;
  document.body.appendChild(lb);

  const lbImg     = lb.querySelector('.lightbox__img');
  const lbCaption = lb.querySelector('.lightbox__caption');
  const lbClose   = lb.querySelector('.lightbox__close');
  const lbPrev    = lb.querySelector('.lightbox__prev');
  const lbNext    = lb.querySelector('.lightbox__next');

  let items = [];
  let current = 0;
  let triggerEl = null;

  function openLightbox(index, trigger) {
    current = index;
    triggerEl = trigger || null;
    const item = items[current];
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.caption;
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
    if (triggerEl) { triggerEl.focus(); triggerEl = null; }
  }

  function showNext() { current = (current + 1) % items.length; openLightbox(current, triggerEl); }
  function showPrev() { current = (current - 1 + items.length) % items.length; openLightbox(current, triggerEl); }

  /* Piège de focus dans le lightbox */
  lb.addEventListener('keydown', function(e) {
    if (e.key !== 'Tab') return;
    const focusable = Array.from(lb.querySelectorAll('button'));
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  /* Collecter les items de la galerie */
  document.querySelectorAll('.gallery__item').forEach(function(item, index) {
    const img     = item.querySelector('img');
    const caption = item.querySelector('.gallery__item-overlay span');
    if (!img) return;

    items.push({
      src:     img.src,
      alt:     img.alt,
      caption: caption ? caption.textContent : ''
    });

    item.addEventListener('click', function() { openLightbox(index, item); });
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index, item);
      }
    });
    item.style.cursor = 'pointer';
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', showPrev);
  lbNext.addEventListener('click', showNext);

  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (!lb.classList.contains('is-open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft')  showPrev();
  });
})();

/* ============================================================
   BACK TO TOP + SCROLL PROGRESS
============================================================ */
(function() {
  const btn = document.getElementById('back-to-top');
  const progress = document.getElementById('scroll-progress');

  function onScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progress) progress.style.width = percent + '%';
    if (btn) btn.classList.toggle('is-visible', scrollTop > 600);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (btn) {
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Footer year auto
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
