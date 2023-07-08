import { Link, useNavigate } from 'react-router-dom';
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { useUserContext } from '../utilities/contexts/userContext';
import { useEffect, useRef } from 'react';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { CartItem, useAppSelector } from '../utilities/types/types';
import { useProductsContext } from '../utilities/contexts/productsContext';


const primaryColor = '#481449';

function NavBar() {

const { handleMenuOpen, handleCartOpen, isProfileOpen, handleProfileToggle, handleProfileClose } = useIsOpenContext();
const { state, userLogout } = useUserContext();
const { user } = state;
const { setNewCat } = useProductsContext();

const { cartItems } = useAppSelector(state => state.cart)

const quantity = cartItems.reduce((total:number, item:CartItem) => {
    return total += item.quantity;
}, 0)

const navigate = useNavigate();
const divRef = useRef(null);

const handleProfileClick = () => {
    user ? handleProfileToggle() : navigate('/login')
}

const handleLogout = () => {
    userLogout(); 
    handleProfileClose();
    navigate('/login')
}
const handleProfile = () => {
    navigate('/profile'); 
    handleProfileClose();
}

useEffect(() => {
    document.addEventListener('click', (e) => {
        const targetElement = divRef.current;
        const firstElement =  e.target as HTMLElement;
        const secondElement = firstElement.parentElement as HTMLDivElement;
        const thirdElement = secondElement.parentElement;

        if(!(targetElement == firstElement || targetElement == secondElement || targetElement == thirdElement)) {
            handleProfileClose();
        } 
    })
}, [])

  return (
    <div className="navbar">

        <div className="upper">
            <div className="left">
                <div className="menu" onClick={ handleMenuOpen }>
                    <MenuOutlinedIcon style={{fontSize: 40}} />
                </div>
                <Link to='/'>
                    <div className="logo">
                        <h2>USHOP</h2>
                    </div> 
                </Link>
                <div className="search">
                    <input type="text" placeholder="Find your Snug"/>
                    <SearchOutlinedIcon className="search-icon" style={{fontSize: 28}} />
                </div>
            </div>

            <div className="right">
               
                <div 
                className="profile" 
                ref={divRef}   
                onClick={ handleProfileClick } >

                    <PersonOutlineOutlinedIcon 
                    className="profile-icon" 
                    style={{fontSize: 40, cursor: 'pointer', color: user ? primaryColor : '#393939'}} />
            
                    <div 
                    className="drop-down" 
                    style={{display: isProfileOpen ? 'block' : 'none'}}>
                        <div className="loggedin">

                            <div className="name">
                                <p>Hi, <span>{user?.firstName}</span></p>
                            </div>

                            <div className="divider"></div>

                            <div className="icon" onClick={handleProfile}>
                                <SettingsOutlinedIcon 
                                style={{color: primaryColor}}
                                />
                                <p>Settings</p>
                            </div>

                            <div className="icon" onClick={handleLogout}>
                                <LogoutOutlinedIcon
                                style={{color: primaryColor}}
                                />
                                <p>Logout</p>
                            </div>

                        </div>
                    </div>
                </div>
             
                
                <div className="cart" onClick={ handleCartOpen }>
                    <div className="icon">
                        <LocalMallOutlinedIcon style={{fontSize: 28}}/>
                    </div>
                    <small>Basket</small>
                    <span className="number">
                        { quantity }
                    </span>
                </div>
            </div>
        </div>

        <div className="divider"></div>

        <div className="lower">
            <div className="search">
                <input type="text" placeholder="Find your Snug"/>
                <SearchOutlinedIcon className="search-icon" style={{fontSize: 28}} />
            </div>
            <div className="items">
                <Link to="/store" onClick={() => setNewCat('')}>All</Link>
                <Link to="/store" onClick={() => setNewCat('sofa')}>Sofas</Link>
                <Link to="/store" onClick={() => setNewCat('armchair')}>Armchairs</Link>
                <Link to="/store" onClick={() => setNewCat('bundles')}>Bundles</Link>
                <Link to="/store" onClick={() => setNewCat('accessories')}>Accessories</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar