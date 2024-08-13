import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext'
import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';
import Button from '../Button';

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
        const item = CART.find(item => item.unqId === unqId);
        if (item) {
            cart.handleUpdatedQuantity(unqId, item.quantity + 1);
        }
    };

    //Decrease Item quantity func
    const handleDecrease = (unqId) => {
        const item = CART.find(item => item.unqId === unqId);
        if (item) {
            cart.handleUpdatedQuantity(unqId, item.quantity - 1);
        }
    };
        
  return (
    <div className='container cart-container'>
        <div className="back-cart-div">
        <LinkButton path="/shopping" label="go shopping" type="smaller"/>
          <Link to="/cart">
          <button className="cartBtn-div">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>{cart.count}</p>
          </button>
          </Link>
      </div>
      {/* total and checkout section */}
      <p>
        {totalAmount == 0.00 ? 
        <div className="empty-cart">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span>No items in Cart</span>
        </div>
         : <div className="subTotal-checkOut">
            <p><span>Subtotal</span> ₹{totalAmount}</p>
            <Button 
            type='pay-smaller'
            label={`Proceed with ${cart.count} items`}></Button>
         </div>
         }
        </p>
        
        {/* list items section  */}
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

    </div>
  )
}

export default CartPage
