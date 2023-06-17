import { Item } from '../utilities/types/types'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import currencyFormatter from '../utilities/currencyFormatter'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrQuantity, removeProduct } from '../data/cartSlice';


const CartItems = ({ ...item }: Item ) => {

    const { products, quantity, total } = useSelector(state => state.cart)
    const dispatch = useDispatch();

  return (
    <div className="cart-item">
        <div className='image' >
            <img style={{width: '80px', height: '60px' }} src={item.images[0]} alt="" />
        </div>
        <div className="content">
            <div className="top">
                <p>{item.title}</p>
                <span className='remove-item' onClick={() => dispatch(removeProduct(item))}>
                    <DeleteOutlinedIcon />
                </span>
            </div>

            <div className="center">
                <small>{item.description} - {item.color}</small>
            </div>

            <div className="bottom">
                <div className="price">
                    <p>{currencyFormatter(item.price)}</p>
                </div>
                <div className="buttons">
                    <div className="remove-btn" onClick={() => dispatch(decrQuantity(item))}>
                        <RemoveOutlinedIcon style={{fontSize: '18px'}} />
                    </div>
                    <div className="output">{item.quantity}</div>
                    <div className="add-btn" onClick={() => dispatch(addToCart(item))}>
                        <AddOutlinedIcon style={{fontSize: '18px'}} />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}


export default CartItems;