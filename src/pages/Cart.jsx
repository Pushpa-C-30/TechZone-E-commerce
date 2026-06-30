import React from "react";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

import "../styles/cart.css";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="empty-cart">

        <h1>Your Cart is Empty 🛒</h1>

        <p>
          Add your favorite gadgets to start shopping.
        </p>

        <Link to="/shop" className="continue-btn">
          Continue Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="cart-page">

      <h1>Shopping Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              className="cart-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="cart-info">

                <h2>{item.name}</h2>

                <p>{item.category}</p>

                <h3>
                  ₹{item.price.toLocaleString()}
                </h3>

              </div>

              <div className="quantity-box">

                <button
                  onClick={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    increaseQuantity(item.id)
                  }
                >
                  <FaPlus />
                </button>

              </div>

              <h2 className="subtotal">
                ₹
                {(
                  item.price * item.quantity
                ).toLocaleString()}
              </h2>

              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                <FaTrash />
              </button>

            </div>

          ))}

        </div>

        <div className="summary">

          <h2>Order Summary</h2>

          <div>
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div>
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div>
            <span>GST</span>
            <span>Included</span>
          </div>

          <hr />

          <div className="total">

            <span>Total</span>

            <span>
              ₹{totalPrice.toLocaleString()}
            </span>

          </div>

          <Link
            to="/checkout"
            className="checkout-btn"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/shop"
            className="shopping-btn"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Cart;