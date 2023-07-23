const { get_all_carts, get_one_cart, update_one_cart, delete_one_cart, add_one_cart } = require('../controller/cartController');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../middleware/verifyTokenAndAuthorization');

const router = require('express').Router();


router.get('/', verifyTokenAndAdmin, get_all_carts);
router.post('/', add_one_cart)
router.get('/find/:id', verifyTokenAndAuthorization, get_one_cart );
router.put('/find/:id', verifyTokenAndAuthorization, update_one_cart);
router.delete('/:id', verifyTokenAndAuthorization, delete_one_cart);


module.exports = router;