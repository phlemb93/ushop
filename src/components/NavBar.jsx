import { MdOutlineShoppingBag } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { maleSelected, femaleSelected, allSelected } from '../features/genderSlice'
// import { useState } from 'react'

export const NavBar = () => {

    const dispatch = useDispatch()

    // const [fClicked, setFClicked] = useState(false)
    // const [mClicked, setMClicked] = useState(false)

const totalItemsAdded = useSelector(store => store.cart.amount)



return (

        <div className="navbar">
            <Link to="/">
                <div className="logo">USHOP</div>
            </Link>
            
            <div className="menu">
                <div className="left">
                
                <Link to="/products">
                    <h4 onClick={() => {dispatch(allSelected())}}>All</h4>
                </Link>

                <Link to="/products">
                    <h4 onClick={() => {dispatch(maleSelected())}}>Male</h4>
                </Link>

                <Link to="/products">
                    <h4 onClick={() => dispatch(femaleSelected())}>Female</h4>
                </Link>

                </div>
                <div className="right">
                    <div className="cart">
                        <MdOutlineShoppingBag className="cart-icon" />
                        <span className="amount">{totalItemsAdded}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
