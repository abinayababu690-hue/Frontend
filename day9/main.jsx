import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";
import OrderConfirmed from "./OrderConfirmed.jsx"; 
import Orders from "./Orders";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/confirmed" element={<OrderConfirmed />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);