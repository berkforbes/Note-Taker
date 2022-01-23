const fs = require("fs");
const notes = require("../db/db.json");

module.exports = function (app) {
    
  // Function to create a new note
  function createNewNote(note) {
    note = JSON.stringify(note);
    console.log(note);
    // take new array with new note added and write it to db.json file
    fs.writeFileSync("./db/db.json", note, function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }

  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  // Post method will add new note
  app.post("/api/notes", (req, res) => {
    // Create unique id for new note
    if (notes.length == 0) {
      req.body.id = "0";
    } else {
      req.body.id = JSON.stringify(
        JSON.parse(notes[notes.length - 1].id) + 1
      );
    }
    console.log("req.body.id: " + req.body.id);

    // push new note to json array
    notes.push(req.body);
    // Create new note function
    createNewNote(notes);
    console.log(notes);
    // Return new note to db
    res.json(req.body);
  });

  // Delete method will delete note and ID
  app.delete("/api/notes/:id", function (req, res) {
    // Obtains id and converts to a string
    let id = req.params.id.toString();

    // loop notesArray to find ID to be deleted
    for (i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
        res.send(notes[i]);

        // Deletes note
        notes.splice(i, 1);
        break;
      }
    }

    // Write notes data to database
    createNewNote(notes);
  });
};
