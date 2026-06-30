import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/categories.css";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Laptop",
      image: "https://cdn-icons-png.flaticon.com/512/679/679922.png"
    },
    {
      name: "Mobile",
      image: "https://cdn-icons-png.flaticon.com/512/545/545245.png"
    },
    {
      name: "Headphones",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
    },
    {
      name: "Camera",
      image: "https://cdn-icons-png.flaticon.com/512/685/685655.png"
    },
    {
      name: "Watch",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png"
    },
    {
      name: "Accessories",
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006555.png"
    }
  ];

  return (
    <section id="categories" className="categories">

      <h2>Shop By Categories</h2>

      <div className="category-grid">

        {categories.map((category) => (

          <div
            key={category.name}
            className="category-card"
            onClick={() =>
              navigate(`/shop?category=${category.name}`)
            }
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <h3>{category.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;