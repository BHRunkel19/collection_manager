const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose'); 

const golfclub = require('../models/club');

routes.get('/', (req, res) => {
  golfclub.find()
    // then show my contacts
    .then(clubs => res.render('clubList', { clubs: clubs }))
    // handle errors
    .catch(err => res.send('there was an error :('));
});

routes.get('/addItem', (req, res) => {
  if (req.query.id) {
    golfclub.findById(req.query.id)
      // render form with this contact
      .then(club => res.render('addItem', { club: club }));
  } else {
    res.render('addItem');
  }
});

routes.post('/saveClub', (req, res) => {
  golfclub.findByIdAndUpdate(req.body.id, req.body, { upsert: true })
    .then(() => res.redirect('/'))
    // catch validation errors
    .catch(err => {
      console.log(err);
      res.render('addItem', {
        errors: err.errors,
        club: req.body
      });
    });
});

routes.get('/deleteContact', (req, res) => {
  golfclub.findById(req.query.id)
    .remove()
    // then redirect to the homepage
    .then(() => res.redirect('/'));
});

module.exports = routes;
