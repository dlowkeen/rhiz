const router = require('express').Router();
const { googleAPIKey } = require('../config/keys');

router.route('/mapKey')
  .get((req, res) => {
  console.log('request made for key which is: ', googleAPIKey)
  res.status(200).send(googleAPIKey)
});

module.exports = router;