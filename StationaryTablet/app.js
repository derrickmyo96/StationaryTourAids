const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

//  Choose one of the mainRouter for main page
const mainRouter = require('./routes/main');
const registerTabletRouter = require('./routes/registerTablet');
const scanQRRouter = require('./routes/scanQR');
const verifyRouter = require('./routes/verify');
const verifyFailRouter = require('./routes/verifyFail');
const verifyDuplicateRouter = require('./routes/verifyDuplicate');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'javascript')));

app.get('/', mainRouter);
app.use('/registerTablet', registerTabletRouter);
app.use('/scanQR', scanQRRouter);
app.use('/verify', verifyRouter);
app.use('/verifyFail', verifyFailRouter);
app.use('/verifyDuplicate', verifyDuplicateRouter);

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
