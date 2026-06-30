import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

import "../styles/wishlist.css";

function Wishlist() {

  const {
    wishlistItems,
    removeFromWishlist
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <section className="empty-wishlist">

        <FaHeart className="empty-icon" />

        <h1>Your Wishlist is Empty</h1>

        <p>
          Save your favourite products here.
        </p>

        <Link
          to="/shop"
          className="shop-btn"
        >
          Explore Products
        </Link>

      </section>
    );
  }

  return (

    <section className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      <div className="wishlist-grid">

        {wishlistItems.map((product) => (

          <div
            className="wishlist-card"
            key={product.id}
          >

            <Link
              to={`/product/${product.id}`}
            >

              <img
                src={product.image}
                alt={product.name}
              />

            </Link>

            <h2>{product.name}</h2>

            <p>{product.category}</p>

            <h3>
              ₹{product.price.toLocaleString()}
            </h3>

            <div className="wishlist-buttons">

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >

                <FaShoppingCart />

                Add To Cart

              </button>

              <button
                className="remove-btn"
                onClick={() =>
                  removeFromWishlist(product.id)
                }
              >

                <FaTrash />

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Wishlist;