import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
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
                            <p>Sofas</p>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img2"></div>
                            {/* <img src="./assets/images/armchair.jpg" alt="armchair" /> */}
                            <p>Armchairs</p>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img3"></div>
                            {/* <img src="../assets/images/bundles.jpg" alt="bundles" /> */}
                            <p>Bundles</p>
                        </div>
                    </Link>
                    <Link to='/store'>
                        <div onClick={ handleMenuClose }>
                            <div className="image img4"></div>
                            {/* <img src="../assets/images/accessories.jpg" alt="accessories" /> */}
                            <p>Accessories</p>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
  )
}

export default BurgerMenu