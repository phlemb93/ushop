import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge } from '@mui/material';


function Cart() {
  return (
        <div className="cart-container">
                <div className="top">
                    <p>Basket</p>
                    <div>
                        <ArrowBackIcon />
                        <p>Continue shopping</p>
                    </div>
                </div>
                <div className="center">
                    <Badge badgeContent={100} color="primary">
                        <LocalMallOutlinedIcon style={{fontSize:'80px'}} />
                    </Badge>
                    <p>Your cart is currently empty.</p>
                    <div>Shop All</div>
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