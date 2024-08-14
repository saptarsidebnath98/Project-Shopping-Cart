import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext'
import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';

const CartPage = () => {

    const cart =  useContext(cartContext);

    //duplicating for not affecting the value
    const [CART, setCART] = useState([]);

    useEffect(()=> {
        setCART(cart.cartItems)
    }, [cart.cartItems])

    
    //total Amount Calculation
    const totalAmount = cart.formatToINR(CART
    .map((item) => (item.price * 82) * item.quantity)
    .reduce((total, currVal) => total + Number(currVal), 0));

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
        <LinkButton path="/shopping" label={CART.length === 0 ?`Start Shopping` : `Keep Shopping`} type="smaller"/>
          <Link to="/cart">
          <button className="cartBtn-div">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>{cart.count}</p>
          </button>
          </Link>
      </div>
      {/* total and checkout section */}
      <div>
        {totalAmount == "₹0.00" ? 
        <div className="empty-cart">
            <i className="fa-solid fa-cart-arrow-down"></i>
            <span>No items in Cart</span>
        </div>
         : <div className="subTotal-checkOut">
            <p><span>Subtotal</span> {cart.formatToINR(cart.totalAmount)}</p>
            <LinkButton 
            path="/billing" 
            label={`Proceed with ${cart.count} items`} 
            type='pay-smaller'/>
         </div>
         }
        </div>
        
        {/* list items section  */}
        <div className="cart-page-items-container">
        {CART?.map((item)=>
        <div key={item.unqId} className='cart-page-items'>
            <div className="cart-page-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-page-items-infos">
                <div className="cart-page-items-infos-upper">
                <span>{item.title.length>15 ? item.title.slice(0, 15)+ "..." : item.title}</span> 
                <button className="cart-item-delete-btn" 
                onClick={()=> cart.handleDelete(item.unqId)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                </div>
               
                <div className="cart-page-items-infos-lower">
                    <div className='cart-page-items-infos-lower-btnDiv'>
                        <button className='cartBtns'
                        onClick={() => handleDecrease(item.unqId)}>-</button>
                        <p>{item.quantity}</p>
                        <button 
                        className='cartBtns'
                        onClick={() => handleIncrease(item.unqId)}>+</button>
                    </div>
                        <p>{cart.formatToINR(item.price * 82* item.quantity)}</p>
                </div>
            </div>
        </div>)}
        </div>
    </div>
  )
}

export default CartPage
