const express = require('express');
const passport = require("passport");
const router = express.Router();

// Google Authenication.
router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", [passport.authenticate("google"), (req, res) => {
  res.redirect('/');
}]);

module.exports = router;
