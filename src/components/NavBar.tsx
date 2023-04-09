import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function NavBar() {
  return (
    <div className="navbar">

        <div className="upper">
        <div className="left">
            <div className="menu">
                <MenuOutlinedIcon style={{fontSize: 40}} />
            </div>
            <div className="logo">
                <h2>USHOP</h2>
            </div>  
            <div className="search">
                <input type="text" placeholder="Find your Snug"/>
                <SearchOutlinedIcon className="search-icon" style={{fontSize: 28}} />
            </div>
        </div>

        <div className="right">
            <div className="profile">
                <PersonOutlineOutlinedIcon style={{fontSize: 40}} />
            </div>
            <div className="cart">
                <div className="icon">
                    <LocalMallOutlinedIcon style={{fontSize: 28}}/>
                </div>
                <span style={{fontSize: 11}} className="number">
                    10
                </span>
            </div>
        </div>
        </div>


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