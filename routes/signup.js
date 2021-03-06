const express = require ('express');
const bcrypt = require ('bcrypt');

const User = require('../models/user');

const router = express.Router();
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
    res.render('signup');
  });
    
router.post ('/signup', (req, res, next) => {
    const nameInput = req.body.username;
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    if (emailInput === '' || passwordInput === ''){
        res.render ('views/signup', {
            errorMessage: 'Enter both email and password to signup'
        });
        return;
}

User.findOne({ email: emailInput}, '_id', ( err, existingUser) =>{
    if (err) {
        next (err);
        return;
    }

    if (existingUser !== null) {
        res.render ('views/signup',{
            errorMessage: 'The email ${emailInput} is already in use.'
        });
        return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(passwordInput, salt);

    const userSubmission ={
        name: nameInput,
        email: emailInput,
        password: hashedPass
    };

    const theUser = new User(userSubmission);

    theUser.save((err) => {
        if (err) {
            res.render('views/signup',{
                errorMessage: 'Something went wrong. Try again later.'
            });
            return;
        }

        res.redirect ('/');
    });
});
});
module.exports = router;
