import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart } from "./Components/Cart/Cart";
import { Contacts } from "./Components/Contacts/Contacts";
import { About } from "./Components/About/About";
import { Catalog } from "./Components/Catalog/Catalog";
import { Home } from "./Components/Home/Home";

import { useAuth0 } from "@auth0/auth0-react";
import Stripe from "./Components/Stripe/StripeContainer";
import { GoTopButton } from "./Components/Button/GoTopButton";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h4>Loading...</h4>;

  return (
    <Router>
      <div>
        <GoTopButton />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Stripe />} />
      </Routes>
    </Router>
  );
}

export default App;
