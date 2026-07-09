import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 0;

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [coupon, setCoupon] = useState("");

  const [discount, setDiscount] = useState(0);

  const [address, setAddress] = useState(
    "Abinaya Babu\nChennai - 600001"
  );

  const finalAmount = amount - discount;
  const applyCoupon = () => {
  if (coupon === "WELCOME10") {
    setDiscount(amount * 0.1);
    alert("🎉 10% Discount Applied");
  } else if (coupon === "SAVE50") {
    setDiscount(50);
    alert("🎉 ₹50 Discount Applied");
  } else {
    alert("❌ Invalid Coupon");
  }
};

const handlePayment = () => {
  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const newOrder = {
    id: Date.now(),
    products: cartItems,
    amount: finalAmount.toFixed(2),
    payment: paymentMethod,
    address,
    date: new Date().toLocaleDateString(),
    status: "Confirmed",
  };

  const oldOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  localStorage.setItem(
    "orders",
    JSON.stringify([...oldOrders, newOrder])
  );

  localStorage.removeItem("cart");

  alert("🎉 Payment Successful");

  navigate("/order-confirmed");
};
return (
  <div
    style={{
      minHeight: "100vh",
      background: "#fff5f8",
      padding: "40px",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        color: "#ff4f81",
        marginBottom: "30px",
      }}
    >
      💳 Secure Payment
    </h1>

    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
      }}
    ></div>
    {/* Payment Details */}

<div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  }}
>
  <h2 style={{ color: "#ff4f81" }}>
    💳 Payment Details
  </h2>

  <h3>📍 Delivery Address</h3>

  <textarea
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    style={{
      width: "100%",
      height: "90px",
      padding: "12px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      marginBottom: "20px",
      boxSizing: "border-box",
    }}
  />

  <div style={{ marginBottom: "20px" }}>
    <button
      onClick={() => setPaymentMethod("card")}
      style={{
        padding: "12px",
        marginRight: "10px",
        border: "none",
        borderRadius: "10px",
        background:
          paymentMethod === "card"
            ? "#ff4f81"
            : "#eee",
        color:
          paymentMethod === "card"
            ? "white"
            : "black",
        cursor: "pointer",
      }}
    >
      💳 Card
    </button>

    <button
      onClick={() => setPaymentMethod("upi")}
      style={{
        padding: "12px",
        marginRight: "10px",
        border: "none",
        borderRadius: "10px",
        background:
          paymentMethod === "upi"
            ? "#ff4f81"
            : "#eee",
        color:
          paymentMethod === "upi"
            ? "white"
            : "black",
        cursor: "pointer",
      }}
    >
      📱 UPI
    </button>

    <button
      onClick={() => setPaymentMethod("cod")}
      style={{
        padding: "12px",
        border: "none",
        borderRadius: "10px",
        background:
          paymentMethod === "cod"
            ? "#ff4f81"
            : "#eee",
        color:
          paymentMethod === "cod"
            ? "white"
            : "black",
        cursor: "pointer",
      }}
    >
      💵 Cash on Delivery
    </button>
  </div>

  {paymentMethod === "card" && (
    <>
      <input
        placeholder="Card Holder Name"
        style={inputStyle}
      />

      <input
        placeholder="Card Number"
        style={inputStyle}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          placeholder="Expiry Date"
          style={inputStyle}
        />

        <input
          placeholder="CVV"
          style={inputStyle}
        />
      </div>
    </>
  )}

  {paymentMethod === "upi" && (
    <input
      placeholder="Enter UPI ID"
      style={inputStyle}
    />
  )}

  {paymentMethod === "cod" && (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        background: "#fff0f5",
        borderRadius: "10px",
      }}
    >
      💵 Cash will be collected at delivery.
    </div>
  )}

  <h3 style={{ marginTop: "25px" }}>
    🎁 Apply Coupon
  </h3>

  <input
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
    placeholder="Enter Coupon Code"
    style={inputStyle}
  />

  <button
    onClick={applyCoupon}
    style={{
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      background: "#ff4f81",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    Apply Coupon
  </button>
    <button
    onClick={handlePayment}
    style={{
      width: "100%",
      padding: "15px",
      marginTop: "25px",
      background: "#27ae60",
      color: "white",
      border: "none",
      borderRadius: "12px",
      fontSize: "18px",
      cursor: "pointer",
    }}
  >
    Pay ₹{finalAmount.toFixed(2)}
  </button>
</div>

{/* Order Summary */}

<div
  style={{
    background: "white",
    padding: "30px",
    borderRadius: "20px",
    height: "fit-content",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  }}
>
  <h2 style={{ color: "#ff4f81" }}>
    🧾 Order Summary
  </h2>

  <p>
    <b>Total Amount</b>
  </p>

  <h2 style={{ color: "#27ae60" }}>
    ₹{amount.toFixed(2)}
  </h2>

  <hr />

  <p>
    <b>Discount</b>
  </p>

  <h3 style={{ color: "#e74c3c" }}>
    - ₹{discount.toFixed(2)}
  </h3>

  <hr />

  <p>
    <b>Grand Total</b>
  </p>

  <h1 style={{ color: "#27ae60" }}>
    ₹{finalAmount.toFixed(2)}
  </h1>

  <hr />

  <p>✔ Secure Payment</p>
  <p>✔ Fast Delivery</p>
  <p>✔ Easy Returns</p>
  <p>✔ 100% Genuine Products</p>
</div>
    </div>
  
);
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default Payment;