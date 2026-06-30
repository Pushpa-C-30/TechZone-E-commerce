import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

import "../styles/shop.css";


function Shop(){

const {addToCart}=useCart();
const {addToWishlist}=useWishlist();


return(

<div className="shop">


<h1 className="shop-title">
Explore Our Premium TechZone Collection
</h1>



<div className="products-grid">


{

products.map((product)=>(


<div className="product-card" key={product.id}>


<button
className="wishlist-btn"
onClick={()=>addToWishlist(product)}
>

<FaHeart/>

</button>



<Link 
to={`/product/${product.id}`}
className="product-link"
>


<img
src={product.image}
alt={product.name}
className="product-image"
/>


<h3>
{product.name}
</h3>


<p className="price">
₹{product.price}
</p>


</Link>




<div className="product-actions">


<Link
to={`/product/${product.id}`}
className="view-btn"
>
View
</Link>



<button
className="cart-btn"
onClick={()=>addToCart(product)}
>

<FaShoppingCart/>
Cart

</button>



</div>



</div>



))

}



</div>


</div>


)

}


export default Shop;