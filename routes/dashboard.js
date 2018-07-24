const express = require('express');
const router  = express.Router();
const Courts = require('../models/courts.js');
const Booking = require('../models/booking.js');
const User = require('../models/user.js');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/dashboard', (req, res, next) => {
    Courts.find()
    .then(allCourts => {
       console.log('courts: ', allCourts)
        res.render("dashboard", { courts: allCourts });
    })
    .catch (error => {
        console.log (error)
    })
});



module.exports = router;
