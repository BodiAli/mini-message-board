const { messages } = require("./indexController");

function getFormPage(req, res) {
  res.render("pages/form", { title: "New Message", style: "form.css" });
}

function createMessage(req, res) {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date(), id: crypto.randomUUID() });
  res.status(201).redirect("/");
}

module.exports = { createMessage, getFormPage };
