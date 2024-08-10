import useFetchData from "../Custom hook/useFetchData";
import LinkButton from "../LinkButton";
import Card from "./Card";

const ShoppingPage = () => {
  const url = "https://fakestoreapi.com/products";
  const {data, loading, error} = useFetchData({url});

  console.log(data? data[0] : "no data");

  if(loading) return <div>Loading...</div>
  if(error) return <div>{error}</div>

  return (
    <section className="shopping">
    <div className="container shopping-container">
      <div className="back-cart-div">
        <LinkButton path="/home" label="back" type="smaller"/>
          <button className="cartBtn-div">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>0</p>
          </button>
      </div>
      <div className="shopping-cards-container">
        {data.map((item)=> 
        <Card key={item.id} id={item.id} image={item.image} title={item.title} category={item.category} rate={item.rate} price={item.price}/>)}
      </div>
    </div>
    </section>
  )
}

export default ShoppingPage
