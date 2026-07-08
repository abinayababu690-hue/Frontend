import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Wishlist() {

  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );


  const removeWishlist = (id) => {

    const updated = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };


  const addToCart = (product) => {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];


    const already = cart.some(
      (item)=>item.id === product.id
    );


    if(!already){

      cart.push(product);

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      alert("🛒 Added to Cart");

    }
    else{

      alert("Product already in Cart");

    }

  };



  return (

    <div
    style={{
      minHeight:"100vh",
      background:
      "linear-gradient(135deg,#fff5fa,#ffe1ed)",
      padding:"35px"
    }}
    >


    <div
    style={{
      maxWidth:"1150px",
      margin:"auto"
    }}
    >



    <h1
    style={{
      textAlign:"center",
      color:"#e91e63",
      fontSize:"36px",
      fontFamily:"serif",
      marginBottom:"35px"
    }}
    >

    ❤️ My Wishlist

    </h1>



    {
      wishlist.length === 0 ?


      (

      <div
      style={{
        background:"#fff",
        padding:"45px",
        borderRadius:"25px",
        textAlign:"center",
        boxShadow:
        "0 10px 25px rgba(0,0,0,0.08)"
      }}
      >

      <h2>
        Your Wishlist is Empty 😔
      </h2>

      <p>
        Save your favourite beauty products here ✨
      </p>

      </div>

      )


      :



      (

      <div
      style={{
        display:"grid",
        gridTemplateColumns:
        "repeat(auto-fit,minmax(240px,1fr))",
        gap:"25px"
      }}
      >



      {
        wishlist.map((item)=>(


        <div
        key={item.id}

        style={{
          background:"#fff",
          borderRadius:"22px",
          overflow:"hidden",
          boxShadow:
          "0 10px 25px rgba(0,0,0,0.12)",
          transition:"0.3s"
        }}


        onMouseEnter={(e)=>{
          e.currentTarget.style.transform=
          "translateY(-8px)";
        }}

        onMouseLeave={(e)=>{
          e.currentTarget.style.transform=
          "translateY(0)";
        }}

        >



        <img

        src={item.image}

        alt={item.name}

        style={{
          width:"100%",
          height:"210px",
          objectFit:"contain",
          padding:"15px"
        }}

        />



        <div
        style={{
          padding:"18px"
        }}
        >



        <h3
        style={{
          fontSize:"18px",
          color:"#333",
          marginBottom:"8px"
        }}
        >
          {item.name}
        </h3>



        <span
        style={{
          background:"#ffe4ef",
          color:"#e91e63",
          padding:"5px 12px",
          borderRadius:"20px",
          fontSize:"13px"
        }}
        >
          {item.category}
        </span>




        <h2
        style={{
          color:"#e91e63",
          margin:"15px 0"
        }}
        >
          {item.price}
        </h2>




        <button

        onClick={()=>addToCart(item)}

        style={{
          width:"100%",
          padding:"12px",
          border:"none",
          borderRadius:"12px",
          background:
          "linear-gradient(90deg,#ff4f81,#ff85a2)",
          color:"white",
          fontWeight:"600",
          cursor:"pointer",
          marginBottom:"10px"
        }}

        >

        🛒 Add To Cart

        </button>




        <button

        onClick={()=>removeWishlist(item.id)}

        style={{
          width:"100%",
          padding:"12px",
          border:"none",
          borderRadius:"12px",
          background:"#222",
          color:"white",
          fontWeight:"600",
          cursor:"pointer"
        }}

        >

        ❌ Remove

        </button>



        </div>


        </div>


        ))
      }



      </div>

      )

    }





    <div
    style={{
      textAlign:"center",
      marginTop:"40px"
    }}
    >

    <button

    onClick={()=>navigate("/")}

    style={{
      padding:"13px 35px",
      border:"none",
      borderRadius:"25px",
      background:"#e91e63",
      color:"white",
      fontSize:"16px",
      cursor:"pointer",
      fontWeight:"600"
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