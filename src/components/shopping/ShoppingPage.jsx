import useFetchData from "../Custom hook/useFetchData";
import LinkButton from "../LinkButton";

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
          <div className="cart-div">
          <i className="fa-solid fa-cart-shopping"></i>
          <p>0</p>
          </div>
        
      </div>
    </div>
    </section>
  )
}

export default ShoppingPage
