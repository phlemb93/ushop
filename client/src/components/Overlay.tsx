import { useIsOpenContext } from "../utilities/contexts/isOpenContext"


function Overlay() {

    const { isMenuOpen, isCartOpen, handleMenuClose,handleCartClose } = useIsOpenContext();

    const handleClick = () => {

        handleMenuClose();
        handleCartClose();
    }

  return (
    <div className='overlay' 
    style={{
        transform: !(isMenuOpen || isCartOpen) ? 'translateX(-100%)' : 'translateX(0%)'}}
    onClick={handleClick}>
    </div>
  )
}

export default Overlay