import { useIsOpenContext } from '../utilities/contexts/useIsOpenContext';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function BurgerMenu() {

const { isMenuOpen, handleMenuClose } = useIsOpenContext();

  return (
        <div className="burger-menu" style={{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>
            <div className="close-btn">
                <CloseIcon  onClick={ handleMenuClose } style={{ fontSize:'38px', cursor:'pointer'}}/>
            </div>
            <div className="content">
                <div className="title">
                    <p>Shop by type</p>
                    <div className="icon">
                        <KeyboardArrowDownIcon style={{ fontSize:'34px'}} />
                    </div>
                </div>
                <div className="items">
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img1"></div>
                            {/* <img src='../assets/images/img1.jpg' alt="sofa" /> */}
                            <a>Sofas</a>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img2"></div>
                            {/* <img src="./assets/images/armchair.jpg" alt="armchair" /> */}
                            <a>Armchairs</a>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img3"></div>
                            {/* <img src="../assets/images/bundles.jpg" alt="bundles" /> */}
                            <a>Bundles</a>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img4"></div>
                            {/* <img src="../assets/images/accessories.jpg" alt="accessories" /> */}
                            <a>Accessories</a>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
  )
}

export default BurgerMenu