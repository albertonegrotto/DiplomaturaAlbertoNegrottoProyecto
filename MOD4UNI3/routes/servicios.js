var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('servicios', { title: 'Servicios' });
});

module.exports = router;
