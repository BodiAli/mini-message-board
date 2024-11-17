const { Router } = require("express");
const {
  redirectToHomePage,
  getMessagePage,
  deleteMessage,
  updateMessage,
  getUpdateMessageForm,
} = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", redirectToHomePage);

messageRouter.get("/:messageId", getMessagePage);

messageRouter.get("/:messageId/update", getUpdateMessageForm);

messageRouter.delete("/:messageId", deleteMessage);

messageRouter.put("/:messageId", updateMessage);

module.exports = messageRouter;
