const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/* const morgan = require('morgan'); */

require('dotenv').config({ path: '../.env' });

const config = require('./config');
const {sequelize} = require('./models');

const app = express();

/* app.use(morgan('combined')); */
app.use(bodyParser.json());
app.use(cors());

require('./passport');

require('./routes')(app);

sequelize.sync({force: false})
  .then(() => {
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });

    app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
  });