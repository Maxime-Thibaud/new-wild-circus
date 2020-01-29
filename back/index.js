const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const categories = require('./routes/categories');
app.use('/api/categories', categories);

const performances = require('./routes/performances');
app.use('/api/performances', performances);

const artists = require('./routes/artists');
app.use('/api/artists', artists);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
