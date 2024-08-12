import { createContext, useState } from "react";

export const cartContext = createContext({
});

export default function CartContextProvider ({children}){

    const [totalItems, setTotalItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    function handleAddItems (item) {
        setTotalItems((prevItems)=> [...prevItems, item])
        console.log(totalItems);
    }

    return <cartContext.Provider value={{totalItems, handleAddItems}}>
        {children}
    </cartContext.Provider>

}
