const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

function redirectToHomePage(req, res) {
  res.redirect("/");
}

const getMessagePage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const [messageToRender] = await db.getMessage(messageId);

  if (!messageToRender) {
    throw new Error("Message not found");
  }
  res.render("pages/message", {
    title: `${messageToRender.user}'s Message`,
    id: messageToRender.id,
    message: messageToRender,
    style: "message.css",
  });
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  await db.deleteMessage(messageId);
  res.sendStatus(204);
});

const getUpdateMessageForm = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const [message] = await db.getMessage(messageId);
  res.render("pages/update-message", {
    message,
    style: "form.css",
  });
});

const updateMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  const { messageUser, messageText } = req.body;
  await db.updateMessage(messageId, messageUser, messageText);
  res.sendStatus(204);
});

module.exports = { redirectToHomePage, getMessagePage, deleteMessage, getUpdateMessageForm, updateMessage };
