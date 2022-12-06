var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });

});

router.post('/ingresar', function (req, res) {
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre   
  }
  res.redirect('/');
});

router.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
