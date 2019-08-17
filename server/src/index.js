const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello world!'
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));