var express = require('express')
var app = express()
const { notes } = require('./db/db.json');

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.post('/', function (req, res) {
    res.send('hello world')
  })

  app.listen(3002, () => {
    console.log(`API server now on port 3002!`);
  });