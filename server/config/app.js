let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');


// modules for authentication using passport

let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


//database setup using mongoose abd set db file
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to the DB URI
mongoose.set('strictQuery', false);
mongoose.connect(DB.URI, {useNewUrlParser:true, useUnifiedtopology:true});

let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, 'Connection Error:'));
mongodb.once('open', () => {
  console.log('connected to MongoDB...');
})

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let productRouter = require('../routes/product');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(cors())

//setup express session

app.use(session({
  secret : DB.secret,
  saveUninitialized : false,
  resave : false
}));

//initialize flash to maintain error message
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//passport configuration
//create a user model instance

let userModel = require('../models/user');
let user = userModel.user;
passport.use(user.createStrategy());

//serialize and deserielize the user info
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productList', productRouter);

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
  res.render('error',{title:'Error'});
});
module.exports = app;
