import { useContext, createContext, useState } from 'react';


type valuesType = {
    isMenuOpen: boolean,
    isCartOpen: boolean,
    isFilterOpen: boolean,
    handleMenuOpen: () => void
    handleMenuClose: () => void
    handleCartOpen: () => void
    handleCartClose: () => void
    handleFilterOpen: () => void
    handleFilterClose: () => void

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
const [isFilterOpen, setIsFilterOpen] = useState(false);

const handleMenuOpen = () => {
    setIsMenuOpen(true);
}
const handleMenuClose = () => {
    setIsMenuOpen(false);
}
const handleCartOpen = () => {
    setIsCartOpen(true);
}
const handleCartClose = () => {
    setIsCartOpen(false);
}
const handleFilterClose = () => {
    setIsFilterOpen(false);
}
const handleFilterOpen = () => {
    setIsFilterOpen(true);
}

return (

    <IsOpenContext.Provider value={{isMenuOpen, isCartOpen, isFilterOpen, handleMenuOpen, handleMenuClose, handleCartOpen, handleCartClose, handleFilterOpen, handleFilterClose}}>

        { children }

    </IsOpenContext.Provider>

)
}
