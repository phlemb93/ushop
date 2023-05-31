const { get_all_users, get_one_user, update_one_user, delete_one_user } = require('../controller/userController');

const router = require('express').Router();



router.get('/', get_all_users);
router.get('/:id', get_one_user);
router.put('/:id', update_one_user);
router.delete('/:id', delete_one_user);


module.exports = router;