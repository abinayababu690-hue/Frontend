import { useNavigate } from "react-router-dom";

function OrderConfirmed() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#fff8fb",
      }}
    >
      <h1 style={{ color: "#27ae60", fontSize: "50px" }}>
        🎉 Order Confirmed!
      </h1>

      <p style={{ fontSize: "22px" }}>
        Thank you for shopping with HYPEN RADIANCE 💖
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
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
  );
}

export default OrderConfirmed;

 