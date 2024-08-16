import { useContext } from "react"
import { userContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";


const Modal = ({totalAmount, setShowModal}) => {

  //extracting data from UserContext
  const {userData} = useContext(userContext);
  const {fName, lName} = userData;

  //extracting data from CartContext
  const {setCartItems} = useContext(cartContext);

  //handling modal display
  const handleSubmit= () => {
    setShowModal(false);
    setCartItems([]);
  }

  function capitalizeStr (str){
    const newStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
  }

  return (
    <div id="myModal" className="modal" onClick={handleSubmit}>
      <div className="modal-content">
        <Link to="/home">
          <button onClick={handleSubmit}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </Link>
        <div className="thank-you-img-div">
          <img src="images/illustration-thank-you.svg" alt="thank you image"/>
        </div>
        {/* <img src="images/icon-star.svg" alt="" /> */}
        <p className="order-place-div modal-text">
          <i className="fa-solid fa-truck-fast"></i>
          <span>order placed successfully</span>
          <i className="fa-solid fa-truck-fast"></i>
        </p>
        <h3>{capitalizeStr(fName)+ " " + capitalizeStr(lName)}</h3>
        <p  className="modal-text"
        id="thank-you-text">Thank You for your </p>
        <p className="modal-text"
        id="one-stop-text">One <span id="stop">Stop</span> Shopping</p>
      </div>
    </div>
  )
}

export default Modal
