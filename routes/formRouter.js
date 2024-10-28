const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("pages/form");
});

module.exports = newMessageRouter;
