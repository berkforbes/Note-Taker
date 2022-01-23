var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 3002;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// Require files with routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
 
// Use public folder
app.use(express.static("public"));


app.listen(PORT, () => {
  console.log("API server now on PORT: " + PORT);
});

