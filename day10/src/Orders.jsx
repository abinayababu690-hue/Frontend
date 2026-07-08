import React from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff8fb",
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
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>No Orders Yet</h2>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              background: "#ff4f81",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {orders.map((order, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "20px",
                marginBottom: "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ color: "#ff4f81" }}>
                🆔 Order ID : {order.id}
              </h2>

              <p>📅 Date : {order.date}</p>

              <p style={{ color: "green" }}>
                ✅ {order.status}
              </p>

              <hr style={{ margin: "15px 0" }} />

              {order.items.map((product) => (
                <div
                  key={product.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={
                      Array.isArray(product.images)
                        ? product.images[0]
                        : product.image
                    }
                    alt={product.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                    }}
                  />

                  <div>
                    <h3>{product.name}</h3>

                    <p>{product.category}</p>

                    <h4 style={{ color: "#ff4f81" }}>
                      {product.price}
                    </h4>
                  </div>
                </div>
              ))}

              <hr />

              <h3
                style={{
                  textAlign: "right",
                  color: "#27ae60",
                }}
              >
                Total : ₹{order.total}
              </h3>
            </div>
          ))}

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 25px",
                background: "#ff4f81",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ⬅ Back Home
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Orders;
