import { useIsOpenContext } from "../utilities/contexts/useIsOpenContext"


function Overlay() {

    const { isMenuOpen, isCartOpen } = useIsOpenContext();

  return (
    <div className='overlay' 
    style={{
        transform: !(isMenuOpen || isCartOpen) ? 'translateX(-100%)' : 'translateX(0%)'
}}></div>
  )
}

export default Overlay