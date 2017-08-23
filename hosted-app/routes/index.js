var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { maintitle: 'hosted APP @ :5001', title: 'Hosted app' });
});

module.exports = router;
