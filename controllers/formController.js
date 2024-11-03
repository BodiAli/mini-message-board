const crypto = require("node:crypto");
const { messages } = require("./indexController");

function getFormPage(req, res) {
  res.render("pages/form", { title: "New Message", style: "form.css" });
}

function createMessage(req, res, next) {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date(), id: crypto.randomUUID() });
  next();
}

function redirectToHomePage(req, res) {
  res.redirect("/");
}

module.exports = { createMessage, getFormPage, redirectToHomePage };
