var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

//  Choose one of the mainRouter for main page
var mainRouter = require('./routes/main');
var registerTabletRouter = require('./routes/registerTablet');
var scanQRRouter = require('./routes/scanQR');
var verifyRouter = require('./routes/verify');
var verifyFailRouter = require('./routes/verifyFail');

//  Testing purposes
var testRouter = require('./routes/test')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', mainRouter);
app.use('/registerTablet', registerTabletRouter);
app.use('/scanQR', scanQRRouter);
app.use('/verify', verifyRouter);
app.use('/verifyFail', verifyFailRouter);

//  Testing purposes
app.get('/test', testRouter);

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
