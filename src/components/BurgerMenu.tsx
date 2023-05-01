import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function BurgerMenu() {
  return (
        <div className="burger-menu">
            <div className="close-btn">
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