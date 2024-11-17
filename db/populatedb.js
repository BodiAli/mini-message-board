require("dotenv").config();
const { Client } = require("pg");

const connectionString = process.argv[2];

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
 id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 "user" VARCHAR (25),
 text TEXT,
 added TIMESTAMP DEFAULT CURRENT_TIMESTAMP(0)
);

INSERT INTO messages ("user",text) 
VALUES 
('Amando', 'Hi there!'),
('Charles', 'Hello World!'),
('Jack', 'Hey!'),
('Rue', 'Hi everyone!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
