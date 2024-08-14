import { Link } from "react-router-dom"
import LinkButton from "../../LinkButton"
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const ProductInfo = () => {

    const cart =  useContext(cartContext);

  return (
    <div className="container">
        <div className="back-cart-div">
            <LinkButton path="/shopping" label="back" type="smaller"/>
            <Link to="/cart">
            <button className="cartBtn-div">
                <i className="fa-solid fa-cart-shopping"></i>
                <p>{cart.count}</p>
            </button>
            </Link>
      </div>
      <div className="product-container">
            <div className="product-img-div">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            </div>
            <div className="product-details-div">
                <div className="product-details-items">Title</div>
                <div className="product-details-items">Category</div>
                <div className="product-details-items">Rating</div>
                <div className="product-details-items">Price</div>
                <button>Add to Cart</button>
                <p>(Go to cart to increase/ decrease item numbers)</p>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo
