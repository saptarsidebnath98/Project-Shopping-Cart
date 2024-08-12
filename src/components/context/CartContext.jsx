import { Children, createContext, useState } from "react";

export const cartContext = createContext({
    totalAmount: 0, 
    handleAddItems : null,
});

export default function CartContextProvider ({children}){

    const [totalItems, setTotalItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleAddItems = (item) => {
        setTotalItems((prevItems)=> [...prevItems, item])
    }

    return <cartContext.Provider value={{totalAmount, handleAddItems}}>
        {children}
    </cartContext.Provider>

}
