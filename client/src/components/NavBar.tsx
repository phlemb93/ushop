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


function NavBar() {

const { handleMenuOpen, handleCartOpen, isProfileOpen, handleProfileToggle, handleProfileClose } = useIsOpenContext();
const { state, userLogout } = useUserContext();
const { user } = state;


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
        const firstElement =  e.target;
        const secondElement = e.target.parentElement ;
        const thirdElement = e.target.parentElement.parentElement;

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
                    onClick={ handleProfileClick }
                        >

                        <PersonOutlineOutlinedIcon 
                        className="profile-icon" 
                        style={{fontSize: 40, cursor: 'pointer', color: user ? '#00968E' : '#393939'}} />
                

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
                                    style={{color: '#00968E'}}
                                    />
                                    <p>Settings</p>
                                </div>

                                <div className="icon" onClick={handleLogout}>
                                    <LogoutOutlinedIcon
                                    style={{color: '#00968E'}}
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
                    <span style={{fontSize: 11}} className="number">
                        10
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
                <a href="">Sofas</a>
                <a href="">Armchairs</a>
                <a href="">Bundles</a>
                <a href="">Accessories</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar