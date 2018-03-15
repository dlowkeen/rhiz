const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require('./routes')(app);

 // run this express heroku production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // express will serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})