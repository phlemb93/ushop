import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';

import { Link } from 'react-router-dom';
import { useState }  from 'react';
import CartItems from './CartItems';
import { Item } from '../utilities/types/types'
import { useIsOpenContext } from '../utilities/contexts/useIsOpenContext';


function Cart() {

    const { isCartOpen, handleCartClose } = useIsOpenContext();

  const [cartItems, setCartItems] = useState<null | Item[]>(
    [
        {
            "id": 1,
            "title": "the rebel",
            "category": "armchair",
            "brief": "1.5 Seater Snuggler",
            "color": "blue",
            "price": 1600,
            "images": [
                "src/assets/images/sofa.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 2,
            "title": "the white",
            "category": "accessories",
            "brief": "1.5 Seater Snuggler",
            "color": "gray",
            "price": 300,
            "images": [
                "src/assets/images/armchair.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/bundles.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/accessories.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/sofa.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
        {
            "id": 3,
            "title": "the green",
            "category": "bundle",
            "brief": "1.5 Seater Snuggler",
            "color": "green",
            "price": 6500,
            "images": [
                "src/assets/images/img1.jpg", 
                "src/assets/images/img2.jpg", 
                "src/assets/images/img3.jpg"
            ]
        },
    ]
  );

//   transform: translateX(100%);
// transform: isCartOpen ? 'translate(0%)' : 'translate(100%)'


  return (
        <div className="cart-container" style={{ transform: isCartOpen ? 'translate(0%)' : 'translate(100%)' }}>
                <div className="top">
                    <p>Basket</p>
                    <div className="close-menu" onClick={handleCartClose}>
                        <ArrowBackIcon />
                        <p>Continue shopping</p>
                    </div>
                </div>

                <div className="center">

                    { cartItems ? (
                        <div className="cart-items">
                        { cartItems.map((item) => (
                            <CartItems {...item} />
                        )) }
                        </div>
                        ) : (
                        <div className="empty-cart">
                            <Badge badgeContent={0}>
                                <LocalMallOutlinedIcon style={{fontSize:'80px'}} />
                            </Badge>
                            <p>Your cart is currently empty.</p>
                            <Link to='/store'>
                                <div>Shop All</div>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="bottom">
                    <p>Subtotal: <span>$0.00</span></p>
                    <small>Shipping and Taxes will be calculated at the next step</small>
                    <span>Pick delivery date at checkout</span>
                    <div className="btn">
                        <LockOutlinedIcon />
                        <p>Secure Checkout</p>
                    </div>
                </div>
            
        </div>
  )
}

export default Cart