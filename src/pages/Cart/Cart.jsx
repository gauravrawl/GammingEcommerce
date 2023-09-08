import  { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";


//toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CartItem } from "./CartItems";
import { useNavigate } from "react-router-dom";
 
import "./Cart.css";
import { prod } from "../../items";
const Cart = () => {
  
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const notify =()=>{
  

  toast(
   "checkout successful", {
    position: 'bottom-right',
    autoClose: 2000
 })
  }
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {prod.map((product) => {
          if (cartItems[product.id] !== 0) {
            // eslint-disable-next-line react/jsx-key
            return <CartItem item={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: Rs. {totalAmount}/- to pay </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button className="toast" onClick={notify}>checkout</button>
            
          
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      <ToastContainer />
    </div>
  );
};
export default Cart;







