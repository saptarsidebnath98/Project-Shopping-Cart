import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
});

export default function CartContextProvider ({children}){

    const [cartItems, setCartItems] = useState([]);

    function handleAddItems (item) {
        setCartItems((prevItems)=> [...prevItems, {...item, quantity: 1, unqId: crypto.randomUUID()}]);

        console.log(cartItems);
    }


    return <cartContext.Provider value={{cartItems, handleAddItems}}>
        {children}
    </cartContext.Provider>

}
