const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const {sequelize} = require('./models');

/* const db = require('./config/database');
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); */

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
    res.send({
        message: `Hello, ${req.body.username}, you have signed up!`
    });
});

sequelize.sync()
  .then(() => {
    app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
  });