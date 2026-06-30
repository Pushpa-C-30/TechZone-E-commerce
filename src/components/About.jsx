import React from "react";
import {
FaShippingFast,
FaShieldAlt,
FaHeadset,
FaUndo
} from "react-icons/fa";

import "../styles/about.css";

function About(){

return(

<section id="about" className="about">

<h2>Why Choose TechZone?</h2>

<div className="about-grid">

<div className="about-card">

<FaShippingFast/>

<h3>Free Shipping</h3>

<p>Fast delivery across India.</p>

</div>

<div className="about-card">

<FaShieldAlt/>

<h3>Secure Payments</h3>

<p>100% safe online payment.</p>

</div>

<div className="about-card">

<FaUndo/>

<h3>Easy Returns</h3>

<p>7-day replacement guarantee.</p>

</div>

<div className="about-card">

<FaHeadset/>

<h3>24/7 Support</h3>

<p>Dedicated customer service.</p>

</div>

</div>

</section>

)

}

export default About;