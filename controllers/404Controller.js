module.exports = function get404Page(req, res) {
  res.status(404).render("pages/404", { title: "404 Not Found", style: "404.css" });
};
