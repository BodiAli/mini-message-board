const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getIndexPage = asyncHandler(async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("pages/index", { title: "Mini Message Board", messages, style: "index.css" });
});

module.exports = { getIndexPage };
