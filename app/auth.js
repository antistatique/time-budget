'use strict';
var User 				= require('./models/user.model'),
    jwt         = require('jsonwebtoken');

var config 			= require('../config/config.js');

exports.isAuthenticated = function(req, res, next)  {
  if (res.locals.isAuthenticated) {
    next();
  } else {
    res.redirect('/');
  }
}

exports.checkUser = function(req, res, next)  {
  User.findOne({username:req.body.username}, function(err, user) {
    if (err) return next(err);
    if (user) {
      req.flash('error', "User already exist, please change username or email");
      res.render('user/signup');
    } else {
      next();
    }
  });
}
