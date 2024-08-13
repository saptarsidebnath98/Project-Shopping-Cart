import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext'

const CartPage = () => {

    const cart =  useContext(cartContext);

    //duplicating for not affecting the value
    const [CART, setCART] = useState([]);

    useEffect(()=> {
        setCART(cart.cartItems)
    }, [cart.cartItems])

    
    //total Amount Calculation
    const totalAmount = CART
    .map((item) => (item.price * 82) * item.quantity)
    .reduce((total, currVal) => total + Number(currVal), 0)
    .toFixed(2);

    //Increase Item quantity func
    const handleIncrease = (unqId) => {
        const newCart = CART.map((newCartItem) => {
            return newCartItem.unqId === unqId ? {...newCartItem, quantity: newCartItem.quantity + 1} : newCartItem
        });
        setCART(newCart);
    }

    //Decrease Item quantity func
    const handleDecrease = (unqId) => {
        const newCart = CART.map((newCartItem) => {
            return newCartItem.unqId === unqId ? {...newCartItem, quantity: newCartItem.quantity > 0 ? newCartItem.quantity - 1 : 0} : newCartItem
        }).filter(item => item.quantity !== 0);
        setCART(newCart);
    }
        
  return (
    <div className='container cart-container'>
        {CART?.map((item)=>
        <div key={item.id} className='cart-page-items'>
            <div className="cart-page-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-page-items-infos">
                <span>{item.title.length>20 ? item.title.slice(0, 20)+ "..." : item.title}</span> 
                <button onClick={() => handleDecrease(item.unqId)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.unqId)}>+</button>
                <span>₹{((item.price * 82)* item.quantity).toFixed(2)}</span>
            </div>
        </div>)}
        <p>
        {totalAmount == 0.00 ? "No items in Cart" : "Total ₹" + totalAmount}
        </p>
        <button>Check Out</button>
    </div>
  )
}

export default CartPage
