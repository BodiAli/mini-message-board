const { Router } = require("express");
const { createMessage, getFormPage } = require("../controllers/formController");

const formRouter = Router();

formRouter.get("/", getFormPage);

formRouter.post("/", createMessage);

module.exports = formRouter;
