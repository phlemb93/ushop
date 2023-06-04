const { get_all_users, get_one_user, update_one_user, delete_one_user } = require('../controller/userController')
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../utilities/verifyTokenAndAuthorization');
const router = require('express').Router();


router.get('/', verifyTokenAndAdmin, get_all_users);
router.get('/:id', verifyTokenAndAuthorization, get_one_user);
router.put('/:id', verifyTokenAndAuthorization, update_one_user);
router.delete('/:id', verifyTokenAndAuthorization, delete_one_user);


module.exports = router;