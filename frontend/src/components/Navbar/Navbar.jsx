import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span>Ol' Boy's Soul Food</span>
      </Link>
      <div className="navbar-search">
        <input type="text" placeholder="search" />
      </div>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setActiveMenu("home")}
            className={`navbar-menu-item ${
              activeMenu === "home" ? "active" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setActiveMenu("menu")}
            className={`navbar-menu-item ${
              activeMenu === "menu" ? "active" : ""
            }`}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setActiveMenu("contact")}
            className={`navbar-menu-item ${
              activeMenu === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/cart" className="navbar-cart">
          <img src={assets.basket_icon} alt="Cart" />
          {getTotalCartAmount() > 0 && (
            <span className="navbar-cart-badge">{getTotalCartAmount()}</span>
          )}
        </Link>
        {token ? (
          <div className="navbar-profile">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="navbar-profile-icon"
            />
            <div className="navbar-profile-dropdown">
              <button
                className="navbar-profile-item"
                onClick={() => navigate("/myorders")}
              >
                Orders
              </button>
              <button className="navbar-profile-item" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button className="navbar-login" onClick={() => setShowLogin(true)}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
