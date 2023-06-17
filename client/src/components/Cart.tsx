import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';

import { Link } from 'react-router-dom';
import { useState }  from 'react';
import CartItems from './CartItems';
import { Item } from '../utilities/types/types'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { useSelector } from 'react-redux';
import currencyFormatter from '../utilities/currencyFormatter';


function Cart() {

    const { isCartOpen, handleCartClose } = useIsOpenContext();

    const { cartItems, total } = useSelector(state => state.cart);


  return (
        <div className="cart-container" style={{ transform: isCartOpen ? 'translate(0%)' : 'translate(100%)' }}>
                <div className="top-header">
                    <p>Basket</p>
                    <div className="close-menu" onClick={handleCartClose}>
                        <ArrowBackIcon />
                        <p>Continue shopping</p>
                    </div>
                </div>

                <div className="center">

                    { cartItems ? (
                        <div className="cart-items">
                        { cartItems.map((item: Item) => (
                            <CartItems {...item} key={item._id}/>
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
                    <p>Subtotal: <span>{currencyFormatter(total)}</span></p>
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