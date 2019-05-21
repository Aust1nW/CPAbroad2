var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var locationRouter = require('./routes/locations');
//var foodTypeRouter = require('./routes/foodType');
//var entertainmentTypeRouter = require('./routes/entertainmentType');
//var entertainmentRouter = require('./routes/entertainment');
//var landmarkRouter = require('./routes/landmark');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/location', locationRouter);
//app.use('/restaurants', restaurantRouter);
//app.use('/foodtype', foodTypeRouter);
//app.use('/entertainmentType', entertainmentTypeRouter);
//app.use('/entertainment', entertainmentRouter);
//app.use('/landmarks', landmarkRouter);

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

