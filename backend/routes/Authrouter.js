const { SignupValidation,LoginValidation } = require('../middlewares/Authvalidation');
const { signup, login } = require('../controllers/Authcontroller');


const router = require('express').Router();

router.post('/Signup', SignupValidation ,signup
    ); 
    router.post('/login', LoginValidation ,login
    ); 
module.exports = router;
