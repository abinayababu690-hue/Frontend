import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = location.state?.cart || [];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price.replace(/[₹,]/g, "")),
    0
  );

  const delivery = cartItems.length > 0 ? 50 : 0;
  const gst = subtotal * 0.18;

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const [payment, setPayment] = useState("Cash on Delivery");

  const grandTotal = subtotal + delivery + gst - discount;

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "WELCOME10") {
      setDiscount(subtotal * 0.1);
      alert("🎉 10% Discount Applied");
    } else if (coupon.toUpperCase() === "SAVE50") {
      setDiscount(50);
      alert("🎉 ₹50 Discount Applied");
    } else {
      alert("❌ Invalid Coupon");
    }
  };

  const placeOrder = () => {
    if (!address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    if (!mobile.trim()) {
      alert("Please enter your mobile number.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter a valid 10-digit mobile number.");
      return;
    }

    const order = {
      id: "HY" + Date.now(),
      products: cartItems,
      subtotal,
      delivery,
      gst,
      discount,
      total: grandTotal,
      address,
      mobile,
      payment,
      status: "Confirmed",
      date: new Date().toLocaleDateString(),
      deliveryDate: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...oldOrders, order])
    );

    localStorage.removeItem("cart");

    navigate("/order-confirmed", {
      state: { order },
    });
  };

  return (
    <div className="checkout-page">
      <h1>💳 Secure Checkout</h1>

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-left">

          <h2>📍 Delivery Address</h2>

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <textarea
            placeholder="Enter Full Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <h2>💳 Payment Method</h2>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </select>

          <h2>🎁 Apply Coupon</h2>

          <input
            type="text"
            placeholder="WELCOME10 / SAVE50"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />

          <button
            className="coupon-btn"
            onClick={applyCoupon}
          >
            Apply Coupon
          </button>

        </div>

        {/* RIGHT */}

        <div className="checkout-right">

          <h2>🧾 Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                className="checkout-item"
                key={item.id}
              >
                <img
                  src={
                    Array.isArray(item.images)
                      ? item.images[0]
                      : item.image
                  }
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <p>{item.category}</p>
                  <b>{item.price}</b>
                </div>
              </div>
            ))
          )}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>₹{delivery}</span>
          </div>

          <div className="summary-row">
            <span>GST (18%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span>- ₹{discount.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Grand Total</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            🚀 Place Order
          </button>

        </div>

      </div>
    </div>
  );
}

export default Checkout;