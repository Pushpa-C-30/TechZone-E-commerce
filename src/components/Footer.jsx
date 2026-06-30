import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>TechZone</h2>
          <p>
            Your trusted destination for premium electronics and accessories.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Shop</p>
          <p>Wishlist</p>
          <p>Cart</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>support@techzone.com</p>
          <p>+91 0786543254</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 TechZone. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;