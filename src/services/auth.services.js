import passport from 'passport';

import LocalStrategy from 'passport-local';

// import { Strategy as JWTStrategy, ExtractJWT } from 'passport-jwt';

import Tester from '../modules/tester/tester.model';

import constants from '../config/constants';

// Local Strategy
const localOpts = {
    usernameField: 'email',
};


const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const tester = await Tester.findOne({ email });

        console.log(email, password);
        console.log(tester);

        if (!tester) {
            return done(null, false);
        }
        else if (!tester.authenticateTester(password)) {
            return done(null, false);
        }

        return done(null, tester);
    }
    catch (e) {
        return done(e, false);
    }
});

//JWT Strategy
/* const jwtOpts = {
    jwtFromRequest: ExtractJWT.fromAuthHeader('authorization'),
    secretOrKey: constants.JWT_SECRET,
};

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
        const tester = await Tester.findById(payload._id);

        if (!tester) {
            return done(null, false);
        }

        return done(null, tester);
    }
    catch (e) {
        return done(e, false);
    }
}); */

passport.use(localStrategy);
// passport.use(jwtStrategy);

export const authLocal = passport.authenticate('local', { session: false });
// export const authJwt = passport.authenticate('jwt', { session: false });