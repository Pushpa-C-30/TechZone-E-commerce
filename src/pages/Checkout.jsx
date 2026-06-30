import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/checkout.css";
import { useNavigate } from "react-router-dom";
function Checkout() {

  const {
cartItems,
totalPrice,
clearCart
}=useCart();

const navigate=useNavigate();
const placeOrder=()=>{

if(cartItems.length===0){

alert("Your cart is empty!");

return;

}

clearCart();

navigate("/order-success");

};
  return (

    <section className="checkout">

      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="customer">

          <h2>Shipping Details</h2>

          <input placeholder="Full Name" />
          <input placeholder="Phone Number" />
          <input placeholder="Email" />
          <textarea placeholder="Address"></textarea>

          <button
onClick={placeOrder}
>

Place Order

</button>

        </div>

        <div className="summary">

          <h2>Order Summary</h2>

          {cartItems.map(item=>(

            <div key={item.id}>

              <span>

                {item.name}

              </span>

              <span>

                ₹{(item.price*item.quantity).toLocaleString()}

              </span>

            </div>

          ))}

          <hr/>

          <div className="total">

            <strong>Total</strong>

            <strong>

              ₹{totalPrice.toLocaleString()}

            </strong>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Checkout;