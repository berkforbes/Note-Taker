const notes  = require('./db/db.json');
var express = require('express');
var app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());



app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
  });


app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});

