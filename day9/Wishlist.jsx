import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  const wishlist =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#fff0f6,#ffe4ef)",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#ff4f81",
            marginBottom: "40px",
            fontSize: "42px",
          }}
        >
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div
            style={{
              background: "white",
              padding: "50px",
              borderRadius: "25px",
              textAlign: "center",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <h2>No Products In Wishlist 😔</h2>
            <p>Add your favourite products</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
  "repeat(auto-fit,minmax(220px,250px))",
justifyContent: "center",
              gap: "30px",
            }}
          >
            {wishlist.map((item) => (
              <div
                key={item.id}
                style={{
  background: "white",
  borderRadius: "25px",
  overflow: "hidden",
  maxWidth: "250px",
  margin: "auto",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain",
                    background: "#fff",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h3>{item.name}</h3>

                  <p
                    style={{
                      color: "#777",
                      margin: "10px 0",
                    }}
                  >
                    {item.category}
                  </p>

                  <h2
                    style={{
                      color: "#ff4f81",
                    }}
                  >
                    {item.price}
                  </h2>
                  <button
  onClick={() => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== item.id
    );

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
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
    width: "100%",
  }}
>
  ❌ Remove
</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              background: "#ff4f81",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            ⬅ Back Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;