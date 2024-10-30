const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const formRouter = require("./routes/formRouter");
const messageRouter = require("./routes/messageRouter");

const app = express();

// App level middleware
app.use(express.urlencoded({ extended: true }));

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

app.use((req, res) => {
  res.status(404).render("pages/404", { title: "404 Not Found" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
