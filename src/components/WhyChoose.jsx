import React from "react";
import "../styles/whychoose.css";

import {
  FaShippingFast,
  FaLock,
  FaUndoAlt,
  FaHeadset,
} from "react-icons/fa";

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="section-title">
        <h2>Why Choose TechZone?</h2>
        <p>
          We provide the best shopping experience with quality products and
          excellent customer service.
        </p>
      </div>

      <div className="why-grid">

        <div className="why-card">
          <FaShippingFast className="why-icon" />
          <h3>Free Shipping</h3>
          <p>Free delivery on all orders above ₹999.</p>
        </div>

        <div className="why-card">
          <FaLock className="why-icon" />
          <h3>Secure Payment</h3>
          <p>100% secure and trusted payment gateway.</p>
        </div>

        <div className="why-card">
          <FaUndoAlt className="why-icon" />
          <h3>Easy Returns</h3>
          <p>7-day hassle-free return and replacement.</p>
        </div>

        <div className="why-card">
          <FaHeadset className="why-icon" />
          <h3>24/7 Support</h3>
          <p>Friendly customer support available anytime.</p>
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;