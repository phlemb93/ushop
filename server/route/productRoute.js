const { get_all_products, add_one_product, get_one_product, update_one_product, delete_one_product } = require('../controller/productController');

const router = require('express').Router();



router.get('/', get_all_products);
router.post('/', add_one_product);
router.get('/:id', get_one_product);
router.put('/:id', update_one_product);
router.delete('/:id', delete_one_product);


module.exports = router;