import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import { CartItem, useAppSelector } from '../utilities/types/types'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import currencyFormatter from '../utilities/currencyFormatter';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Token = {
    card: object,
    id: string
}

const STRIPE_REACT_KEY = 'pk_test_51NGDEJBbnd2GEVM1ZUgXg2TaZv2YvTgceQQmm4lZ8P603UvIq0icOIMP7HCEXqNhZzuiVAwxRmNYu5AGpa6926Dd00ResrvYT7';

function Cart() {

    const [tokenData, setTokenData] = useState({} as Token);
    const navigate = useNavigate();
    const { isCartOpen, handleCartClose } = useIsOpenContext();
    const { cartItems } = useAppSelector(state => state.cart);

    const total = cartItems.reduce((sum:number, item:CartItem) => {
        return sum += item.price * item.quantity;
    }, 0);

    const handleShopAll = () => {
        navigate('/store');
        handleCartClose();
    }

    const onToken = (token: Token) => {
        setTokenData(token)
        console.log(typeof token)
    }
    

useEffect(() => {

    try {
        const makeRequest = async () => {
            const res = await axios.post('https://ushop-mern-api.vercel.app/api/checkout/payment', {
                tokenId: tokenData.id,
                amount: total * 100
            })

            if(res.status === 200){
                console.log(res.data)
                localStorage.removeItem('cart');
            }
        }

        tokenData && makeRequest();
        
    } catch (error) {
        console.log(error)
    }

},[tokenData])

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

                    { cartItems.length > 0 ? (
                        <div className="cart-items">
                        { cartItems.map((item: CartItem) => (
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
                                <div onClick={handleShopAll}>Shop All</div>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="bottom">
                    <p className='sum-total'>Subtotal: <span>{currencyFormatter(total)}</span></p>
                    <small>Shipping and Taxes will be calculated at the next step</small>
                    <span>Pick delivery date at checkout</span>

                    <button 
                    className="btn"
                    style={{
                        display: total > 0 ? 'block' : 'none'}}
                    >
                        <StripeCheckout
                        name='USHOP Store'
                        token={onToken}
                        stripeKey={STRIPE_REACT_KEY}
                        amount={total*100}
                        currency='GBP'
                        description='Payment for your upholstery'
                        shippingAddress
                        billingAddress
                        >
                            <div>
                                <LockOutlinedIcon />
                                <p>Secure Checkout</p>
                            </div>
                        </StripeCheckout>
                    </button>
                    <button 
                    className="btn" 
                    style={{
                        display: total === 0 ? 'block' : 'none',
                        backgroundColor: 'gray'
                        }}
                    >
                        <div>
                            <LockOutlinedIcon />
                            <p>Secure Checkout</p>
                        </div>
                    </button>
                </div>
            
        </div>
    )
}

export default Cart