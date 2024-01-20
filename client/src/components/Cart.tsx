import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import { CartItem, useAppSelector } from '../utilities/types/types'
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import currencyFormatter from '../utilities/currencyFormatter';
import { useDispatch } from 'react-redux';
import { clearCart } from '../data/cartSlice';



function Cart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isCartOpen, handleCartClose } = useIsOpenContext();
    const { cartItems } = useAppSelector(state => state.cart);

    const total = cartItems.reduce((sum:number, item:CartItem) => {
        return sum += item.price * item.quantity;
    }, 0);

    const handleShopAll = () => {
        navigate('/store');
        handleCartClose();
    }

    const handleClick = () => {
        navigate('/checkout', { state: { total }})
        handleCartClose();
        dispatch({type: clearCart})
    }


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
                        onClick={handleClick}
                        className="btn" 
                        disabled={total <= 0}
                        style={{
                            display: 'block',
                            backgroundColor: total > 0 ? '#481449' : 'gray',
                            cursor: total > 0 ? 'pointer' : 'not-allowed',
                            }}
                        >
                        <LockOutlinedIcon />
                        <p>Secure Checkout</p>
                    </button>
                </div>
            
        </div>
    )
}

export default Cart;