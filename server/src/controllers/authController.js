module.exports = {
    signup(req, res) {
        res.send({
            message: `Hello, ${req.body.username}, you have signed up!`
        });
    }
};