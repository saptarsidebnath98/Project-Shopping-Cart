import { useContext } from "react"
import Button from "../Button"
import { cartContext } from "../context/CartContext"

const BillPage = () => {
    const cart = useContext(cartContext);
    const {count, totalAmount, formatToINR} = cart;

    //total Bill
    const shippingFee = count>3 ? 0 : count*30
    const allTotalBill = parseFloat(totalAmount) + shippingFee + (totalAmount) * 0.12

  return (
    <div className="container bill-container">
    <Button label="back" type="smaller" action={()=>history.back()}/>
        <div className="bill-div">
        <h3>Order Summery</h3>
        <p className="bill-div-Items"><span className="bill-div-items-points">Items:</span> {count}</p>
        <p className="bill-div-Items"><span className="bill-div-items-points">Subtotal Amount:</span> {formatToINR(totalAmount)}</p>
        <p className="bill-div-Items"><span className="bill-div-items-points">Shipping fee:</span> {formatToINR(shippingFee)}</p>
        <p className="bill-div-Items"><span className="bill-div-items-points">GST:</span> 12%</p>
         <p className="bill-div-Items" ><span className="bill-div-items-points">Total Amount:</span><span id="bill-total-Amount">{formatToINR(allTotalBill)}</span></p>
        </div>
    </div>
  )
}

export default BillPage
