const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const {User} = require('./models');
const config = require('./config');

passport.use(
    new jwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.auth.jwtSecret
    }, async function (jwtPayload, done) {
        try {
            const user = await User.findOne({
                where: {
                    username: jwtPayload.username
                }
            });

            if(!user) {
                return done(new Error(), false);
            }

            return done(null, user);
        }
        catch(err) {
            return done(new Error(), false);
        }
    })
);

module.exports = null;