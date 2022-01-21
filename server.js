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
    const note = createNewnote(req.body, notes)
    res.json(note);
  });

  // Function to create a new note
  function createNewnote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    // take new array with new note added and write it to db.json file
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    //return finished code to POST route for response
    return note;
    console.log(note)
} 



app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});

