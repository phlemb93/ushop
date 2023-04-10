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
                        <img src="./assets/images/sofa.jpg" alt="" />
                        <a>Sofas</a>
                    </div>
                    <div>
                        <img src="./assets/images/armchair.jpg" alt="" />
                        <a>Armchairs</a>
                    </div>
                    <div>
                        <img src="./assets/images/bundles.jpg" alt="" />
                        <a>Bundles</a>
                    </div>
                    <div>
                        <img src="./assets/images/accessories.jpg" alt="" />
                        <a>Accessories</a>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default BurgerMenu