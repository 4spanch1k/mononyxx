module.exports = async function handler(request, response) {
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

  const { language, name, contact, projectType, budget, description } = body;
  const requiredFields = [language, name, contact, projectType, budget, description];

  if (requiredFields.some((field) => typeof field !== "string" || field.trim() === "")) {
    return response.status(400).json({ error: "Missing required fields" });
  }

  const escapeHtml = (value) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const message = [
    "<b>Новая заявка MONONYXX</b>",
    "",
    `<b>Язык:</b> ${escapeHtml(language.toUpperCase())}`,
    `<b>Имя:</b> ${escapeHtml(name.trim())}`,
    `<b>Контакт:</b> ${escapeHtml(contact.trim())}`,
    "",
    `<b>Тип проекта:</b> ${escapeHtml(projectType.trim())}`,
    `<b>Бюджет:</b> ${escapeHtml(budget.trim())}`,
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
