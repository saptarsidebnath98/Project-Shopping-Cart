import { Link, useParams } from "react-router-dom"
import LinkButton from "../../LinkButton"
import { useContext} from "react";
import { cartContext } from "../../context/CartContext";
import useFetchData from "../../Custom hook/useFetchData";

const ProductInfo = () => {

    const { id } = useParams();
    const cart =  useContext(cartContext);
    
    //fetch data with dynamic id
    const url = `https://fakestoreapi.com/products/${id}`;
    const {data, loading, error} = useFetchData({url});

    if(loading) return <div>Loading...</div>
    if(error) return <div>{error.message || "Something went wrong"}</div>
    
    const {image, title, description, category, price, rating} = data;
    

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
                <img src={image} alt={id} />
            </div>
            <div className="product-details-div">
                <div className="product-details-items">Title <span className="p-d-i-infos">{title}</span></div>
                <div className="product-details-items">Category <span className="p-d-i-infos">{category}</span></div>
                <div className="product-details-items">Description <span className="p-d-i-infos">{description}</span></div>
                <div className="product-details-items">Rating <span className="p-d-i-infos">{rating.rate}/5</span></div>
                <div className="product-details-items">Price <span className="p-d-i-infos">{cart.formatToINR(price * 82)}</span></div>
                <button className="addToCart">Add to Cart</button>
                <p>(Go to cart to increase/ decrease item numbers)</p>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo
