var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Patrick's blog api" });
});

router.post('/auth', (req, res, next) => {
  var passCandidate = req.body.password;
  var pass = "Patrick4321!";
  if (pass == passCandidate) {
    res.send(true);
    res.end();
  } else {
    res.send(false);
    res.end();
  }
});

module.exports = router;
