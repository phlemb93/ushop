import { useContext, createContext, useState } from 'react';


type valuesType = {
    isMenuOpen: boolean,
    isCartOpen: boolean,
    handleMenuOpen: () => void
    handleMenuClose: () => void
    handleCartOpen: () => void
    handleCartClose: () => void

}
type isOpenProviderProps = {
    children: React.ReactNode
}
const IsOpenContext = createContext({} as valuesType);

//
export const useIsOpenContext = () => {
    return useContext(IsOpenContext);
}

export const IsOpenProvider = ({ children }: isOpenProviderProps) => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isCartOpen, setIsCartOpen] = useState(false);

const handleMenuOpen = () => {
    setIsMenuOpen(true);
    console.log('menu is OPEN')
}
const handleMenuClose = () => {
    setIsMenuOpen(false);
    console.log('menu is CLOSE')
}
const handleCartOpen = () => {
    setIsCartOpen(true);
    console.log('cart is open')

}
const handleCartClose = () => {
    setIsCartOpen(false);
    console.log('cart is close')
}

return (

    <IsOpenContext.Provider value={{isMenuOpen, isCartOpen, handleMenuOpen, handleMenuClose, handleCartOpen, handleCartClose}}>

        { children }

    </IsOpenContext.Provider>

)
}
