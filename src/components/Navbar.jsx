import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "../styles/navbar.css";

function Navbar() {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    alert("Logged Out Successfully!");
    window.location.reload();
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        TechZone
      </Link>

      {/* Navigation */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories" onClick={() => setMenuOpen(false)}>
            Categories
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
        </li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <NavLink to="/wishlist" className="icon">
          <FaHeart />
          {wishlistItems.length > 0 && (
            <span>{wishlistItems.length}</span>
          )}
        </NavLink>

        <NavLink to="/cart" className="icon">
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span>{cartItems.length}</span>
          )}
        </NavLink>

        {user ? (
          <div className="user-section">
            <FaUser className="icon user-icon" />

            <span className="username">
              {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="icon">
            <FaUser />
          </NavLink>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;