const { Router } = require("express");
const { messages } = require("../controllers/indexController");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("pages/form");
});

newMessageRouter.post("/", (req, res) => {
  const { messageText, messageUser } = req.body;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

module.exports = newMessageRouter;
