import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const CartPage = () => {

    const cart =  useContext(cartContext);
    console.log(cart.cartItems)
  return (
    <div className='container cart-container'>
        {cart.cartItems.map((item)=>
        <div key={item.id} className='cart-page-items'>
            <div className="cart-page-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-page-items-infos">
                <span>{item.title.length>20 ? item.title.slice(0, 20)+ "..." : item.title}</span> 
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
                <span>₹{(item.price * 82).toFixed(2)}</span>
            </div>
        </div>)}
        <p>
        {cart.totalAmount == 0.00 ? "No items in Cart" : "Total ₹" + cart.totalAmount}
        </p>
    </div>
  )
}

export default CartPage
