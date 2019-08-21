const authController = require('./controllers/authController');

module.exports = (app) => {
    app.post('/signup', authController.signup);
};