import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
});

export default function CartContextProvider ({children}){

    const [cartItems, setCartItems] = useState([]);

    function handleAddItems (item) {
        setCartItems((prevItems)=> [...prevItems, {...item, quantity: 1, unqId: crypto.randomUUID()}]);

        console.log(cartItems);
    }

    function handleUpdatedQuantity(unqId, quantity){
        setCartItems((prevItems) => prevItems
                .map(item => item.unqId === unqId ? { ...item, quantity: quantity } : item)
                .filter(item => item.quantity > 0)
        );
    }

    const count = cartItems.map((item) => item.quantity).reduce((tot, curr) => tot + curr, 0)
    

    return <cartContext.Provider value={{cartItems, handleAddItems,  handleUpdatedQuantity, count}}>
        {children}
    </cartContext.Provider>

}
