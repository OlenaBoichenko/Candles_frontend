import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useState } from "react";

import { Cart } from "./Components/Cart/Cart";
import { Contacts } from "./Components/Contacts/Contacts";
import { About } from "./Components/About/About";
import { Catalog } from "./Components/Catalog/Catalog";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/LogIn/Login";
import { Logout } from "./Components/Logout/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Account from "./Components/Profile/Account";

function App() {
  const [isOpen, setOpen] = useState();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { isLoading } = useAuth0();
  if (isLoading) return <h4>Loading...</h4>;

  return (
    <Router>
      <ToastContainer />
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
      <button className="header_menu-button" onClick={() => setOpen(!isOpen)}>
        CLICK
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
