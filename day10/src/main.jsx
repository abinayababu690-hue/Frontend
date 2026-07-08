import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Cart from "./Cart.jsx";
import Wishlist from "./Wishlist.jsx";
import Checkout from "./Checkout.jsx";
import Payment from "./Payment.jsx";
import OrderConfirmed from "./OrderConfirmed.jsx";
import Orders from "./Orders.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<App />} />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Wishlist */}
        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Payment */}
        <Route
          path="/payment"
          element={<Payment />}
        />

        {/* Order Confirmed */}
        <Route
          path="/order-confirmed"
          element={<OrderConfirmed />}
        />

        {/* Order History */}
        <Route
          path="/orders"
          element={<Orders />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);