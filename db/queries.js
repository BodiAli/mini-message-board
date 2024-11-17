const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages;");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
  return rows;
}

async function createNewMessage(messageUser, messageText) {
  await pool.query('INSERT INTO messages ("user", text) VALUES ($1, $2)', [messageUser, messageText]);
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = {
  getAllMessages,
  createNewMessage,
  getMessage,
  deleteMessage,
};