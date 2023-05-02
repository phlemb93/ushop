import { useContext, createContext, useState } from 'react';


type valuesType = {
    isOpen: boolean,
    handleOpen: () => void
    handleClose: () => void
    handleToggle: () => void

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

const [isOpen, setIsOpen] = useState(false);

const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
}
const handleOpen = () => {
    setIsOpen(true);
    console.log('its open')
    console.log(isOpen)

}
const handleClose = () => {
    setIsOpen(false);
    console.log('its close')
    console.log(isOpen)
}

return (

    <IsOpenContext.Provider value={{isOpen, handleOpen, handleClose, handleToggle}}>

        { children }

    </IsOpenContext.Provider>

)
}
