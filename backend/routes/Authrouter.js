const { SignupValidation,LoginValidation } = require('../middlewares/Authvalidation');
const { signup } = require('../controllers/Authcontroller');


const router = require('express').Router();

router.post('/Signup', SignupValidation ,signup
    ); 
    router.post('/login', LoginValidation ,signup
    ); 
module.exports = router;