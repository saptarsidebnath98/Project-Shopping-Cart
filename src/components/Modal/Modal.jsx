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
    <div id="myModal" className="modal">
      <div className="modal-content">
        <Link to="/home">
          <button onClick={handleSubmit}>X</button>
        </Link>
        <p>Order Placed successfully</p>
        <h3>{capitalizeStr(fName)+ " " + capitalizeStr(lName)}</h3>
        <p>Thank You for your <span>One Stop Shopping</span></p>
      </div>
    </div>
  )
}

export default Modal
