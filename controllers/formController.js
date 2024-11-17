const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

function getFormPage(req, res) {
  res.render("pages/form", { title: "New Message", style: "form.css" });
}

const createMessage = asyncHandler(async (req, res, next) => {
  const { messageText, messageUser } = req.body;
  await db.createNewMessage(messageUser, messageText);
  next();
});

function redirectToHomePage(req, res) {
  res.redirect("/");
}

module.exports = { createMessage, getFormPage, redirectToHomePage };
