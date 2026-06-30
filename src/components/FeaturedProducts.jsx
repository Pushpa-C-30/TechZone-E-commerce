import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "../styles/products.css";

function FeaturedProducts() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <section className="featured-products">

      <div className="section-title">
        <h2>Featured Products</h2>
        <p>
          Discover our latest premium gadgets at unbeatable prices.
        </p>
      </div>

      <div className="product-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <span className="sale-tag">
              SALE
            </span>

            <button
              className="wishlist-btn"
              onClick={() =>
                addToWishlist(product)
              }
            >
              <FaHeart />
            </button>

            <Link
              to={`/product/${product.id}`}
              className="product-link"
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p className="category">
                {product.category}
              </p>

              <div className="rating">
                {[...Array(product.rating)].map(
                  (_, i) => (
                    <FaStar key={i} />
                  )
                )}
              </div>

              <div className="price">

                <span className="new-price">
                  ₹{product.price.toLocaleString()}
                </span>

                <span className="old-price">
                  ₹{product.oldPrice.toLocaleString()}
                </span>

              </div>

            <div className="shop-buttons">

  <button
    className="wishlist-btn"
    onClick={() => addToWishlist(product)}
  >
    <FaHeart />
  </button>

  <button
    className="cart-btn"
    onClick={() => addToCart(product)}
  >
    <FaShoppingCart /> Add To Cart
  </button>

</div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;