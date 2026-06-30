import React from "react";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/products.css";


function Product({ product }) {

  return (

    <div className="product-card">


      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />


      <h2>{product.name}</h2>


      <p className="category">
        {product.category}
      </p>



      <div className="rating">

        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>

      </div>



      <div className="price-box">

        <span className="price">
          ₹{product.price}
        </span>

        <span className="old-price">
          ₹{product.oldPrice}
        </span>

      </div>



      <div className="product-actions">


        <Link to={`/product/${product.id}`}>

        <button className="view-btn">

          View

        </button>

        </Link>



        <button className="cart-btn">

          <FaShoppingCart/>

        </button>




        <button className="wishlist-btn">

          <FaHeart/>

        </button>



      </div>


    </div>

  );

}


export default Product;