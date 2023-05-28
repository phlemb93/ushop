const router = require('express').Router();
const { login_post, register_post } = require('../controller/authController')



//POST requests
router.post('/login', login_post)
router.post('/register', register_post)



module.exports = router;