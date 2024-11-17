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
    message: messageToRender,
    style: "message.css",
  });
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  await db.deleteMessage(messageId);
  res.sendStatus(204);
});

module.exports = { redirectToHomePage, getMessagePage, deleteMessage };
