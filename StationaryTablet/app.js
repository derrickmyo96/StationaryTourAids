var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//  Nodemailer to send email for OTP
var nodemailer = require('nodemailer');

var mainRouter = require('./routes/main');
var registerTabletRouter = require('./routes/registerTablet');
var scanQRRouter = require('./routes/scanQR');
//  Testing purposes
var main1Router = require('./routes/main1');

//  Krislab Employee site routers
var krislabLoginRouter = require('./routes/krislabLogin');
var krislabRegisterRouter = require('./routes/krislabRegister');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', main1Router);
app.get('/registerTablet', registerTabletRouter);
app.get('/scanQR', scanQRRouter);

//  Krislab Employee site views
app.get('/krislabLogin', krislabLoginRouter);
app.get('/krislabRegister', krislabRegisterRouter);


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
