import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  // Calculate Total
  const subtotal = cartItems.reduce((total, item) => {
    return (
      total +
      Number(item.price.replace("₹", "").replace(",", ""))
    );
  }, 0);

  const delivery = cartItems.length > 0 ? 50 : 0;
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst + delivery;

  return (
    <div
      style={{
        padding: "40px",
        background: "#fff8fb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff4f81",
          marginBottom: "30px",
        }}
      >
        🛒 My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>Your Cart is Empty</h2>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#ff4f81",
              color: "white",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "#fff",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "20px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={
                  Array.isArray(item.images)
                    ? item.images[0]
                    : item.image
                }
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />

              <div style={{ flex: 1 }}>
                <h2>{item.name}</h2>

                <p>{item.category}</p>

                <h3 style={{ color: "#ff4f81" }}>
                  {item.price}
                </h3>

                <button
                  onClick={() => {
                    const updatedCart = cartItems.filter(
                      (product) => product.id !== item.id
                    );

                    localStorage.setItem(
                      "cart",
                      JSON.stringify(updatedCart)
                    );

                    window.location.reload();
                  }}
                  style={{
                    background: "#ff4f81",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}

          {/* Order Summary */}

          <div
            style={{
              background: "#fff",
              padding: "25px",
              borderRadius: "20px",
              boxShadow:
                "0 5px 15px rgba(0,0,0,0.1)",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                color: "#ff4f81",
                marginBottom: "20px",
              }}
            >
              🧾 Order Summary
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <span>GST (18%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#27ae60",
              }}
            >
              <span>Grand Total</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              background: "#ff4f81",
              color: "white",
              cursor: "pointer",
              marginRight: "15px",
            }}
          >
            ⬅ Back to Home
          </button>

          <button
  onClick={() => {
    navigate("/checkout", {
      state: {
        cart: cartItems,
      },
    });
  }}
  style={{
    padding: "12px 25px",
    border: "none",
    borderRadius: "10px",
    background: "#27ae60",
    color: "white",
    cursor: "pointer",
  }}
>
  ✅ Checkout
</button>
        </>
      )}
    </div>
  );
}

export default Cart;