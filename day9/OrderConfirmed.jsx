import React from "react";
import { useNavigate } from "react-router-dom";

function OrderConfirmed() {
  const navigate = useNavigate();

  // Random Order ID
  const orderId =
    "HY" + Math.floor(100000 + Math.random() * 900000);

  const today = new Date();

  const delivery = new Date();
  delivery.setDate(today.getDate() + 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#fff0f6,#ffe4ef)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "700px",
          background: "#fff",
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        {/* Success Animation */}

        <div
          style={{
            fontSize: "90px",
            animation: "pop 1s ease",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            color: "#27ae60",
            marginBottom: "10px",
          }}
        >
          Order Confirmed!
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
          }}
        >
          Thank you for shopping with
          <br />
          <b>HYPEN RADIANCE 💖</b>
        </p>

        <hr style={{ margin: "25px 0" }} />

        {/* Order Details */}

        <div
          style={{
            textAlign: "left",
            lineHeight: "2",
            fontSize: "18px",
          }}
        >
          <p>
            <b>🆔 Order ID :</b> {orderId}
          </p>

          <p>
            <b>📅 Order Date :</b>{" "}
            {today.toLocaleDateString()}
          </p>

          <p>
            <b>🚚 Expected Delivery :</b>{" "}
            {delivery.toLocaleDateString()}
          </p>

          <p>
            <b>💳 Payment Status :</b>

            <span
              style={{
                color: "#27ae60",
                fontWeight: "bold",
              }}
            >
              {" "}
              Paid Successfully
            </span>
          </p>

          <p>
            <b>💰 Payment Method :</b> UPI
          </p>

          <p>
            <b>📍 Shipping Address :</b>
            Chennai, Tamil Nadu
          </p>
        </div>

        <hr style={{ margin: "25px 0" }} />

        {/* Coupon */}

        <h3
          style={{
            color: "#ff4f81",
          }}
        >
          🎁 Congratulations!
        </h3>

        <p>Use Coupon Code</p>

        <h2
          style={{
            color: "#27ae60",
            letterSpacing: "2px",
          }}
        >
          WELCOME10
        </h2>

        <p>
          Get <b>10% OFF</b> on your next purchase.
        </p>

        <hr style={{ margin: "25px 0" }} />

        {/* Customer Support */}

        <h3 style={{ color: "#ff4f81" }}>
          📞 Customer Support
        </h3>

        <p>Email : support@hyphenradiance.com</p>

        <p>Phone : +91 9876543210</p>

        {/* Buttons */}

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => window.print()}
            style={{
              background: "#ff4f81",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🧾 Download Invoice
          </button>

          <button
            onClick={() => navigate("/orders")}
            style={{
              background: "#6c63ff",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            📦 View Orders
          </button>

          <button
            onClick={() => navigate("/")}
            style={{
              background: "#27ae60",
              color: "white",
              border: "none",
              padding: "12px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            🛍 Continue Shopping
          </button>
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2>⭐⭐⭐⭐⭐</h2>

          <p
            style={{
              color: "#777",
            }}
          >
            Thank you for choosing
            <br />
            <b>HYPEN RADIANCE ❤️</b>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pop{
          0%{
            transform:scale(0);
          }
          70%{
            transform:scale(1.2);
          }
          100%{
            transform:scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default OrderConfirmed;