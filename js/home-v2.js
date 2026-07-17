(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const intro = document.getElementById('site-intro');
  if (intro && document.documentElement.classList.contains('intro-enabled')) {
    const finishIntro = () => {
      if (intro.classList.contains('is-leaving')) return;
      intro.classList.add('is-leaving');
      try {
        sessionStorage.setItem('mononyxx-intro-seen', '1');
      } catch (_) {
        // The intro can still close when storage is unavailable.
      }

      window.setTimeout(() => {
        document.documentElement.classList.remove('intro-enabled');
        intro.hidden = true;
      }, reduceMotion.matches ? 0 : 720);
    };

    if (reduceMotion.matches) {
      finishIntro();
    } else {
      window.setTimeout(finishIntro, 1550);
      intro.addEventListener('click', finishIntro, { once: true });
    }
  }

  const menu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('mobile-menu-button');
  if (menu && menuButton) {
    const syncMenuState = () => {
      const isOpen = menu.classList.contains('menu-open');
      const isEnglish = document.documentElement.lang === 'en';
      document.body.classList.toggle('menu-lock', isOpen);
      const label = document.getElementById('mobile-menu-icon');
      if (label) label.textContent = isOpen
        ? (isEnglish ? 'Close' : 'Закрыть')
        : (isEnglish ? 'Menu' : 'Меню');
    };

    new MutationObserver(syncMenuState).observe(menu, {
      attributes: true,
      attributeFilter: ['class']
    });
    syncMenuState();
  }

  document.querySelectorAll('[data-line-nav]').forEach((nav) => {
    const items = Array.from(nav.querySelectorAll('.line-nav__item'));
    const radius = 118;

    const setEffect = (item, value) => {
      item.style.setProperty('--effect', String(Math.max(0, Math.min(1, value))));
    };

    nav.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const proximity = Math.max(0, 1 - Math.abs(event.clientY - center) / radius);
        const eased = proximity * proximity * (3 - 2 * proximity);
        setEffect(item, eased);
      });
    });

    nav.addEventListener('pointerleave', () => {
      items.forEach((item) => setEffect(item, 0));
    });

    items.forEach((item) => {
      item.addEventListener('focus', () => setEffect(item, 1));
      item.addEventListener('blur', () => setEffect(item, 0));
      item.addEventListener('touchstart', () => {
        items.forEach((other) => setEffect(other, other === item ? 1 : 0));
      }, { passive: true });
    });
  });

  const reviews = document.getElementById('reviews');
  if (reviews && !reduceMotion.matches) {
    if ('IntersectionObserver' in window) {
      const reviewsObserver = new IntersectionObserver(([entry]) => {
        reviews.classList.toggle('reviews-motion-active', entry.isIntersecting);
      }, { rootMargin: '160px 0px', threshold: 0 });

      reviewsObserver.observe(reviews);
    } else {
      reviews.classList.add('reviews-motion-active');
    }
  }

  const hero = document.querySelector('.studio-hero');
  const floatingWhatsapp = document.getElementById('floating-wa-btn');
  if (hero && floatingWhatsapp && 'IntersectionObserver' in window) {
    const floatingWhatsappObserver = new IntersectionObserver(([entry]) => {
      floatingWhatsapp.classList.toggle('floating-wa-visible', !entry.isIntersecting);
    }, { threshold: 0.05 });

    floatingWhatsappObserver.observe(hero);
  } else if (floatingWhatsapp) {
    floatingWhatsapp.classList.add('floating-wa-visible');
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  if (!revealItems.length || reduceMotion.matches || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    revealItems.forEach((item) => observer.observe(item));
  }
})();
