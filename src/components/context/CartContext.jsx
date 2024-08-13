import { createContext, useEffect, useState } from "react";

export const cartContext = createContext({
});

export default function CartContextProvider ({children}){

    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    function handleAddItems (item) {
        setCartItems((prevItems)=> [...prevItems, {...item, quantity: 1}]);

        console.log(cartItems);
    }

    useEffect(()=> {
        const newAmount = cartItems
        .map((item) => (item.price * 82) * item.quantity)
        .reduce((total, currVal) => total + Number(currVal), 0)
        .toFixed(2)

        setTotalAmount(newAmount);
    },[cartItems])


    return <cartContext.Provider value={{cartItems, handleAddItems, totalAmount}}>
        {children}
    </cartContext.Provider>

}
