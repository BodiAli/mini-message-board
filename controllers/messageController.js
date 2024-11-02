const { messages } = require("./indexController");

function redirectToHomePage(req, res) {
  res.redirect("/");
}

function getMessagePage(req, res) {
  const { messageId } = req.params;
  const messageToRender = messages.find((message) => message.id === messageId);
  if (!messageToRender) {
    throw new Error("Message not found");
  }
  res.render("pages/message", {
    title: `${messageToRender.user}'s Message`,
    message: messageToRender,
    style: "message.css",
  });
}

function deleteMessage(req, res) {
  const { messageId } = req.params;
  const messageToDeleteIndex = messages.findIndex((message) => message.id === messageId);
  if (messageToDeleteIndex === -1) {
    res.sendStatus(404);
    return;
  }
  messages.splice(messageToDeleteIndex, 1);
  res.sendStatus(204);
}

module.exports = { redirectToHomePage, getMessagePage, deleteMessage };
