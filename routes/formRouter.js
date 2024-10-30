const { Router } = require("express");
const { createMessage, getFormPage, redirectToHomePage } = require("../controllers/formController");

const formRouter = Router();

formRouter.get("/", getFormPage);

formRouter.post("/", createMessage, redirectToHomePage);

module.exports = formRouter;
