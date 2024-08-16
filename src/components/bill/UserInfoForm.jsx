import { useContext } from "react";
import { userContext } from "../context/UserContext";

const UserInfoForm = ({setShowModal}) => {

    const {setUserData} = useContext(userContext)

    const handleSubmit = (e) => {
      e.preventDefault();
      const data = getFormData(e.target);
      setShowModal(true);
      setUserData(data);
    }

    // console.log(userData);

    //get user data function
    function getFormData(form){
      const formData = new FormData(form);
      const data = {};
      for(const [key, value] of formData.entries()){
        data[key] = value;
      }
      return data;
    }

  return (
      <form className="user-Info-form" onSubmit={handleSubmit}>
            <h3>Customer details:</h3>
            <label htmlFor="fName">First Name:</label>
            <input type="text" id="fName" name="fName" required/>
            <label htmlFor="lName">Last Name:</label>
            <input type="text" id="lName" name="lName" required/>
            <label htmlFor="emailId">Email:</label>
            <input type="email" id="emailId" name="emailId" required/>
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" required></textarea>
            <button>Check out & place order</button>
        </form>
  )
}

export default UserInfoForm
