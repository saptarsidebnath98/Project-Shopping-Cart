import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const CartPage = () => {

    const cart =  useContext(cartContext);
    console.log(cart.totalItems)
  return (
    <div className='container cart-container'>
        {cart.totalItems.map((item)=>
        <div key={item.id} className='cart-page-items'>
            <div className="cart-page-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-page-items-infos">
                <span>{item.title.length>20 ? item.title.slice(0, 20)+ "..." : item.title}</span> 
                <span>{item.price}</span>
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
            </div>
        </div>)}
      Total = {cart.totalAmount}
    </div>
  )
}

export default CartPage
