import { useContext, createContext, useState } from 'react';


type Value = {
    isMenuOpen: boolean
    isCartOpen: boolean
    isFilterOpen: boolean
    isProfileOpen: boolean
    handleMenuOpen: () => void
    handleMenuClose: () => void
    handleCartOpen: () => void
    handleCartClose: () => void
    handleFilterOpen: () => void
    handleFilterClose: () => void
    handleProfileClose: () => void
    handleProfileToggle: () => void
    handleProfileOpen: () => void
}
type isOpenProviderProps = {
    children: React.ReactNode
}
const IsOpenContext = createContext({} as Value);

//
export const useIsOpenContext = () => {
    return useContext(IsOpenContext);
}

export const IsOpenProvider = ({ children }: isOpenProviderProps) => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isCartOpen, setIsCartOpen] = useState(false);
const [isFilterOpen, setIsFilterOpen] = useState(false);
const [isProfileOpen, setIsProfileOpen] = useState(false);

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
const handleProfileClose = () => {
    setIsProfileOpen(false);
}
const handleProfileOpen = () => {
    setIsProfileOpen(true);
}
const handleProfileToggle = () => {
    setIsProfileOpen(prevState => !prevState);
}

return (

    <IsOpenContext.Provider value={{isMenuOpen, isCartOpen, isFilterOpen, isProfileOpen, handleMenuOpen, handleMenuClose, handleCartOpen, handleCartClose, handleFilterOpen, handleFilterClose, handleProfileToggle, handleProfileClose, handleProfileOpen}}>

        { children }

    </IsOpenContext.Provider>

)
}
