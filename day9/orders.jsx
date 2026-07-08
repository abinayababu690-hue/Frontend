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
        📦 Order History
      </h1>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <h2>No Orders Yet 😔</h2>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 25px",
              background: "#ff4f81",
              color: "#fff",
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
                borderRadius: "20px",
                padding: "20px",
                marginBottom: "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,.1)",
              }}
            >
              <h2 style={{ color: "#ff4f81" }}>
                🆔 Order ID : {order.id}
              </h2>

              <p>
                📅 Date : {order.date}
              </p>

              <p style={{ color: "green" }}>
                ✅ {order.status}
              </p>

              <hr />

              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={
                      item.images
                        ? item.images[0]
                        : item.image
                    }
                    alt={item.name}
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "contain",
                    }}
                  />

                  <div>
                    <h3>{item.name}</h3>

                    <p>{item.category}</p>

                    <h3
                      style={{
                        color: "#ff4f81",
                      }}
                    >
                      {item.price}
                    </h3>
                  </div>
                </div>
              ))}

              <hr />

              <h2
                style={{
                  textAlign: "right",
                  color: "#27ae60",
                }}
              >
                Total : ₹{order.total}
              </h2>
            </div>
          ))}

          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 25px",
                background: "#ff4f81",
                color: "#fff",
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