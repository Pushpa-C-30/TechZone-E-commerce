import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="tag">
           Electronics Store
        </span>

        <h1>
          Discover Amazing <br />
          Electronics
        </h1>

        <p>
          Shop the latest laptops, mobiles, headphones,
          accessories and premium gadgets at the best prices.
        </p>

        <div className="hero-buttons">

          <Link to="/shop" className="primary-btn">
            Shop Now
          </Link>

          <a href="#categories" className="secondary-btn">
            Explore Categories
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700"
          alt="Hero"
        />

      </div>

    </section>
  );
}

export default Hero;