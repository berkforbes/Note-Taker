var express = require('express');
var app = express();
const notes  = require('./db/db.json');

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});
