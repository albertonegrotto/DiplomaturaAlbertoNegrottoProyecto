var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('galeria', { title: 'Galería' });
});

module.exports = router;
