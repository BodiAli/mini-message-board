const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/formRouter");

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
app.use("/new", newMessageRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
