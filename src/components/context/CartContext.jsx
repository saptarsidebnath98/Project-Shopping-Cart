import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
});

export default function CartContextProvider ({children}){

    const [cartItems, setCartItems] = useState(()=> {
        //saving data with local storage
        const savedCartItems = localStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    //button onClick function to handle quantity
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

    //cart items changes with the quantity of items
    const count = cartItems.map((item) => item.quantity).reduce((tot, curr) => tot + curr, 0)
    

    return <cartContext.Provider value={{cartItems, handleAddItems,  handleUpdatedQuantity, count}}>
        {children}
    </cartContext.Provider>

}
