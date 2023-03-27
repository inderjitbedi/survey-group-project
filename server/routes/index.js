/**
 * Enrollment Number :- 301307330
 * Name :- Khanjan Dave
 */



let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });
router.get('/', indexController.displayHomePage);




/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('index', { title: 'Home' });
// });
router.get('/home', indexController.displayHomePage);

/* GET about page. */
// router.get('/about', function(req, res, next) {
//   res.render('index', { title: 'About' });
//   // res.redirect();
// });
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
// router.get('/products', function(req, res, next) {
//   res.render('index', { title: 'Products' });
// });

router.get('/products', indexController.displayProductsPage);

/* GET services page. */
// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services' });
// });
router.get('/services', indexController.displayServicesPage);



/* GET contact us page. */
// router.get('/contactus', function(req, res, next) {
//   res.render('index', { title: 'Contact' });
// });
router.get('/contactus', indexController.displayContactPage);

// get router for login page
router.get('/login',indexController.displayLoginPage);

//post router for login page
router.post('/login',indexController.processLoginPage);

// get router for register page
router.get('/register',indexController.displayRegisterPage);

//post router for regsiter page
router.post('/register',indexController.processRegisterPage);

//get to perform logout
router.get('/logout',indexController.performLogout);

module.exports = router;
