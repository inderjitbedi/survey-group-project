let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

let passport = require('passport');

//Connect to products model

let products = require('../models/products');
let productListController = require('../controllers/productList');


function requiredAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


//get route for the product list page -read operation

// router.get('/', productListController.displayProductList);

router.get('/',productListController.displayProductList);


// Get route for displaying the Add page - Create operation

router.get('/add', requiredAuth, productListController.displayProductListAdd);


// Post route for processing the Add page - Create operation


router.post('/add', requiredAuth, productListController.addProductList);


// Get route for displaying the Edit page - Update operation


router.get('/edit/:id',requiredAuth, productListController.displayProductListEdit);


// Post route for processing the Add page - Update operation


router.post('/edit/:id', requiredAuth, productListController.editProductList);

// get route for deletion - Delete operation

router.get('/delete/:id', requiredAuth, productListController.displayProductListDelete);


module.exports = router;