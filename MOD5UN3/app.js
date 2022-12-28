
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var pool = require('./models/bd');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//select
pool.query("select * from empleados").then(function(resultados){
console.log(resultados);
});

//insert
//  var obj = {
//    id_emp: 22,
//    nombre: 'Juan',
//    apellido: 'Lopez',
//    trabajo: 'Docente',
//    edad: 45,
//    salario: 23000,
//    mail: 'juanlopez@bignet'
//  }

//  pool.query("insert into empleados set ?",[obj]).then(function(resultados){
//     console.log(resultados);
//  });

//update
//  var id=22;
//  var obj = {
//    nombre: 'Pablo',
//    apellido: 'Gomez'
//  }

//  pool.query("update empleados set ? where id_emp=?",[obj, id]).then(function(resultados){
//    console.log(resultados);
//  });

//delete
//  var id=22;

//  pool.query("delete from empleados where id_emp=?",[id]).then(function(resultados){
//    console.log(resultados);
//  });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
