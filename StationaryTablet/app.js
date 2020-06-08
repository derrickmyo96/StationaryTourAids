var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//  Choose one of the mainRouter for main page
var mainRouter = require('./routes/main');
var main1Router = require('./routes/main1');
var registerTabletRouter = require('./routes/registerTablet');
var scanQRRouter = require('./routes/scanQR');

//  Testing purposes
var testRouter = require('./routes/test')

//  Krislab Employee site routers
var krislabLoginRouter = require('./routes/krislabLogin');
var krislabRegisterRouter = require('./routes/krislabRegister');

//  Transport service for nodemailer to send emails
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jiarapplication@gmail.com',
    pass: 'HkyJfq2659TD'
  }
});

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
