const { Router } = require("express");
const { redirectToHomePage, getMessagePage, deleteMessage } = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", redirectToHomePage);

messageRouter.get("/:messageId", getMessagePage);

messageRouter.delete("/:messageId", deleteMessage);

module.exports = messageRouter;
