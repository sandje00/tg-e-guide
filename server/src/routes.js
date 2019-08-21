module.exports = (app) => {
    app.post('/signup', (req, res) => {
        res.send({
            message: `Hello, ${req.body.username}, you have signed up!`
        });
    });
};