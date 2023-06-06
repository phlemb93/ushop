const Product = require('../model/Product');


//GET ALL PRODUCTS
const get_all_products = async (req, res) => {

    const Qlimit = +req.query.limit;

    try { 
        if(Qlimit){
            const products = await Product.find().sort({createdAt: -1 }).limit(Qlimit);
            res.status(200).json(products);
        } else {
            const products = await Product.find().sort({createdAt: -1 });
            res.status(200).json(products);
        }  
    } catch (error) {
        res.status(500).json(error);
    }
}

//ADD SINGLE PRODUCT
const add_one_product = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error)
    }
}

//GET SINGLE PRODUCT
const get_one_product = async (req, res) => {

    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json(error);
    }

}

//UPDATE SINGLE PRODUCT
const update_one_product = async (req, res) => {

    const productId = req.params.id;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new:true });
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

//DELETE SINGLE PRODUCT
const delete_one_product = async (req, res) => {

    const productId = req.params.id;

    try {
        await Product.findByIdAndDelete(productId);
        res.status(200).json("Product Deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { get_all_products, add_one_product, get_one_product, update_one_product, delete_one_product }