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
  {
    id: crypto.randomUUID(),
    user: "Jack",
    text: "Hey!",
    added: new Date(),
  },
  {
    id: crypto.randomUUID(),
    user: "Rue",
    text: "Hi everyone!",
    added: new Date(),
  },
];

function getIndexPage(req, res) {
  res.render("pages/index", { title: "Mini Message Board", messages, style: "index.css" });
}

module.exports = { getIndexPage, messages };
