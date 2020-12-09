import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "./axios";

function Register() {
  const [inputText, changeText] = useState({
    mobile: "",
    password: "",
    name: "",
    email: "",
    password2: "",
  });

  const handleChange = (e) => {
    changeText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);
    const response = await axios.post("/api/users/register", inputText);
    console.log(response);
  };

  return (
    <div className="register">
      <Link to="/" className="logo_link">
        <div className="logo_box">
          <img
            src="https://saurabhsawant.in/wp-content/uploads/2018/05/latest-clipart-for-whatsapp-10.png"
            alt="..."
            className="logo"
          />
          <h1>WhatsApp Messenger</h1>
        </div>
      </Link>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChange}
            required
            autoFocus
          />
          <label>Name</label>
        </div>
        <div className="input_group">
          <input
            type="text"
            name="mobile"
            id=""
            onChange={handleChange}
            required
          />
          <label>Mobile Number</label>
        </div>
        <div className="input_group">
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            required
          />
          <label>Email Address</label>
        </div>
        <div className="input_group">
          <input
            type="password"
            name="password"
            id=""
            required
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <div className="input_group">
          <input
            type="password"
            name="password2"
            id=""
            required
            onChange={handleChange}
          />
          <label>Confirm Password</label>
        </div>
        <button className="form_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
