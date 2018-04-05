const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/heroes_db');

const Hero = require('../hero');

// GET api listing.
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all the heroes
router.get('/heroes', function(req, res) {
  Hero.find({}, function(err, heroes) {
    if (err)
      res.send(err);

    res.json(heroes);
  });
});

// Get the hero with the ID
router.get('/heroes/:id', function(req, res) {
  var idHero = req.params.id;
  Hero.findById(idHero, function(err, hero) {
    if (err)
      res.send(err);

    res.json(hero);
  });
});

// Create a hero
router.post('/heroes', (req, res) => {
  var hero = new Hero;
  hero.name = req.body.name;
  hero.health = req.body.health;
  hero.velocity = req.body.velocity;
  hero.damage = req.body.damage;
  hero.image = req.body.image;
  hero.save(function(err) {
    if (err)
      throw err;
    // Saved
  });
  res.json(hero);
});

module.exports = router;
