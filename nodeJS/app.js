var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');

//////////////////////

var usersRouter = require('./routes/users');
var signinRouter = require('./routes/sign_in');
var homepageRouter = require('./routes/homepage');
var courseRouter = require('./routes/course');
var eLearningRouter = require('./routes/e-learning');
var settingRouter = require('./routes/setting');
var achievementRouter = require('./routes/achievement');
var projectRouter = require('./routes/project');
var test1Router = require('./routes/test_1');
var test2Router = require('./routes/test_2');
var test3Router = require('./routes/test_3');
var test4Router = require('./routes/test_4');

var popupRouter = require('./routes/popup');
var dbRouter = require('./routes/db');

var ideRouter = require('./routes/compiler');


/////////////////////



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////

/////////////////////////////

app.use('/', signinRouter);
app.use('/users', usersRouter);
app.use('/sign-in', signinRouter);
app.use('/home', homepageRouter);
app.use('/course', courseRouter);
app.use('/learn', eLearningRouter);
app.use('/setting',settingRouter);
app.use('/achievement',achievementRouter);
app.use('/project', projectRouter);

app.use('/popup', popupRouter);
app.use('/test1', test1Router);
app.use('/test2', test2Router);
app.use('/test3', test3Router);
app.use('/test4', test4Router);


app.use('/db', dbRouter);
app.use('/ide', ideRouter);


//app.use(express.static('public'));
//app.use('/stylesheets',express.static(__dirname+'public/stylesheets'));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));


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


const port = process.env.PORT || 8080
console.log("\n\n ******************************** \n\n")
app.listen(port, () => console.log(`Listening on port ${port}\n\n`))