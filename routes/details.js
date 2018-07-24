const express = require('express');
const router  = express.Router();
const Courts = require('../models/courts.js');

/* GET home page */
router.get('/details/:id', (req, res, next) => {
    courtId = req.params.id;
        Courts.findById({ _id:(`${courtId}`)})
    .then(courtDetails => {

       //res.send(courtDetails)
        res.render("details", { courtDetails });
    })
    .catch (error => {
        console.log (error)
    })
});


module.exports = router;