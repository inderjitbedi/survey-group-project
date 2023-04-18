let express = require('express');
let passport = require('passport');
let jwt = require('jsonwebtoken');
let DB = require('../config/db');
let router = express.Router();

//create user model intance
let usermodel = require('../models/user');
let user = usermodel.user;

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', { title: 'Home', displayname: req.user ? req.user.displayname : '' });
};
module.exports.displayAboutPage = (req, res, next) => {
  res.render('index', { title: 'About', displayname: req.user ? req.user.displayname : '' });
};

module.exports.displayProductsPage = (req, res, next) => {
  res.render('index', { title: 'Products', displayname: req.user ? req.user.displayname : '' });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render('index', { title: 'Services', displayname: req.user ? req.user.displayname : '' });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render('index', { title: 'Contact', displayname: req.user ? req.user.displayname : '' });
};


module.exports.displayLoginPage = (req, res, next) => {
  if (!req.user) {
    res.render('auth/login',
      {
        title: 'Login',
        messages: req.flash('loginMessage'),
        displayname: req.user ? req.user.displayname : '',
      });
  } else {
    return res.redirect('/');
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
      //server error
      if (err) {
        return next(err);
      }

      if (!user) {
        req.flash('loginMessage', 'Authenticate error');
        // return res.redirect('/login');
        return res.json({
          statusCode: 500,
          msg: 'Authenticate error',
        });
      }
      req.login(user, (err) => {
        //server error?
        if (err) {
          // return next(err);
          return res.json({
            statusCode: 500,
            msg: 'Authenticate error',
          });
        }
        const payload = {
          id: user._id,
          displayName: user.displayName,
          username: user.username,
          email: user.email,
        };

        const authToken = jwt.sign(payload, DB.secret, {
          expiresIn: 604800, // 1 week
        });

        return res.json({
          statusCode: 200,
          msg: 'User Logged in Successfully!',
          user: {
            id: user._id,
            displayName: user.displayName,
            username: user.username,
            email: user.email,
          },
          token: authToken,
        });
        // return res.redirect('/surveys');
      });
    },
  )(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  if (!req.user) {
    res.render('auth/register', {
      title: 'Register',
      messages: req.flash('registerMessge'),
      displaname: req.user ? req.user.displayname : '',
    });
  } else {
    return res.redirect('/');
  }
};


module.exports.processRegisterPage = (req, res, next) => {
  // instantiate the user objet
  let newUser = new user({
    username: req.body.username,
    //password : req.body.password,
    email: req.body.email,
    displayname: req.body.displayname,
  });
  user.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log('Error:inserting new user');
      if (err.name == 'UserExists Error') {
        req.flash(
          'registerMessage',
          'Regsitration Error: User Already Exists!',
        );
        console.log('Error:User Already Exists');
      }
      // return res.render('auth/register', {
      //   title: 'Register',
      //   messages: req.flash('registerMessage'),
      //   displayname: req.user ? req.user.displayname : '',
      // });
      return res.json({ statusCode: 409, msg: 'Regsitration Error: User Already Exists!' });
    } else {
      // registration is successful if no error exists.
      //redirect the user and authenticate them
      // return passport.authenticate('local')(req, res, () => {
      //   res.redirect('/surveys');
      // });
      return res.json({ statusCode: 200, msg: 'User Registered Successfully!' });
    }
  });
};


module.exports.performLogout = (req, res, next) => {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    // res.redirect('/');
    res.json({ statusCode: 200, msg: 'User Successfully Logged out!' });
  });
};
