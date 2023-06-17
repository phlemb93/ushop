const Cart = require('../model/Cart');



//GET ALL CARTS
const get_all_carts = async (req, res) => {

    try {
        const carts = await Cart.find().sort({ createdAt: -1 });
        res.status(200).json(carts)

    } catch (error) {
        res.status(500).json(error)
    }
}

//CREATE USER CART
const add_one_cart = async (req, res) => {

        const tokenId = req.tokenData.id;
        const isAdmin = req.tokenData.isAdmin;
        const userId = req.body.userId;

        if(tokenId === userId || isAdmin) {  
            try {
                const cart = await Cart.create(req.body);
                res.status(200).json(cart);
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(400).json("You're not authorized")
        }
}   

//GET USER CART
const get_one_cart = async (req, res) => {

    const userId = req.params.id;

    try {
        const cart = await Cart.findOne({ userId });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
}

//UPDATE USER CART
const update_one_cart = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedCart = await Cart.findOneAndUpdate({ userId: id }, req.body , { new:true });
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }
}


//DELETE SINGLE CART
const delete_one_cart = async (req, res) => {

    const id = req.params.id;

    try {
        await Cart.findByIdAndDelete(id);
        res.status(200).json("Cart Deleted");
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { get_all_carts, add_one_cart, get_one_cart, update_one_cart, delete_one_cart }