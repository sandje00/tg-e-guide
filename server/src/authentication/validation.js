const joi = require('joi');

module.exports = {
    signup(req, res, next) {
        const schema = {
            username: joi.string().alphanum(),
            hpwd: joi.string().regex(
                new RegExp(/^[a-zA-Z0-9]{8,32}$/)
            )
        }
        
        const {error, value} = joi.validate(req.body, schema);

        if(error) {
            switch(error.details[0].context.key) {
                case 'username':
                    res.status(400).send({
                        error: `<b>You must provide valid username</b>
                        <br>
                        It must contain following characters: lower case, upper case, digits 0 - 9
                        `
                    });
                    break;
                case 'hpwd':
                    res.status(400).send({
                        error: `<b>You must provide valid password</b>
                        <br>
                        1. It must contain following characters: lower case, upper case, digits 0 - 9
                        <br>
                        2. It must be 8 - 32 characters in length
                        `
                    });
                    break;
                default:
                    res.status(400).send({
                        error: 'Invalid sign up information.'
                    });
            }
        }
        else {
            next();
        }
    }
};