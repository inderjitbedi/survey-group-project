let express = require('express');
let passport = require('passport');
let router = express.Router();

//create user model intance
let usermodel = require('../models/user');
let user = usermodel.user;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home',displayname:req.user?req.user.displayname:'' });
}
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About', displayname:req.user?req.user.displayname:'' });
}

module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', displayname:req.user?req.user.displayname:'' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services', displayname:req.user?req.user.displayname:'' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact', displayname:req.user?req.user.displayname:'' });
}



module.exports.displayLoginPage = (req, res, next) => {
    if (!req.user) {
        res.render('auth/login',
        {
            title : "Login",
            messages : req.flash('loginMessage'),
            displayname : req.user?req.user.displayname:''
        });
    } else {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req,res,next) => {
    passport.authenticate('local', (err,user,info) => {
        console.log(user);
        //server error
        if (err) {
            return next(err);
        } 

        if (!user) {
            req.flash('loginMessage','Authenticate error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if(err){
                return next(err);
            }
            return res.redirect('/productList');
        });
    }
    )(req,res,next);
}

module.exports.displayRegisterPage = (req,res,next) => {
    if(!req.user){
        res.render('auth/register',{
            title : 'Register',
            messages : req.flash('registerMessge'),
            displaname: req.user? req.user.displayname : ''
        });
    }
    else{
        return res.redirect('/');
    }
}


module.exports.processRegisterPage = (req,res,next) => {
    // instantiate the user objet
    let newUser = new user({
        username : req.body.username,
        //password : req.body.password,
        email : req.body.email,
        displayname : req.body.displayname
    });
    user.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error:inserting new user');
            if(err.name == 'UserExists Error'){
                req.flash(
                    'registerMessage',
                    'Regsitration Error: User Already Exists!'
                );
                console.log('Error:User Already Exists')
            }
            return res.render('auth/register',{
                title : 'Register',
                messages : req.flash('registerMessage'),
                displayname : req.user?req.user.displayname:''
            });
        } else {
            // registration is successful if no error exists.
            //redirect the user and authenticate them
            return passport.authenticate('local')(req,res, () => {
                res.redirect('/productList');
            })
        }
    })
    console.log(newUser);
}


module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if(err){
            return next(err);
            
        }
        res.redirect('/');
    });
}
