import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "./axios";
import { useHistory } from "react-router-dom";
import Logo from "./Logo";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [inputText, changeText] = useState({ mobile: null, password: "" });

  const [{ user }, dispatch] = useStateValue();

  const handleChange = (e) => {
    changeText({ ...inputText, [e.target.name]: e.target.value });
  };

  const [formErrors, changeFormError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeFormError([]);
    const response = await axios.post("/api/users/login", inputText);
    if (response.data.errors) {
      changeFormError(response.data.errors);
      console.log(formErrors);
    } else {
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decoded = jwt_decode(token);

      dispatch({ type: "SET_USER", user: decoded });
      history.push("/chat-menu");
    }
  };

  return (
    <div className="login">
      <Link to="/" className="logo_link">
        <Logo />
      </Link>
      <div className="form_errors">
        {formErrors.map((error) => (
          <p className="error">{error}</p>
        ))}
      </div>
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
