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

  const handleSubmit= () => {
    setShowModal(false);
    setCartItems([]);
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <Link to="/home">
          <button onClick={handleSubmit}>X</button>
        </Link>
        <p>Order Placed successfully</p>
        <h3>{`${fName} ${lName}`}</h3>
        <p>Thank You for your <span>One Stop Shopping</span></p>
      </div>
    </div>
  )
}

export default Modal
