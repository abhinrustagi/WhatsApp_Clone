import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Home() {
  return (
    <div className="Home">
      <Link to="/" className="logo_link">
        <Logo />
      </Link>
      <div className="button_stack">
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
