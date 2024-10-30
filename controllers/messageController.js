const { messages } = require("./indexController");

function redirectToHomePage(req, res) {
  res.redirect("/");
}

function getMessagePage(req, res) {
  const { messageId } = req.params;
  const messageToRender = messages.find((message) => message.id === messageId);
  if (!messageToRender) {
    res.render("pages/message-404", { title: "Not Found", message: messageToRender });
  }
  res.render("pages/message", { title: `${messageToRender.user}'s Message`, message: messageToRender });
}

function deleteMessage(req, res) {
  const { messageId } = req.params;
  const messageToDeleteIndex = messages.findIndex((message) => message.id === messageId);
  messages.splice(messageToDeleteIndex, 1);
  res.sendStatus(204);
}

module.exports = { redirectToHomePage, getMessagePage, deleteMessage };
