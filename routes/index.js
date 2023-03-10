var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', description: 'Spotit inc is a indian software development and cyber security company based in kerala.' });
});

module.exports = router;
