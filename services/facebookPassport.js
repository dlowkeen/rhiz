const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookAppID,
      clientSecret: keys.facebookAppSecret,
      callbackURL: "/auth/facebook/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Profile", profile);
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // already have a record of this user
          done(null, existingUser);
        } else {
          // no user record, so create record
          new User({
            facebookId: profile.id,
            displayName: profile.displayName
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
