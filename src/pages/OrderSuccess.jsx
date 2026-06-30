import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "../styles/orderSuccess.css";

function OrderSuccess() {

  const orderId =
    "TZ" + Math.floor(Math.random() * 1000000);

  return (

    <section className="order-success">

      <div className="success-card">

        <FaCheckCircle className="success-icon"/>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with TechZone.
        </p>

        <div className="order-details">

          <h3>Order ID</h3>

          <span>{orderId}</span>

          <h3>Estimated Delivery</h3>

          <span>3 - 5 Business Days</span>

        </div>

        <Link
          to="/shop"
          className="continue-shopping"
        >
          Continue Shopping
        </Link>

      </div>

    </section>

  );

}

export default OrderSuccess;