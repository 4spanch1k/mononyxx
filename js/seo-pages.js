(() => {
  const languageStorageKey = 'mononyxx-language';
  const languageChoiceStorageKey = 'mononyxx-language-choice';
  const defaultLanguage = 'ru';
  const page = document.body.dataset.page;

  const commonEntries = [
    ['Основная навигация', 'Main navigation'],
    ['Навигация по сайту', 'Site navigation'],
    ['Выбор языка', 'Language selection'],
    ['Mononyxx — на главную', 'Mononyxx — home'],
    ['Открыть меню', 'Open menu'],
    ['Закрыть меню', 'Close menu'],
    ['Меню', 'Menu'],
    ['Закрыть', 'Close'],
    ['Услуги', 'Services'],
    ['Кейсы', 'Cases'],
    ['Цены', 'Pricing'],
    ['Поддержка', 'Support'],
    ['Контакты', 'Contacts'],
    ['Обсудить проект', 'Discuss a project'],
    ['Обсудить поддержку', 'Discuss support'],
    ['На главную', 'Home'],
    ['Формула стоимости', 'Pricing formula'],
    ['Конфиденциальность', 'Privacy'],
    ['Условия использования', 'Terms of Use'],
    ['Документы и навигация', 'Documents and navigation'],
  ];

  const pricingEntries = [
    ['01 / Стоимость разработки', '01 / Development pricing'],
    ['Цена начинается с понятного объёма.', 'The price starts with a clear scope.'],
    ['Ниже — стартовые ориентиры и состав базовой работы. После короткого разговора фиксируем задачу, этапы, срок и итоговую стоимость до начала разработки.', 'Below are starting ranges and the baseline scope. After a short conversation, we confirm the task, stages, timeline and final price before development begins.'],
    ['02 / Форматы', '02 / Formats'],
    ['Что можно запустить', 'What we can launch'],
    ['Стартовая цена помогает понять порядок бюджета. Итог зависит от структуры, дизайна, функций, интеграций и готовности материалов.', 'Starting prices show the budget range. The final amount depends on structure, design, features, integrations and content readiness.'],
    ['Лендинг', 'Landing page'],
    ['Одностраничный сайт для рекламы услуги, продукта или нового направления. Собираем логику страницы вокруг одного целевого действия.', 'A one-page website for a service, product or new direction. The page is structured around one primary action.'],
    ['Структура', 'Structure'],
    ['Адаптив', 'Responsive layout'],
    ['Форма', 'Lead form'],
    ['Базовое SEO', 'Basic SEO'],
    ['от 49 900 ₸', 'from 49,900 ₸'],
    ['Обсудить задачу', 'Discuss the task'],
    ['Сайт для бизнеса', 'Business website'],
    ['Многостраничный сайт с услугами, кейсами, ценами, контактами и формами. Количество разделов определяем после разговора о задаче.', 'A multi-page website with services, cases, pricing, contacts and forms. We define the number of sections after discussing the task.'],
    ['Архитектура', 'Architecture'],
    ['Дизайн-система', 'Design system'],
    ['Разработка', 'Development'],
    ['Формы', 'Forms'],
    ['SEO-база', 'SEO foundation'],
    ['от 99 000 ₸', 'from 99,000 ₸'],
    ['Автоматизация и AI', 'Automation and AI'],
    ['Заявки, уведомления, CRM-логика, боты, таблицы и интеграции. Сначала разбираем текущий процесс и результат, который нужно получить.', 'Leads, notifications, CRM logic, bots, spreadsheets and integrations. We first review the current process and the result it should produce.'],
    ['Карта процесса', 'Process map'],
    ['Интеграции', 'Integrations'],
    ['Логика', 'Logic'],
    ['Тестирование', 'Testing'],
    ['от 79 900 ₸', 'from 79,900 ₸'],
    ['Приложение / MVP', 'App / MVP'],
    ['Ключевые пользовательские сценарии, UI/UX, frontend, backend и подготовка к публикации. Объём зависит от ролей, функций и платформ.', 'Core user journeys, UI/UX, frontend, backend and release preparation. Scope depends on roles, features and platforms.'],
    ['Сценарии', 'User journeys'],
    ['Прототип', 'Prototype'],
    ['Backend-план', 'Backend plan'],
    ['После разговора', 'After a conversation'],
    ['Обсудить продукт', 'Discuss the product'],
    ['03 / Формула оценки', '03 / Estimate formula'],
    ['Из чего складывается цена', 'What shapes the price'],
    ['Не продаём абстрактный «пакет». Смета привязана к составу продукта и объёму работы, который можно проверить.', 'We do not sell an abstract package. The estimate is tied to a defined product scope and verifiable work.'],
    ['Тип продукта', 'Product type'],
    ['Объём', 'Scope'],
    ['Дизайн', 'Design'],
    ['Срок', 'Timeline'],
    ['Количество страниц, экранов, ролей и пользовательских сценариев. Один лендинг и личный кабинет требуют разного объёма проектирования.', 'The number of pages, screens, roles and user journeys. A landing page and a user account require very different design scopes.'],
    ['Готовность контента', 'Content readiness'],
    ['Если тексты, фотографии и каталог уже готовы, сборка идёт быстрее. Подготовка и переработка материалов оценивается отдельно.', 'Ready copy, photography and catalog data speed up production. Preparing or reworking materials is estimated separately.'],
    ['Функции и интеграции', 'Features and integrations'],
    ['Формы, CRM, оплата, личные кабинеты, уведомления, внешние API и backend увеличивают объём разработки и тестирования.', 'Forms, CRM, payments, user accounts, notifications, external APIs and backend work increase development and testing scope.'],
    ['Срок и приоритет', 'Timeline and priority'],
    ['Реалистичный график согласуем до старта. Срочный запуск возможен только после проверки объёма и доступности команды.', 'We agree on a realistic schedule before starting. An urgent launch is possible only after checking scope and team availability.'],
    ['04 / Границы проекта', '04 / Project boundaries'],
    ['Где заканчивается разработка', 'Where development ends'],
    ['Заранее отделяем согласованный проект от новых задач. Так и клиент, и команда понимают, какой результат входит в стоимость.', 'We separate the agreed project from new tasks in advance, so both the client and the team know what the price includes.'],
    ['До приёмки', 'Before acceptance'],
    ['Фиксируем объём, этапы и результат до старта. Во время разработки вносим согласованные правки и исправляем ошибки внутри утверждённого объёма.', 'We confirm scope, stages and the result before starting. During development, we make agreed revisions and fix issues within that scope.'],
    ['Передача продукта', 'Product handoff'],
    ['После полной оплаты передаём готовый продукт и согласованные доступы. Условия передачи исходников и сторонних лицензий отдельно указываем в предложении.', 'After full payment, we hand over the finished product and agreed access. Source files and third-party licences are covered separately in the proposal.'],
    ['После сдачи', 'After handoff'],
    ['Новые страницы, функции, тексты, редизайн, интеграции и регулярное продвижение оцениваем отдельной задачей или включаем в план поддержки.', 'New pages, features, copy, redesign, integrations and ongoing promotion are estimated separately or included in a support plan.'],
    ['05 / Ежемесячная поддержка', '05 / Monthly support'],
    ['Развитие после запуска', 'Development after launch'],
    ['Перед месяцем согласуем список задач и приоритеты. В плане может быть контент, небольшие изменения интерфейса, технические проверки и SEO-работы в пределах утверждённого объёма.', 'Before each month, we agree on tasks and priorities. The plan may include content, small interface changes, technical checks and SEO work within the approved scope.'],
    ['Как работает подписка', 'How support works'],
    ['от 30 000 ₸ / месяц', 'from 30,000 ₸ / month'],
    ['Многостраничный сайт', 'Multi-page website'],
    ['от 50 000 ₸ / месяц', 'from 50,000 ₸ / month'],
    ['Приложение', 'App'],
    ['после оценки системы', 'after system review'],
    ['Автоматизация', 'Automation'],
    ['Не безлимит:', 'Not unlimited:'],
    ['крупный редизайн, новые функции и срочные задачи оцениваются отдельно. Домен, хостинг, платные API, лицензии и комиссии сторонних сервисов не входят в тариф, если иное не указано в предложении.', 'major redesigns, new features and urgent work are estimated separately. Domain, hosting, paid APIs, licences and third-party fees are not included unless stated in the proposal.'],
    ['06 / Следующий шаг', '06 / Next step'],
    ['Покажите задачу — предложим реалистичный формат запуска.', 'Show us the task — we will suggest a realistic launch format.'],
    ['Можно прислать ссылку, референс, список функций или голосовое сообщение. Ответим с уточняющими вопросами.', 'Send a link, reference, feature list or voice message. We will reply with focused questions.'],
    ['Написать Mononyxx', 'Message Mononyxx'],
  ];

  const supportEntries = [
    ['Поддержка / Документация', 'Support / Documentation'],
    ['Развитие продукта без туманных обещаний.', 'Product development without vague promises.'],
    ['Подписка — это согласованный месячный план, а не безлимитные правки. Здесь подробно объясняем, как формируются задачи, что входит в работу и где проходят границы поддержки.', 'Support is an agreed monthly plan, not unlimited revisions. This page explains how tasks are formed, what the work includes and where support boundaries sit.'],
    ['Содержание страницы', 'Page contents'],
    ['Кому подходит', 'Who it suits'],
    ['Рабочий цикл', 'Work cycle'],
    ['Что входит', 'What is included'],
    ['Форматы', 'Formats'],
    ['Правила', 'Rules'],
    ['Вопросы', 'Questions'],
    ['01 / Кому подходит', '01 / Who it suits'],
    ['Когда подписка оправдана', 'When monthly support makes sense'],
    ['Поддержка нужна, когда продукт уже запущен и получает регулярные задачи. Если изменение разовое, его обычно проще оценить отдельным проектом.', 'Support is useful when a live product receives regular tasks. A one-off change is usually better estimated as a separate project.'],
    ['Контент меняется регулярно', 'Content changes regularly'],
    ['Новые услуги, позиции, тексты, баннеры, акции, сотрудники, адреса или материалы нужно публиковать без отдельной оценки каждого небольшого изменения.', 'New services, items, copy, banners, offers, team members, addresses or materials need publishing without estimating every small change separately.'],
    ['Продукт развивается', 'The product keeps evolving'],
    ['Команда собирает обратную связь и постепенно улучшает существующие сценарии, интерфейс и техническую часть.', 'The team collects feedback and gradually improves existing journeys, the interface and the technical foundation.'],
    ['Нужен технический контроль', 'Technical oversight is needed'],
    ['Важно регулярно проверять формы, ключевые страницы, интеграции и общее состояние работающего продукта.', 'Forms, key pages, integrations and the overall health of the live product need regular checks.'],
    ['Есть понятный поток задач', 'There is a clear task flow'],
    ['У бизнеса уже сформировался список небольших и средних улучшений, которые можно планировать по приоритету.', 'The business already has a list of small and medium improvements that can be planned by priority.'],
    ['02 / Рабочий цикл', '02 / Work cycle'],
    ['Как проходит месяц', 'How a month works'],
    ['Перед стартом периода превращаем пожелания в проверяемый список работ. То, что не помещается в согласованный объём, не прячем внутри тарифа — переносим или оцениваем отдельно.', 'Before the period starts, we turn requests into a verifiable task list. Work outside the agreed scope is moved or estimated separately, not hidden inside the plan.'],
    ['Собираем задачи', 'Collect tasks'],
    ['Клиент присылает список изменений, ссылки, материалы и контекст. Помогаем уточнить формулировки и ожидаемый результат.', 'The client sends changes, links, materials and context. We help clarify each task and its expected result.'],
    ['Расставляем приоритеты', 'Set priorities'],
    ['Определяем, что важно сделать первым. Зависимые и крупные задачи разбиваем на этапы, если это необходимо.', 'We decide what should be done first. Larger or dependent tasks are split into stages when needed.'],
    ['Фиксируем план', 'Confirm the plan'],
    ['В предложении указываем состав работ, ограничения, порядок выполнения и стоимость периода. Для приложений и автоматизации сначала оцениваем состояние системы.', 'The proposal states the scope, limits, order of work and price for the period. Apps and automation first require a system review.'],
    ['Выполняем и показываем', 'Deliver and show progress'],
    ['Передаём результат по согласованным этапам. Проверяем изменения до публикации и сообщаем, какие задачи завершены.', 'We deliver results in agreed stages, check changes before publication and report completed tasks.'],
    ['03 / Состав работы', '03 / Scope of work'],
    ['Что может входить в поддержку', 'What support may include'],
    ['Конкретный набор зависит от продукта и выбранного плана. В подписку включаются только задачи, перечисленные в месячном предложении.', 'The exact scope depends on the product and plan. Only tasks listed in the monthly proposal are included.'],
    ['Направление', 'Area'],
    ['Примеры работ', 'Examples'],
    ['Как согласуем', 'How we confirm it'],
    ['Контент', 'Content'],
    ['Тексты, изображения, цены, услуги, сотрудники, акции, страницы и разделы в пределах текущей структуры.', 'Copy, images, prices, services, team members, offers, pages and sections within the current structure.'],
    ['По списку материалов и страниц.', 'Based on an agreed list of materials and pages.'],
    ['Интерфейс', 'Interface'],
    ['Небольшие изменения существующих блоков, состояний и мобильной адаптации без полной смены концепции.', 'Small changes to existing blocks, states and mobile layouts without replacing the overall concept.'],
    ['По макету или согласованному описанию.', 'Based on a layout or agreed description.'],
    ['Техническая часть', 'Technical work'],
    ['Проверка форм, ссылок, основных сценариев, исправление согласованных ошибок и небольшие технические улучшения.', 'Checking forms, links and primary journeys, fixing agreed issues and making small technical improvements.'],
    ['После диагностики причины и объёма.', 'After diagnosing the cause and scope.'],
    ['SEO-подготовка', 'SEO preparation'],
    ['Метаданные, внутренняя структура, технические проверки и работа с существующими страницами по утверждённому плану.', 'Metadata, internal structure, technical checks and work on existing pages under an approved plan.'],
    ['По списку страниц и задач на период.', 'Based on the agreed pages and tasks for the period.'],
    ['Интеграции', 'Integrations'],
    ['Контроль существующих подключений и небольшие изменения сценариев, если они не требуют отдельной архитектуры.', 'Monitoring existing connections and making small journey changes that do not require new architecture.'],
    ['Только после проверки текущей системы.', 'Only after reviewing the current system.'],
    ['04 / Форматы', '04 / Formats'],
    ['Стартовые ориентиры', 'Starting ranges'],
    ['Точная стоимость зависит от состояния продукта и месячного списка. Для приложения или автоматизации сначала нужен технический обзор.', 'The exact price depends on the product condition and monthly task list. Apps and automation first require a technical review.'],
    ['Лендинг', 'Landing page'],
    ['от 30 000 ₸ / месяц', 'from 30,000 ₸ / month'],
    ['Многостраничный сайт', 'Multi-page website'],
    ['от 50 000 ₸ / месяц', 'from 50,000 ₸ / month'],
    ['Мобильное приложение', 'Mobile app'],
    ['после оценки системы', 'after system review'],
    ['Автоматизация и AI', 'Automation and AI'],
    ['Сторонние расходы:', 'Third-party costs:'],
    ['домен, хостинг, платные API, лицензии, комиссии, рекламные бюджеты и другие внешние сервисы оплачиваются отдельно, если иное прямо не указано в предложении.', 'domain, hosting, paid APIs, licences, fees, advertising budgets and other external services are paid separately unless explicitly included in the proposal.'],
    ['05 / Границы', '05 / Boundaries'],
    ['Что не считается небольшой задачей', 'What is not a small task'],
    ['Эти работы могут быть выполнены Mononyxx, но требуют отдельной оценки, срока и иногда отдельного этапа проектирования.', 'Mononyxx can deliver this work, but it requires a separate estimate, timeline and sometimes a separate design stage.'],
    ['Полный редизайн', 'Full redesign'],
    ['Смена визуальной системы, структуры продукта или большинства пользовательских сценариев.', 'Replacing the visual system, product structure or most user journeys.'],
    ['Новый крупный функционал', 'Major new functionality'],
    ['Личный кабинет, роли, оплата, новая CRM-логика, сложная интеграция, админ-панель или отдельный модуль.', 'User accounts, roles, payments, new CRM logic, a complex integration, admin panel or separate module.'],
    ['Срочная работа вне плана', 'Urgent work outside the plan'],
    ['Возможность и стоимость проверяем отдельно: срочный запрос не должен незаметно вытеснять согласованные задачи.', 'Availability and price are checked separately: an urgent request should not quietly displace agreed tasks.'],
    ['Работа без доступов и материалов', 'Work without access or materials'],
    ['Срок начинается после получения необходимых текстов, изображений, учётных данных и подтверждений со стороны клиента.', 'The timeline starts after we receive the required copy, images, credentials and client approvals.'],
    ['06 / Частые вопросы', '06 / Frequently asked questions'],
    ['До начала подписки', 'Before support starts'],
    ['Подписка означает безлимитные изменения?', 'Does support mean unlimited changes?'],
    ['Нет. В начале периода фиксируем конкретный список и объём. Задачи сверх него переносятся в следующий план или оцениваются отдельно.', 'No. At the start of the period, we confirm a specific list and scope. Additional tasks move to the next plan or are estimated separately.'],
    ['Можно подключить проект, который делала другая команда?', 'Can you support a product built by another team?'],
    ['Да, после предварительной проверки кода, инфраструктуры, доступов и документации. Если сначала нужна диагностика или восстановление, это будет отдельной задачей.', 'Yes, after reviewing the code, infrastructure, access and documentation. Any required diagnosis or recovery is estimated separately.'],
    ['Сколько задач выполняется одновременно?', 'How many tasks run at the same time?'],
    ['Зависит от состава плана и типа продукта. Порядок и допустимое количество параллельных задач указываем в индивидуальном предложении до оплаты.', 'It depends on the plan and product type. The order and number of parallel tasks are stated in the proposal before payment.'],
    ['Что происходит с неиспользованным объёмом?', 'What happens to unused capacity?'],
    ['Правило переноса фиксируем в предложении для конкретного плана. Мы не обещаем автоматический перенос, если он не был согласован заранее.', 'Carry-over rules are stated in the proposal for each plan. Capacity does not roll over automatically unless agreed in advance.'],
    ['Как согласуются пауза или отмена?', 'How are pauses or cancellation handled?'],
    ['Срок уведомления, дата окончания работ и передача незавершённых материалов фиксируются до начала подписки. Условия могут зависеть от типа продукта и зарезервированного объёма команды.', 'The notice period, end date and handoff of unfinished materials are agreed before support begins. Terms may depend on the product and reserved team capacity.'],
    ['Поддержка включает продвижение и рекламу?', 'Does support include promotion and advertising?'],
    ['Технические SEO-задачи могут войти в план. Полноценное SEO-продвижение, реклама, производство большого объёма контента и рекламный бюджет считаются отдельными направлениями.', 'Technical SEO tasks may be included. Ongoing SEO, advertising, large-scale content production and media spend are separate services.'],
    ['Начать', 'Start'],
    ['Покажите продукт и список ближайших задач.', 'Show us the product and the next task list.'],
    ['Проверим, подходит ли подписка, или честно предложим разовую оценку.', 'We will check whether monthly support fits or recommend a one-off estimate.'],
  ];

  const contactEntries = [
    ['Обсудим сайт, приложение или автоматизацию', 'Let’s discuss a website, app or automation'],
    ['Напишите, что нужно запустить, кто будет пользоваться продуктом и какие сроки важны. Если есть текущий сайт, референс или список функций — добавьте ссылку в первое сообщение.', 'Tell us what you need to launch, who will use the product and which dates matter. If you have a current website, reference or feature list, include the link in your first message.'],
    ['Связаться', 'Get in touch'],
    ['Выберите удобный канал', 'Choose a convenient channel'],
    ['Начать просто', 'A simple start'],
    ['Достаточно пары предложений', 'A couple of sentences is enough'],
    ['Напишите, что хотите запустить и для кого. Можно сразу отправить ссылку на текущий сайт, референс, список функций или голосовое сообщение.', 'Tell us what you want to launch and who it is for. You can immediately send a link to the current website, a reference, a feature list or a voice message.'],
    ['Мы сами зададим уточняющие вопросы и предложим следующий шаг. Точную цену называем после разговора, когда понятны объём и требования.', 'We will ask focused questions and suggest the next step. We confirm the exact price after the conversation, once the scope and requirements are clear.'],
    ['Написать в WhatsApp', 'Message us on WhatsApp'],
    ['Работаем удаленно', 'Remote collaboration'],
    ['Алматы и весь Казахстан', 'Almaty and all of Kazakhstan'],
    ['Обсуждение, согласование экранов и передача проекта проходят онлайн. Это позволяет работать с компаниями из разных городов без потери прозрачности: задачи, этапы и результат фиксируются до старта.', 'Discussion, screen approvals and project handoff happen online. This lets us work with companies in different cities without losing transparency: the task, stages and result are confirmed before work starts.'],
    ['Посмотреть цены', 'View pricing'],
    ['Посмотреть работы', 'View work'],
  ];

  const portfolioEntries = [
    ['Кейсы / 2026', 'Cases / 2026'],
    ['Работы с объяснением каждого решения.', 'Work with every decision explained.'],
    ['Показываем не только финальный экран. В каждом проекте разбираем исходную задачу, ограничения, логику интерфейса и то, что получил бизнес после запуска.', 'We show more than the final screen. Each project explains the initial task, constraints, interface logic and what the business gained after launch.'],
    ['Мобильное приложение Star Kids после редизайна', 'Star Kids mobile app after the redesign'],
    ['Пересобрали приложение сети детских центров вокруг реальных сценариев родителей: выбрать филиал, посмотреть пакеты, оставить заявку и пользоваться программой лояльности.', 'We rebuilt the app for a children’s centre network around real parent journeys: choose a branch, view packages, submit a request and use the loyalty programme.'],
    ['Проблема', 'Problem'],
    ['Перегруженные экраны и разрозненные сценарии мешали быстро находить главное.', 'Overloaded screens and fragmented journeys made key actions hard to find.'],
    ['Решение', 'Solution'],
    ['Новая навигация, спокойная дизайн-система, единые компоненты и микроанимации.', 'New navigation, a calm design system, consistent components and micro-interactions.'],
    ['Результат', 'Result'],
    ['Цельный Flutter-продукт с основой для дальнейшего развития функций.', 'A cohesive Flutter product with a foundation for future features.'],
    ['Открыть подробный кейс', 'Open the full case'],
    ['Лендинг кофейни Aura02 Coffee', 'Aura02 Coffee landing page'],
    ['Компактный сайт локальной кофейни для мобильного посетителя из поиска: атмосфера, меню, адрес и контакты без лишних переходов.', 'A compact local coffee shop website for mobile search visitors: atmosphere, menu, address and contacts without unnecessary steps.'],
    ['Гостю было важно получить практическую информацию за несколько секунд.', 'Visitors needed practical information within seconds.'],
    ['Короткая структура, мобильный приоритет и техническая подготовка для локального поиска.', 'A concise structure, mobile-first layout and technical preparation for local search.'],
    ['Посетители находят кофейню через Google и сразу видят адрес и нужную информацию.', 'Visitors find the coffee shop through Google and immediately see the address and key information.'],
    ['Открыть сайт', 'Open website'],
    ['Следующий кейс', 'Next case'],
    ['Расскажите, что нужно изменить в вашем продукте.', 'Tell us what needs to change in your product.'],
    ['Можно начать со ссылки или короткого голосового. Сначала разберём задачу, затем предложим формат работы.', 'Start with a link or a short voice message. We will review the task first, then suggest a suitable format.'],
    ['Обсудить задачу', 'Discuss the task'],
  ];

  const websiteEntries = [
    ['Сайты для бизнеса', 'Websites for business'],
    ['Разработка сайтов в Алматы под ключ', 'End-to-end website development in Almaty'],
    ['Создаем сайты, которые понятно объясняют предложение, быстро работают на телефоне и приводят пользователя к заявке. Берем на себя структуру, дизайн, разработку, базовое SEO и запуск.', 'We create websites that explain the offer clearly, work fast on mobile and guide visitors to an inquiry. We handle structure, design, development, basic SEO and launch.'],
    ['Рассчитать проект', 'Estimate the project'],
    ['Посмотреть работы', 'View work'],
    ['Форматы', 'Formats'],
    ['Какой сайт можно заказать', 'What kind of website we can build'],
    ['Формат выбираем не по шаблону, а по задаче, объему контента и способу привлечения клиентов.', 'We choose the format around the task, content volume and acquisition channel, not a template.'],
    ['Лендинг', 'Landing page'],
    ['Одностраничный сайт для рекламы услуги, товара или нового направления. Продумываем оффер, порядок экранов, форму заявки и переход в WhatsApp. Подходит для быстрого запуска и проверки спроса.', 'A one-page website for a service, product or new direction. We shape the offer, section order, inquiry form and WhatsApp path. It suits fast launches and demand testing.'],
    ['Обсудить лендинг', 'Discuss a landing page'],
    ['Корпоративный сайт', 'Corporate website'],
    ['Многостраничная презентация компании: услуги, кейсы, цены, команда, контакты и формы. Структура помогает клиенту разобраться в предложении, а поисковым системам — правильно индексировать страницы.', 'A multi-page company presentation with services, cases, pricing, team, contacts and forms. The structure helps clients understand the offer and search engines index the pages correctly.'],
    ['Обсудить сайт', 'Discuss a website'],
    ['Интернет-магазин', 'Online store'],
    ['Каталог, карточки товаров, фильтры, корзина и оформление заказа. Подключаем нужные способы оплаты, доставки и связи, чтобы магазин соответствовал реальному процессу продаж.', 'Catalog, product pages, filters, cart and checkout. We connect the payment, delivery and communication methods required by the real sales process.'],
    ['Обсудить магазин', 'Discuss an online store'],
    ['Что входит', 'What is included'],
    ['От идеи до запуска', 'From idea to launch'],
    ['Сначала обсуждаем аудиторию, продукт и желаемое действие на сайте. Затем собираем структуру, создаем дизайн, верстаем адаптивные экраны и подключаем формы или интеграции. Перед публикацией проверяем скорость, отображение и базовые SEO-настройки.', 'We first discuss the audience, product and desired website action. Then we shape the structure, create the design, build responsive screens and connect forms or integrations. Before launch, we check speed, rendering and basic SEO settings.'],
    ['Структура и прототип', 'Structure and prototype'],
    ['UI/UX-дизайн', 'UI/UX design'],
    ['Адаптивная разработка', 'Responsive development'],
    ['Метаданные и sitemap', 'Metadata and sitemap'],
    ['Формы и аналитика', 'Forms and analytics'],
    ['Запуск на домене', 'Domain launch'],
    ['Стоимость', 'Pricing'],
    ['Цена после разговора о задаче', 'Price after discussing the task'],
    ['Точная цена зависит от страниц, контента, интеграций и сроков. Посмотрите стартовые ориентиры или отправьте описание задачи — ответим с подходящим форматом.', 'The exact price depends on pages, content, integrations and timeline. Review the starting ranges or send a task description and we will suggest a suitable format.'],
    ['Посмотреть цены', 'View pricing'],
    ['Написать нам', 'Message us'],
  ];

  const appEntries = [
    ['Разработка мобильных приложений для iOS и Android', 'Mobile app development for iOS and Android'],
    ['Создаем мобильные продукты для клиентов и внутренних команд: личные кабинеты, сервисы записи, программы лояльности, каталоги, marketplace и бизнес-инструменты.', 'We create mobile products for customers and internal teams: user accounts, booking services, loyalty programmes, catalogs, marketplaces and business tools.'],
    ['Обсудить приложение', 'Discuss an app'],
    ['Посмотреть кейс', 'View case'],
    ['Разработка приложений', 'App development'],
    ['Собираем продукт по этапам', 'We build the product in stages'],
    ['Начинаем с главного пользовательского сценария, чтобы не тратить бюджет на функции без подтвержденной ценности.', 'We start with the primary user journey to avoid spending budget on features without validated value.'],
    ['Прототип и UI/UX', 'Prototype and UI/UX'],
    ['Описываем роли и сценарии, собираем интерактивный прототип и дизайн-систему. До разработки можно проверить логику экранов и убрать лишние шаги.', 'We define roles and journeys, then create an interactive prototype and design system. Screen logic can be tested and unnecessary steps removed before development.'],
    ['MVP для проверки идеи', 'MVP to validate the idea'],
    ['Запускаем первую рабочую версию с ключевыми функциями. MVP помогает получить обратную связь, показать продукт партнерам и определить следующий приоритет.', 'We launch the first working version with core features. An MVP helps gather feedback, show the product to partners and define the next priority.'],
    ['Полноценный продукт', 'Full product'],
    ['Разрабатываем frontend, backend, API, уведомления, аналитику и админ-панель. Готовим сборки и сопровождаем публикацию в App Store и Google Play.', 'We develop the frontend, backend, API, notifications, analytics and admin panel. We prepare builds and support publication in the App Store and Google Play.'],
    ['Технологии и поддержка', 'Technology and support'],
    ['Приложение не заканчивается релизом', 'The app does not end at release'],
    ['После запуска анализируем обратную связь, исправляем критичные проблемы и планируем развитие. При необходимости подключаем платежи, CRM, карты, push-уведомления и интеграции с существующими системами бизнеса.', 'After launch, we review feedback, fix critical issues and plan development. When needed, we connect payments, CRM, maps, push notifications and integrations with existing business systems.'],
    ['iOS и Android', 'iOS and Android'],
    ['Flutter и web API', 'Flutter and web APIs'],
    ['Backend и база данных', 'Backend and database'],
    ['Админ-панель', 'Admin panel'],
    ['Аналитика и уведомления', 'Analytics and notifications'],
    ['Поддержка релиза', 'Release support'],
    ['Оценка', 'Estimate'],
    ['Сначала определим ядро продукта', 'First, we define the product core'],
    ['Стоимость зависит от количества ролей, экранов, интеграций и backend-логики. Опишите идею и обязательные функции — предложим состав MVP и порядок этапов.', 'The price depends on roles, screens, integrations and backend logic. Describe the idea and essential features, and we will suggest the MVP scope and delivery stages.'],
    ['Отправить задачу', 'Send the task'],
  ];

  const pageEntries = page === 'support'
    ? supportEntries
    : page === 'pricing'
      ? pricingEntries
      : page === 'contact'
        ? contactEntries
        : page === 'portfolio'
          ? portfolioEntries
          : page === 'websites'
            ? websiteEntries
            : page === 'apps'
              ? appEntries
              : [];
  const entries = [...commonEntries, ...pageEntries];
  const translations = new Map();

  entries.forEach(([ru, en]) => {
    const value = { ru, en };
    translations.set(ru, value);
    translations.set(en, value);
  });

  const metadata = {
    pricing: {
      ru: {
        title: 'Цены на разработку сайтов и приложений — Mononyxx',
        description: 'Стартовая стоимость разработки сайтов, мобильных приложений и автоматизации в Mononyxx. Что входит в работу и как формируется точная оценка.',
        socialTitle: 'Цены на разработку — Mononyxx',
        socialDescription: 'Стартовые цены, состав работ и принципы точной оценки сайтов, приложений и автоматизации.',
      },
      en: {
        title: 'Website and app development pricing — Mononyxx',
        description: 'Starting prices for websites, mobile apps and automation by Mononyxx, with scope details and a clear estimate process.',
        socialTitle: 'Development pricing — Mononyxx',
        socialDescription: 'Starting prices, work scope and a clear estimate process for websites, apps and automation.',
      },
    },
    support: {
      ru: {
        title: 'Поддержка сайтов и приложений — Mononyxx',
        description: 'Как устроена ежемесячная поддержка Mononyxx: состав работ, планирование, приоритеты, границы подписки и стоимость развития сайта или приложения.',
        socialTitle: 'Поддержка цифровых продуктов — Mononyxx',
        socialDescription: 'Подробно о ежемесячном развитии сайтов, приложений и автоматизации.',
      },
      en: {
        title: 'Website and app support — Mononyxx',
        description: 'How monthly Mononyxx support works: scope, planning, priorities, boundaries and pricing for ongoing product development.',
        socialTitle: 'Digital product support — Mononyxx',
        socialDescription: 'A detailed guide to monthly website, app and automation development.',
      },
    },
    contact: {
      ru: {
        title: 'Контакты Mononyxx — заказать сайт или приложение',
        description: 'Свяжитесь с Mononyxx, чтобы заказать сайт, мобильное приложение или автоматизацию. Работаем с проектами в Алматы и по Казахстану.',
        socialTitle: 'Контакты Mononyxx',
        socialDescription: 'Обсудите разработку сайта или приложения с командой Mononyxx.',
      },
      en: {
        title: 'Contact Mononyxx — discuss a website or app',
        description: 'Contact Mononyxx to discuss a website, mobile app or automation project in Almaty or anywhere in Kazakhstan.',
        socialTitle: 'Contact Mononyxx',
        socialDescription: 'Discuss website or app development with the Mononyxx team.',
      },
    },
    portfolio: {
      ru: {
        title: 'Кейсы сайтов и приложений — Mononyxx',
        description: 'Кейсы Mononyxx: задача, решения и результат в мобильном приложении Star Kids и сайте Aura02 Coffee.',
        socialTitle: 'Кейсы сайтов и приложений — Mononyxx',
        socialDescription: 'Не только экраны: контекст, задача, решения и результат каждого проекта.',
      },
      en: {
        title: 'Website and app case studies — Mononyxx',
        description: 'Mononyxx case studies: task, decisions and results for the Star Kids mobile app and Aura02 Coffee website.',
        socialTitle: 'Website and app case studies — Mononyxx',
        socialDescription: 'More than screens: context, task, decisions and results for each project.',
      },
    },
    websites: {
      ru: {
        title: 'Разработка сайтов в Алматы под ключ — Mononyxx',
        description: 'Разработка сайтов в Алматы и по Казахстану: лендинги, корпоративные сайты и интернет-магазины под ключ. Дизайн, SEO и запуск от Mononyxx.',
        socialTitle: 'Разработка сайтов в Алматы под ключ — Mononyxx',
        socialDescription: 'Лендинги, корпоративные сайты и интернет-магазины: от структуры до запуска.',
      },
      en: {
        title: 'Website development in Almaty — Mononyxx',
        description: 'End-to-end landing pages, corporate websites and online stores in Almaty and across Kazakhstan, including design, SEO and launch.',
        socialTitle: 'Website development in Almaty — Mononyxx',
        socialDescription: 'Landing pages, corporate websites and online stores from structure to launch.',
      },
    },
    apps: {
      ru: {
        title: 'Разработка мобильных приложений iOS и Android — Mononyxx',
        description: 'Разработка мобильных приложений для iOS и Android в Казахстане. MVP, UI/UX, backend, админ-панели и поддержка после запуска.',
        socialTitle: 'Разработка приложений для iOS и Android — Mononyxx',
        socialDescription: 'Проектируем и запускаем мобильные продукты: от MVP до полноценного приложения.',
      },
      en: {
        title: 'iOS and Android app development — Mononyxx',
        description: 'Mobile app development for iOS and Android in Kazakhstan, including MVP, UI/UX, backend, admin panels and post-launch support.',
        socialTitle: 'iOS and Android app development — Mononyxx',
        socialDescription: 'We design and launch mobile products from MVP to a full application.',
      },
    },
    privacy: {
      ru: {
        title: 'Политика конфиденциальности — Mononyxx',
        description: 'Как Mononyxx собирает, использует и защищает данные посетителей сайта и пользователей формы заявки.',
        socialTitle: 'Политика конфиденциальности — Mononyxx',
        socialDescription: 'Правила обработки данных на сайте Mononyxx.',
      },
      en: {
        title: 'Privacy Policy — Mononyxx',
        description: 'How Mononyxx collects, uses and protects website visitor and inquiry form data.',
        socialTitle: 'Privacy Policy — Mononyxx',
        socialDescription: 'Data processing rules for the Mononyxx website.',
      },
    },
    terms: {
      ru: {
        title: 'Условия использования — Mononyxx',
        description: 'Условия использования сайта Mononyxx, материалов, форм обратной связи и внешних сервисов.',
        socialTitle: 'Условия использования — Mononyxx',
        socialDescription: 'Основные правила использования сайта Mononyxx.',
      },
      en: {
        title: 'Terms of Use — Mononyxx',
        description: 'Terms for using the Mononyxx website, content, inquiry forms and external services.',
        socialTitle: 'Terms of Use — Mononyxx',
        socialDescription: 'The basic rules for using the Mononyxx website.',
      },
    },
  };

  const readStoredLanguage = () => {
    try {
      return localStorage.getItem(languageChoiceStorageKey) === 'manual'
        ? localStorage.getItem(languageStorageKey) || defaultLanguage
        : defaultLanguage;
    } catch (_) {
      return defaultLanguage;
    }
  };

  const translate = (value, language) => translations.get(value)?.[language] || value;

  const applyLanguage = (language, persistChoice = false) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const tag = node.parentElement?.tagName;
        return tag === 'SCRIPT' || tag === 'STYLE'
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const text = node.nodeValue.trim();
      if (!text) return;
      const translated = translate(text, language);
      if (translated !== text) node.nodeValue = node.nodeValue.replace(text, translated);
    });

    document.querySelectorAll('[aria-label], [title], [alt]').forEach((element) => {
      ['aria-label', 'title', 'alt'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value) element.setAttribute(attribute, translate(value, language));
      });
    });

    document.documentElement.lang = language;
    const pageMetadata = metadata[page]?.[language];
    if (pageMetadata) {
      document.title = pageMetadata.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', pageMetadata.description);
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', pageMetadata.socialTitle);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', pageMetadata.socialDescription);
    }

    try {
      localStorage.setItem(languageStorageKey, language);
      if (persistChoice) localStorage.setItem(languageChoiceStorageKey, 'manual');
    } catch (_) {
      // The selected language still applies for the current page.
    }

    document.querySelectorAll('[data-lang-control]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.langControl === language));
    });

    const menuButton = document.getElementById('seo-menu-button');
    if (menuButton) {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-label', isOpen
        ? (language === 'en' ? 'Close menu' : 'Закрыть меню')
        : (language === 'en' ? 'Open menu' : 'Открыть меню'));
      const label = menuButton.querySelector('[data-menu-label]');
      if (label) label.textContent = isOpen
        ? (language === 'en' ? 'Close' : 'Закрыть')
        : (language === 'en' ? 'Menu' : 'Меню');
    }
  };

  const menu = document.getElementById('seo-menu');
  const menuButton = document.getElementById('seo-menu-button');

  const setMenuOpen = (isOpen) => {
    if (!menu || !menuButton) return;
    const language = document.documentElement.lang === 'en' ? 'en' : 'ru';
    menu.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen
      ? (language === 'en' ? 'Close menu' : 'Закрыть меню')
      : (language === 'en' ? 'Open menu' : 'Открыть меню'));
    const label = menuButton.querySelector('[data-menu-label]');
    if (label) label.textContent = isOpen
      ? (language === 'en' ? 'Close' : 'Закрыть')
      : (language === 'en' ? 'Menu' : 'Меню');
  };

  menuButton?.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  document.querySelectorAll('[data-lang-control]').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.langControl, true);
    });
  });

  applyLanguage(readStoredLanguage());
})();
