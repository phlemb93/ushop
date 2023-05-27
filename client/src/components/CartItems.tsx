import { Item } from '../utilities/types/types'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import currencyFormatter from '../utilities/currencyFormatter'


const CartItems = ({ ...item }: Item ) => {

  return (
    <div className="cart-item" key={item.id}>
        <div className='image' >
            <img style={{width: '80px', height: '60px' }} src={item.images[0]} alt="" />
        </div>
        <div className="content">
            <div className="top">
                <p>{item.title}</p>
                <span className='remove-item'>
                    <DeleteOutlinedIcon />
                </span>
            </div>

            <div className="center">
                <small>{item.brief} - {item.color}</small>
            </div>

            <div className="bottom">
                <div className="price">
                    <p>{currencyFormatter(item.price)}</p>
                </div>
                <div className="buttons">
                    <div className="remove-btn">
                        <RemoveOutlinedIcon style={{fontSize: '18px'}} />
                    </div>
                    <div className="output">1</div>
                    <div className="add-btn">
                        <AddOutlinedIcon style={{fontSize: '18px'}} />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}


export default CartItems;