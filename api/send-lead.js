module.exports = async function handler(request, response) {
  const allowedOrigins = new Set([
    "https://mononyxx.com",
    "https://www.mononyxx.com",
    "https://mononyxx.vercel.app",
    "https://stitchmononyxxpremiumwebinterface.vercel.app",
  ]);
  const requestOrigin = request.headers.origin;

  if (allowedOrigins.has(requestOrigin)) {
    response.setHeader("Access-Control-Allow-Origin", requestOrigin);
  }

  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Max-Age", "86400");

  if (request.method === "OPTIONS") {
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return response.status(500).json({
      error: "Telegram environment variables are not configured",
    });
  }

  let body = {};

  try {
    body = typeof request.body === "string" ? JSON.parse(request.body) : request.body || {};
  } catch {
    return response.status(400).json({ error: "Invalid JSON body" });
  }

  const {
    language,
    name,
    contactMethod,
    contactMethodLabel,
    contactValue,
    projectType,
    budget,
    description,
  } = body;
  const requiredFields = [language, name, contactMethod, contactValue, projectType, budget, description];

  if (requiredFields.some((field) => typeof field !== "string" || field.trim() === "")) {
    return response.status(400).json({ error: "Missing required fields" });
  }

  const normalizedContactMethod = contactMethod.trim().toLowerCase();
  const normalizedContactValue = contactValue.trim();
  const contactLabels = {
    whatsapp: "WhatsApp",
    telegram: "Telegram",
    email: "Email",
  };

  const isValidContact =
    (normalizedContactMethod === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedContactValue)) ||
    (normalizedContactMethod === "telegram" && /^@?[a-zA-Z0-9_]{5,32}$/.test(normalizedContactValue)) ||
    (normalizedContactMethod === "whatsapp" && /^\+?[0-9\s()-]{7,20}$/.test(normalizedContactValue));

  if (!contactLabels[normalizedContactMethod] || !isValidContact) {
    return response.status(400).json({ error: "Invalid contact details" });
  }

  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const readableContactMethod =
    typeof contactMethodLabel === "string" && contactMethodLabel.trim() !== ""
      ? contactMethodLabel.trim()
      : contactLabels[normalizedContactMethod];
  const readableContactValue =
    normalizedContactMethod === "telegram" && !normalizedContactValue.startsWith("@")
      ? `@${normalizedContactValue}`
      : normalizedContactValue;

  const message = [
    "<b>Новая заявка на проект MONONYXX</b>",
    "",
    "<b>Клиент</b>",
    `<b>Имя:</b> ${escapeHtml(name.trim())}`,
    `<b>Способ связи:</b> ${escapeHtml(readableContactMethod)}`,
    `<b>Контакт:</b> <code>${escapeHtml(readableContactValue)}</code>`,
    "",
    "<b>Проект</b>",
    `<b>Тип проекта:</b> ${escapeHtml(projectType.trim())}`,
    `<b>Бюджет:</b> ${escapeHtml(budget.trim())}`,
    `<b>Язык формы:</b> ${escapeHtml(language.toUpperCase())}`,
    "",
    "<b>Описание:</b>",
    escapeHtml(description.trim()),
  ].join("\n");

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    return response.status(502).json({ error: "Failed to send Telegram message" });
  }

  return response.status(200).json({ ok: true });
};
