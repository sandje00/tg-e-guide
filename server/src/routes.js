const authController = require('./controllers/authController');
const validation = require('./authentication/validation');

module.exports = (app) => {
    app.post('/signup', validation.signup, authController.signup);
};