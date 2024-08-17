import { useContext } from "react"
import { userContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { createPortal } from "react-dom";


const Modal = ({setShowModal}) => {
  //using navigate
  const navigate = useNavigate();

  //extracting data from UserContext
  const {userData} = useContext(userContext);
  const {fName, lName} = userData;

  //extracting data from CartContext
  const {setCartItems} = useContext(cartContext);

  //handling show modal
  const handleSubmit= () => {
    setShowModal(false);
    setCartItems([]);
    navigate("/home");
  }

  //handle outside click of modal
  const handleModalClick = (e) => {
    if(e.target.id === "myModal"){
      handleSubmit();
    }
  }

  function capitalizeStr (str){
    const newStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return newStr;
  }

  return createPortal(
    <div id="myModal" className="modal" onClick={handleModalClick}>
      <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
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
        <h3 id="modal-userName">{capitalizeStr(fName)+ " " + capitalizeStr(lName)}</h3>
        <p  className="modal-text"
        id="thank-you-text">Thank You for your </p>
        <p className="modal-text"
        id="one-stop-text">One <span id="stop">Stop</span> Shopping</p>
      </div>
    </div>,
     document.getElementById('modal-root')
  )
}

export default Modal
