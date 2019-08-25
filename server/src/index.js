const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const {sequelize} = require('./models');

const app = express();

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync({force: true})
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