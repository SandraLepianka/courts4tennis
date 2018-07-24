const express = require ('express');
const bcrypt = require ('bcrypt');

const User = require('../models/user');

const router = express.Router();
const bcryptSalt = 10;

router.get('/login', (req, res, next) => {
    res.render('login');
  });
    
router.post ('/login', (req, res, next) => {
    const emailInput = req.body.email;
    const passwordInput = req.body.password;

    if (emailInput === '' || passwordInput === ''){
        res.render ('views/login', {
            errorMessage: 'Enter both email and password to login'
        });
        return;
}

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashedPass = bcrypt.hashSync(passwordInput, salt);

    const userSubmission ={

        email: emailInput,
        password: hashedPass
    };

    const theUser = new User(userSubmission);

    
    
});
module.exports = router;
