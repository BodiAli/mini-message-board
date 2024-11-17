require("dotenv").config();
const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const messageRouter = require("./routes/messageRouter");
const get404Page = require("./controllers/404Controller");

const app = express();

// App level middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);
app.use("/new", formRouter);
app.use("/message", messageRouter);

// 404 page
app.use(get404Page);

// Error Handler
app.use((err, req, res, _next) => {
  console.error(err);

  res.status(404).render("pages/message-404", {
    title: "Message Not Found",
    style: "message-404.css",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
