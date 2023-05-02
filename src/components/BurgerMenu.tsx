import { useIsOpenContext } from '../utilities/contexts/useIsOpenContext';

import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




function BurgerMenu() {

const { isOpen, handleClose } = useIsOpenContext();


  return (
        <div className="burger-menu" style={{ transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)'}}>
            <div className="close-btn" onClick={handleClose}>
                <CloseIcon style={{ fontSize:'38px', cursor:'pointer'}}/>
            </div>
            <div className="content">
                <div className="title">
                    <p>Shop by type</p>
                    <div className="icons">
                        <div className="up">
                            <KeyboardArrowUpIcon style={{ fontSize:'34px'}} />
                        </div>
                        <div className="down">
                            <KeyboardArrowDownIcon style={{ fontSize:'34px'}} />
                        </div>
                    </div>
                </div>
                <div className="items">
                    <div>
                        <div className="image img1"></div>
                        {/* <img src='../assets/images/img1.jpg' alt="sofa" /> */}
                        <a>Sofas</a>
                    </div>
                    <div>
                        <div className="image img2"></div>
                        {/* <img src="./assets/images/armchair.jpg" alt="armchair" /> */}
                        <a>Armchairs</a>
                    </div>
                    <div>
                        <div className="image img3"></div>
                        {/* <img src="../assets/images/bundles.jpg" alt="bundles" /> */}
                        <a>Bundles</a>
                    </div>
                    <div>
                        <div className="image img4"></div>
                        {/* <img src="../assets/images/accessories.jpg" alt="accessories" /> */}
                        <a>Accessories</a>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default BurgerMenu