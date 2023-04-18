let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

let passport = require('passport');

//Connect to products model
let surveyController = require('../controllers/survey');


function requiredAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


//get route for the product list page -read operation

// router.get('/', surveyController.displayProductList);

router.get('/', requiredAuth, surveyController.displaySurveyList);

// Get route for displaying the Add page - Create operation

router.get('/add', requiredAuth, surveyController.displayAddSurveyResponse);


// Post route for processing the Add page - Create operation


router.post('/add', requiredAuth, surveyController.addSurveyResponse);


// Get route for displaying the Edit page - Update operation


router.get('/edit/:id',requiredAuth, surveyController.displayEditSurveyResponse);


// Post route for processing the Add page - Update operation


router.post('/edit/:id', requiredAuth, surveyController.editSurveyResponse);

// get route for deletion - Delete operation

router.get('/delete/:id', requiredAuth, surveyController.deleteSurveyResponse);


module.exports = router;
