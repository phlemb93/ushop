import { useIsOpenContext } from '../utilities/contexts/isOpenContext';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useProductsContext } from '../utilities/contexts/productsContext';



function BurgerMenu() {

const { isMenuOpen, handleMenuClose } = useIsOpenContext();
const { setNewCat } = useProductsContext();

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
                    <Link to='/store' onClick={() => setNewCat('')}>
                        <div onClick={ handleMenuClose }>
                            <div className="image img1"></div>
                            <p>All</p>
                        </div>
                    </Link>
                    <Link to='/store' onClick={() => setNewCat('sofa')}>
                        <div onClick={ handleMenuClose }>
                            <div className="image img2"></div>
                            <p>Sofas</p>
                        </div>
                    </Link>
                    <Link to='/store' onClick={() => setNewCat('armchair')}>
                        <div onClick={ handleMenuClose }>
                            <div className="image img3"></div>
                            <p>Armchairs</p>
                        </div>
                    </Link>
                    <Link to='/store' onClick={() => setNewCat('bundles')}>
                        <div onClick={ handleMenuClose }>
                            <div className="image img4"></div>
                            <p>Bundles</p>
                        </div>
                    </Link>
                    <Link to='/store' onClick={() => setNewCat('accessories')}>
                        <div onClick={ handleMenuClose }>
                            <div className="image img5"></div>
                            <p>Accessories</p>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
  )
}

export default BurgerMenu