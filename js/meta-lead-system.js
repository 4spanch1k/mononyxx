(() => {
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

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = form.querySelector('[data-form-status]');
    const name = form.elements.name.value.trim();
    const contact = form.elements.contact.value.trim();
    const business = form.elements.business.value.trim();
    const privacyConsent = form.elements['privacy-consent'].checked;
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultSubmitMarkup = submitButton?.innerHTML;

    if (!name) {
      status.textContent = 'Укажите имя, чтобы мы знали, как к вам обратиться.';
      form.elements.name.focus();
      return;
    }

    if (!contact) {
      status.textContent = 'Укажите телефон или WhatsApp для связи.';
      form.elements.contact.focus();
      return;
    }

    if (!business) {
      status.textContent = 'Коротко расскажите, чем занимается ваш бизнес.';
      form.elements.business.focus();
      return;
    }

    if (!privacyConsent) {
      status.textContent = 'Подтвердите согласие на обработку данных, чтобы отправить заявку.';
      form.elements['privacy-consent'].focus();
      return;
    }

    if (!/^\+?[0-9\s()-]{7,20}$/.test(contact)) {
      status.textContent = 'Укажите корректный номер телефона или WhatsApp.';
      form.elements.contact.focus();
      return;
    }

    const payload = {
      language: 'ru',
      name,
      contactMethod: 'whatsapp',
      contactMethodLabel: 'Телефон / WhatsApp',
      contactValue: contact,
      projectType: 'Meta Lead System',
      budget: '149 000 ₸ / месяц + рекламный бюджет',
      description: business,
      privacyConsent,
    };

    submitButton.disabled = true;
    submitButton.textContent = 'Отправляем…';
    status.textContent = 'Отправляем заявку в Telegram…';

    try {
      const result = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!result.ok) throw new Error('Failed to send lead');

      form.reset();
      status.textContent = 'Заявка отправлена. Скоро свяжемся с вами.';
    } catch {
      status.textContent = 'Не удалось отправить заявку. Попробуйте ещё раз.';
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = defaultSubmitMarkup;
    }
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
