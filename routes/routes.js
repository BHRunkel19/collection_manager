const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

const foodItem = require('../models/food');

routes.get('/', (req, res) => {
  foodItem.find()
    // then show my foods
    .then(foods => res.render('foodList', { foods: foods }))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

routes.get('/addItem', (req, res) => {
  if (req.query.id) {
    foodItem.findById(req.query.id)
      // render form with this food
      .then(food => res.render('addItem', { food: food }));
  } else {
    res.render('addItem');
  }
});

routes.post('/saveFood', (req, res) => {
  //set a random number as the ID
  if (!req.body.id){
    req.body.id = new mongoose.mongo.ObjectID();
  }
  foodItem.findByIdAndUpdate(req.body.id, req.body, { upsert: true })
    .then(() => res.redirect('/'))
    // catch validation errors
    .catch(err => {
      console.log(err);
      res.render('addItem', {
        errors: err.errors,
        food: req.body
      });
    });
});

routes.get('/deleteFood', (req, res) => {
  foodItem.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
});

module.exports = routes;
