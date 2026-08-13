(() => {
  const quiz = document.querySelector('[data-lead-quiz]');
  const scrollTargets = document.querySelectorAll('[data-scroll-target]');

  scrollTargets.forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      const target = document.querySelector(trigger.getAttribute('data-scroll-target'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => target.querySelector('input')?.focus({ preventScroll: true }), 500);
    });
  });

  if (quiz) {
    const steps = Array.from(quiz.querySelectorAll('[data-quiz-step]'));
    const nextButton = quiz.querySelector('[data-quiz-next]');
    const backButton = quiz.querySelector('[data-quiz-back]');
    const actions = quiz.querySelector('.mls-quiz__actions');
    const result = quiz.querySelector('[data-quiz-result]');
    const whatsappButton = quiz.querySelector('[data-quiz-whatsapp]');
    const progress = quiz.querySelector('[data-quiz-progress]');
    const progressBar = quiz.querySelector('[data-quiz-progress-bar]');
    const resultTitle = quiz.querySelector('[data-quiz-result-title]');
    const resultCopy = quiz.querySelector('[data-quiz-result-copy]');
    const customAnswer = quiz.querySelector('[data-quiz-custom-answer]');
    const customAnswerInput = quiz.elements['product-other'];
    let currentStep = 0;
    let started = false;

    const track = (eventName, params = {}) => {
      window.dataLayer?.push({ event: eventName, ...params });
      window.gtag?.('event', eventName, params);
    };

    const selectedValue = (step) => step.querySelector('input:checked')?.value;

    const hasCurrentAnswer = () => {
      const value = selectedValue(steps[currentStep]);
      if (currentStep === 0 && value === 'Другое') return Boolean(customAnswerInput.value.trim());
      return Boolean(value);
    };

    const arrowMarkup = '<svg class="mls-arrow mls-arrow--down" viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 2v12M4 10l4 4 4-4" /></svg>';

    const renderStep = () => {
      steps.forEach((step, index) => {
        const active = index === currentStep;
        step.hidden = !active;
        step.setAttribute('aria-hidden', String(!active));
      });

      const finalStep = currentStep === steps.length - 1;
      progress.textContent = `Шаг ${currentStep + 1} из ${steps.length}`;
      progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
      nextButton.disabled = !hasCurrentAnswer();
      nextButton.innerHTML = `${finalStep ? 'Показать условия' : 'Продолжить'} ${arrowMarkup}`;
      backButton.hidden = currentStep === 0;
      customAnswer.hidden = selectedValue(steps[0]) !== 'Другое';
    };

    const revealResult = () => {
      const leadOwner = quiz.elements['lead-owner'].value;
      const needsOwner = leadOwner === 'Пока некому отвечать';
      const answers = [
        ['Что привлекаем', quiz.elements.product.value === 'Другое' ? customAnswerInput.value.trim() : quiz.elements.product.value],
        ['Ценность нового клиента', quiz.elements['client-value'].value],
        ['Текущий источник заявок', quiz.elements['lead-source'].value],
        ['Кто отвечает', leadOwner],
      ];

      steps.forEach((step) => { step.hidden = true; });
      actions.hidden = true;
      progress.parentElement.hidden = true;
      result.hidden = false;
      whatsappButton.hidden = false;
      whatsappButton.setAttribute('aria-disabled', 'false');

      if (needsOwner) {
        resultTitle.textContent = 'Сначала назначьте ответственного за обращения.';
        resultCopy.textContent = 'Связку можно подготовить, но без быстрого ответа на заявки реклама будет терять часть обращений. Обсудим, как выстроить этот этап до запуска.';
      }

      const message = [
        'Здравствуйте! Хочу обсудить Meta Lead System.',
        '',
        ...answers.map(([label, value]) => `${label}: ${value}`),
        '',
        'Понимаю условия: 149 990 ₸ в месяц, рекламный бюджет оплачивается отдельно.',
        'Хочу обсудить запуск.',
      ].join('\n');

      whatsappButton.href = `https://wa.me/77089508019?text=${encodeURIComponent(message)}`;
      result.focus({ preventScroll: true });
      track('mls_quiz_price_viewed', { lead_owner_ready: !needsOwner });
    };

    quiz.addEventListener('focusin', () => {
      if (started) return;
      started = true;
      track('mls_quiz_started');
    });

    quiz.querySelectorAll('input[type="radio"]').forEach((input) => {
      input.addEventListener('change', renderStep);
    });

    customAnswerInput.addEventListener('input', renderStep);

    nextButton.addEventListener('click', () => {
      if (!hasCurrentAnswer()) return;
      track('mls_quiz_step_completed', { step: currentStep + 1 });
      if (currentStep === steps.length - 1) {
        revealResult();
        return;
      }
      currentStep += 1;
      renderStep();
    });

    backButton.addEventListener('click', () => {
      if (currentStep === 0) return;
      currentStep -= 1;
      renderStep();
    });

    whatsappButton.addEventListener('click', (event) => {
      if (whatsappButton.classList.contains('is-opening')) return;
      event.preventDefault();
      track('mls_quiz_whatsapp_clicked');
      whatsappButton.classList.add('is-opening');
      window.setTimeout(() => {
        window.location.assign(whatsappButton.href);
      }, 220);
    });

    renderStep();
  }

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
    .fromTo('.mls-hero__actions, .mls-hero__tools', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, stagger: .1 }, '<.16');

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
