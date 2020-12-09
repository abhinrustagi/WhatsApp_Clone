import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "./axios";

function Login() {
  const [inputText, changeText] = useState({ mobile: null, password: "" });

  const handleChange = (e) => {
    changeText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputText);
    const response = await axios.post("/api/users/login", inputText);
    console.log(response.data);
  };

  return (
    <div className="login">
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

      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="input_group">
          <input
            type="text"
            name="mobile"
            id=""
            onChange={handleChange}
            required
            autoFocus
          />
          <label>Mobile Number</label>
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
        <button className="form_button" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default Login;
