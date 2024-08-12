import useFetchData from "../Custom hook/useFetchData";
import LinkButton from "../LinkButton";
import Card from "./Card";
import ShimmerShoppingPage from "../shimmer effect/ShimmerShoppingPage";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ShoppingPage = () => {
  // data fetching process
  const url = "https://fakestoreapi.com/products";
  const {data, loading, error} = useFetchData({url});

  // using cart context
  const cart =  useContext(cartContext);

  // console.log(data? data[0] : "no data");

  if(loading) return <ShimmerShoppingPage/>
  if(error) return <div>{error}</div>

  return (
    <section className="shopping">
    <div className="container shopping-container">
      <div className="back-cart-div">
        <LinkButton path="/home" label="back" type="smaller"/>
          <Link to="/cart">
          <button className="cartBtn-div">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>{cart.totalItems.length}</p>
          </button>
          </Link>
      </div>
      <div className="shopping-cards-container">
        {data.map((item)=> 
        <Card 
        key={item.id} 
        id={item.id} 
        image={item.image} 
        title={item.title} 
        category={item.category} 
        rate={item.rating.rate} 
        price={item.price}
        onClick={()=> cart.handleAddItems(item)}/>)}
      </div>
    </div>
    </section>
  )
}

export default ShoppingPage
