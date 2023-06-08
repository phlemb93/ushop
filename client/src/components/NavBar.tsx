import { Link, useNavigate } from 'react-router-dom';
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { useUserContext } from '../utilities/contexts/userContext';
import { useState } from 'react';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


function NavBar() {

const { handleMenuOpen, handleCartOpen} = useIsOpenContext();
const { state, userLogout } = useUserContext();
const { user } = state;

const [toggle, setToggle] = useState<boolean>(false);

const navigate = useNavigate();

const handleProfileClick = () => {
    {user ? (
        setToggle(prevToggle => !prevToggle)
    ) : (
        navigate('/login')
    )}
}

const handleLogin = () => {
    navigate('/login'); 
    setToggle(false);
}
const handleLogout = () => {
    userLogout(); 
    setToggle(false);
}
const handleProfile = () => {
    navigate('/profile'); 
    setToggle(false);
}

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
               
                    <div className="profile">
                        <PersonOutlineOutlinedIcon 
                        className="profile-icon" 
                        style={{fontSize: 40, cursor: 'pointer', color: user ? '#393939' : '#00968E'}} 
                        onClick={handleProfileClick}
                        />

                        <div 
                        className="drop-down" 
                        style={{display: toggle ? 'block' : 'none'}}>
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