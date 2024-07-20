import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Login } from "../LogIn/Login";
import { Logout } from "../Logout/Logout";
import logo from "../../../src/logo.png";

import Hamburger from "hamburger-react";

export const MenuButton = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={`header_nav ${isOpen ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={`${logo}`} className="header_logo" alt="logo" />
          </Link>
        </div>
        <Link to="/" className="nav_link">
          Home
        </Link>
        <Link to="/catalog" className="nav_link">
          Catalog
        </Link>
        <Link to="/about" className="nav_link">
          About
        </Link>
        <Link to="/contacts" className="nav_link">
          Contacts
        </Link>
        <Login />
        <Logout />
        <div>
          <Link to="/cart" className="nav_bag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
            </svg>
            <span className="bag_quantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </Link>
        </div>
      </nav>

      <div
        className="menu_button"
        onClick={() => {
          toggleClass(true);
        }}
      >
        <button>
          <Hamburger color="#966106" />
        </button>
      </div>
    </div>
  );
};
