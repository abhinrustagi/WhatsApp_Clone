import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";

function Register() {
  const history = useHistory();

  const [inputText, changeText] = useState({
    mobile: "",
    password: "",
    name: "",
    email: "",
    password2: "",
    gender: "",
  });

  const [formErrors, changeFormError] = useState([]);

  const handleChange = (e) => {
    changeText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/users/register", inputText);
    if (response.data.errors) {
      changeFormError(response.data.errors);
      console.log(formErrors);
    } else {
      history.push("/chat-menu");
    }
  };

  return (
    <div className="register">
      <Link to="/" className="logo_link">
        <Logo />
      </Link>
      <div className="form_errors">
        {formErrors.map((error) => (
          <p className="error">{error}</p>
        ))}
      </div>
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
