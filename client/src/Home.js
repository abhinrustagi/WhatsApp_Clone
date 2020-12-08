import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
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
