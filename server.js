const notes  = require('./db/db.json');
var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
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
    const note = createNewNote(req.body, notes)
    res.json(note);
  });

  // Function to create a new note
  function createNewNote(note) {
    note = JSON.stringify(note)
    console.log(note);
    return(note)

    // take new array with new note added and write it to db.json file
    fs.writeFileSync('./db/db.json', note, function(err) {
        if (err) {
            return console.log(err)
        }
    });
  } 



app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});

