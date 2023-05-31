import { Link } from 'react-router-dom';
import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { useUserContext } from '../utilities/contexts/userContext';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



function NavBar() {

const { handleMenuOpen, handleCartOpen} = useIsOpenContext();
const { state } = useUserContext();
const { user } = state;

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
                        <Link to={user ? '/profile' : '/login'}>
                            <PersonOutlineOutlinedIcon className="profile-icon" style={{fontSize: 40}} />
                        </Link>
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