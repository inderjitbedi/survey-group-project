let express = require('express');

let router = express.Router();

let mongoose = require('mongoose');

//Connect to products model

let products = require('../models/products');

//get route for the product list page -read operation

module.exports.displayProductList =(req, res, next) => {
    products.find((err, productList) => {
        if (err){
            return console.error(err);
        }
        else{
            // console.log(ProductList);
            res.render('./productList/list',{title:'Product List', ProductList : productList,
            displayname:req.user?req.user.displayname:''  });
            console.log(productList);
        }
    });
};


// Get route for displaying the Add page - Create operation

module.exports.displayProductListAdd = (req, res, next) => {
        res.render('./productList/add',{title:'Add Products',displayname:req.user?req.user.displayname:''});

    };


// Post route for processing the Add page - Create operation


module.exports.addProductList = (req, res, next) => {

    let newProduct = products(
        {
            // "product_name" : req.body.product_name,
            // "brand_name" : req.body.brand_name,
            // "color" : req.body.color,
            // "price" : req.body.price

            "person_name" : req.body.person_name,
            "contact_number" : req.body.contact_number,
            "email_id" : req.body.email_id
        }
    );
        // console.log(newProduct);
    products.create(newProduct, (err, products) => {
        if (err) {
            console.log(err);
            // res.end(err);
        } else {
            res.redirect('/productList');
            // console.log(products);
        }

    })

};


// Get route for displaying the Edit page - Update operation


module.exports.displayProductListEdit =(req, res, next) => {

    let id = req.params.id;
    products.findById(id, (err, productListEdit) => {
        if (err) {
            console.log(err);
            // res.end(err);
        } else {
            res.render('./productList/edit', { title:'Edit Product', editProduct : productListEdit,
            displayName:req.user?req.user.displayName:''})
        }
    })

};


// Post route for processing the Add page - Update operation


module.exports.editProductList = (req, res, next) => {
    let id = req.params.id;
    let editProduct = products(
        {
            "_id" : id,
            "person_name" : req.body.person_name,
            "contact_number" : req.body.contact_number,
            "email_id" : req.body.email_id
            // "product_name" : req.body.product_name,
            // "brand_name" : req.body.brand_name,
            // "color" : req.body.color,
            // "price" : req.body.price
        }
    );

    products.updateOne({_id:id},editProduct,(err) => {
        if (err) {
            console.log(err);
            // res.end(err);
        } else {
            res.redirect('/productList');
        }
    })
};

// get route for deletion - Delete operation

module.exports.displayProductListDelete =(req, res, next) => {
    let id = req.params.id;

    products.remove({_id : id} , (err) => {
        if (err) {
            // res.end(err);
            console.log(err);
        } else {
            res.redirect('/productList');
        }
    });

};