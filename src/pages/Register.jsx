import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    alert("Registration Successful");

    setUser({
      name:"",
      email:"",
      password:""
    });
  };

  return (

    <section className="auth-page">

      <form className="auth-form" onSubmit={handleSubmit}>

        <h1>Create Account</h1>

        <input
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <button>
          Register
        </button>

        <p>

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </form>

    </section>

  );

}

export default Register;