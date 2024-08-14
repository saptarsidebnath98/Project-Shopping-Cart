import { useState } from "react"

const UserInfoForm = () => {
    const [details, setDetails] = useState();

  return (
      <form>
            <label htmlFor="">First Name:</label>
            <input type="text" />
            <label htmlFor="">Last Name:</label>
            <input type="text" />
            <label htmlFor="">Email:</label>
            <input type="email" />
            <label htmlFor="">Address:</label>
            <textarea name="" id=""></textarea>
        </form>
  )
}

export default UserInfoForm
