const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();

// Set up lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);

// Initialize the hit count to 0 if it does not exist in the database
db.defaults({ hitCount: 0 }).write();

// Set up a route to retrieve the hit count
app.get('/hits', (req, res) => {
  const hitCount = db.get('hitCount').value();
  res.send({ hitCount });
});

// Set up a route to update the hit count
app.post('/hits', (req, res) => {
  db.update('hitCount', n => n + 1).write();
  const hitCount = db.get('hitCount').value();
  res.send({ hitCount });
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
