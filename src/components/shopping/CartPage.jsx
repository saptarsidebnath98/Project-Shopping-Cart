import { useContext } from 'react'
import { cartContext } from '../context/CartContext'

const CartPage = () => {

    const cart =  useContext(cartContext)
  return (
    <div>
      Total = {cart.totalAmount}
    </div>
  )
}

export default CartPage
