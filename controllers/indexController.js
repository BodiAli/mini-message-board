const messages = [
  {
    id: crypto.randomUUID(),
    user: "Amando",
    text: "Hi there!",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    user: "Charles",
    text: "Hello World!",
    added: new Date(),
  },
];

function getIndexPage(req, res) {
  res.render("pages/index", { title: "Mini Message Board", messages });
}

module.exports = { getIndexPage, messages };
