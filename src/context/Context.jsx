import React, { createContext, useContext, useState } from 'react'

const ShopContext = createContext()

export default function ContextProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }



    return (
        <ShopContext.Provider value={{toggleModal, isOpen}}>
            {children}
        </ShopContext.Provider>
    )
}

export function useShop() {
    return useContext(ShopContext)
}
