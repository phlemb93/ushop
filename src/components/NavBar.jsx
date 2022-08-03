import { MdOutlineShoppingBag } from 'react-icons/md'

export const NavBar = () => {

    return (
        <div className="navbar">
            <div className="logo">USHOP</div>
            
            <div className="menu">
                <div className="left">
                    <h4>Male</h4>
                    <h4>Female</h4>
                </div>
                <div className="right">
                    <div className="cart">
                        <MdOutlineShoppingBag className="cart-icon" />
                        <span className="amount">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
