import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import { CartItem, useAppSelector } from '../utilities/types/types'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import currencyFormatter from '../utilities/currencyFormatter';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



function Cart() {

    const [clientSecret, setClientSecret] = useState('')
    const [stripePromise, setStripePromise] = useState(null)

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

    useEffect(() => {
        const makeRequest = async () => {
            const { data } = await axios.get('http://localhost:5000/api/checkout/request-key');

            setStripePromise(loadStripe(data.clientPK))
        }

        makeRequest();

    }, [])

    useEffect(() => {
        const makeRequest = async () => {
            const { data } = await axios.post('http://localhost:5000/api/checkout/create-payment-intent', {}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setClientSecret(data.clientSecret)
        }

        makeRequest();

    }, [])


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
                
                        { stripePromise && clientSecret && (
                            <Elements stripe={stripePromise} options={{ clientSecret }}>
                                <CheckoutForm />
                            </Elements>  
                        )}
                </div>
            
        </div>
    )
}

export default Cart;