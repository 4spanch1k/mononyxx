(() => {
  const phoneNumber = '77089508019';
  const form = document.querySelector('[data-lead-form]');
  const scrollTargets = document.querySelectorAll('[data-scroll-target]');

  scrollTargets.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const target = document.querySelector(trigger.getAttribute('data-scroll-target'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => target.querySelector('input, textarea')?.focus({ preventScroll: true }), 500);
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    const name = form.elements.name.value.trim();
    const contact = form.elements.contact.value.trim();
    const business = form.elements.business.value.trim();

    if (!name || !contact || !business) {
      status.textContent = 'Заполните имя, контакт и кратко расскажите о бизнесе.';
      form.querySelector(':invalid')?.focus();
      return;
    }

    const message = [
      'Здравствуйте! Хочу получить план запуска Meta Lead System.',
      `Имя: ${name}`,
      `Телефон / WhatsApp: ${contact}`,
      `Бизнес: ${business}`,
    ].join('\n');
    status.textContent = 'Открываем WhatsApp с вашим сообщением…';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });

  if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  window.gsap.registerPlugin(window.ScrollTrigger);
  document.documentElement.classList.add('gsap-enabled');
  const mm = window.gsap.matchMedia();

  const heroTimeline = window.gsap.timeline({
    defaults: { duration: .72, ease: 'power3.out' },
  });
  heroTimeline
    .fromTo('.mls-hero .mls-label', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0 })
    .fromTo('.mls-hero h1', { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0 }, '<.08')
    .fromTo('.mls-hero__lead', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, '<.18')
    .fromTo('.mls-hero__actions, .mls-hero__price, .mls-hero__tools', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, stagger: .1 }, '<.16');

  window.gsap.utils.toArray('.mls-animate').forEach((element) => {
    window.gsap.fromTo(element, { autoAlpha: 0, y: 26 }, {
      autoAlpha: 1,
      y: 0,
      duration: .72,
      ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 86%', toggleActions: 'play none none reverse' },
    });
  });

  mm.add('(min-width: 821px)', () => {
    const rows = window.gsap.utils.toArray('.mls-flow__row');
    window.gsap.fromTo(rows, { autoAlpha: .28, x: -18 }, {
      autoAlpha: 1,
      x: 0,
      stagger: .12,
      duration: .58,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.mls-flow__rows', start: 'top 72%', toggleActions: 'play none none reverse' },
    });
  });

  window.addEventListener('load', () => window.ScrollTrigger.refresh(), { once: true });
})();
