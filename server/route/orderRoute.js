const { get_all_orders, add_one_order, get_one_order, get_user_orders, update_one_order, delete_one_order } = require('../controller/orderController');
const { verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('../utilities/verifyTokenAndAuthorization');

const router = require('express').Router();



router.get('/', verifyTokenAndAdmin, get_all_orders);
router.post('/', verifyTokenAndAuthorization, add_one_order);
router.get('/:id', verifyTokenAndAuthorization, get_one_order );
router.get('/find/:id', verifyTokenAndAuthorization, get_user_orders );
router.put('/:id', verifyTokenAndAdmin, update_one_order);
router.delete('/:id', verifyTokenAndAdmin, delete_one_order);


module.exports = router;