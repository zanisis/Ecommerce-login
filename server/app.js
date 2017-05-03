var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')
const passwordHash = require('password-hash');

//passport
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');
const User = require('./models/user');

//connection to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

passport.use(new Strategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
            if (!user) {
            return done(null, { message: 'Username Not Found You Must Register' });
            }
            if (!passwordHash.verify(password, user.password)) {
            return done(null, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
  }
));

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(passport.initialize());
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);



module.exports = app;
