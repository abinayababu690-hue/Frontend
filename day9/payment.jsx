import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();
  const location = useLocation();

  const amount = location.state?.amount || 0;

  const [paymentMethod, setPaymentMethod] = useState("card");


  const handlePayment = () => {


    const newOrder = {

      amount: amount.toFixed(2),

      date: new Date().toLocaleDateString(),

      status: "Confirmed"

    };



    const oldOrders =
      JSON.parse(localStorage.getItem("orders")) || [];



    localStorage.setItem(

      "orders",

      JSON.stringify([
        ...oldOrders,
        newOrder
      ])

    );



    alert("Payment Successful 🎉");



    localStorage.removeItem("cart");



    navigate("/order-confirmed");


  };



  return (

    <div

      style={{

        minHeight:"100vh",

        background:"#fff5f8",

        padding:"40px"

      }}

    >



      <h1

        style={{

          textAlign:"center",

          color:"#ff4f81",

          marginBottom:"30px"

        }}

      >

        💳 Secure Payment

      </h1>




      <div

        style={{

          maxWidth:"900px",

          margin:"auto",

          display:"grid",

          gridTemplateColumns:"1fr 1fr",

          gap:"30px"

        }}

      >




        {/* Payment Details */}



        <div

          style={{

            background:"white",

            padding:"30px",

            borderRadius:"20px",

            boxShadow:"0 5px 20px rgba(0,0,0,0.1)"

          }}

        >



          <h2

            style={{

              color:"#ff4f81"

            }}

          >

            Payment Details

          </h2>




          <div>


            <button

              onClick={() => setPaymentMethod("card")}

              style={{

                padding:"12px",

                marginRight:"10px",

                border:"none",

                borderRadius:"10px",

                background:

                paymentMethod==="card"

                ? "#ff4f81"

                : "#eee",

                color:

                paymentMethod==="card"

                ? "white"

                : "black",

                cursor:"pointer"

              }}

            >

              💳 Card

            </button>




            <button

              onClick={() => setPaymentMethod("upi")}

              style={{

                padding:"12px",

                border:"none",

                borderRadius:"10px",

                background:

                paymentMethod==="upi"

                ? "#ff4f81"

                : "#eee",

                color:

                paymentMethod==="upi"

                ? "white"

                : "black",

                cursor:"pointer"

              }}

            >

              📱 UPI

            </button>


          </div>





          {

            paymentMethod === "card" ?


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

                display:"flex",

                gap:"10px"

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


            :


            <input

              placeholder="Enter UPI ID"

              style={inputStyle}

            />


          }




          <button

            onClick={handlePayment}

            style={{

              width:"100%",

              padding:"15px",

              marginTop:"25px",

              background:"#27ae60",

              color:"white",

              border:"none",

              borderRadius:"12px",

              fontSize:"18px",

              cursor:"pointer"

            }}

          >

            Pay ₹{amount.toFixed(2)}

          </button>




        </div>







        {/* Order Summary */}




        <div

          style={{

            background:"white",

            padding:"30px",

            borderRadius:"20px",

            height:"fit-content",

            boxShadow:"0 5px 20px rgba(0,0,0,0.1)"

          }}

        >



          <h2

            style={{

              color:"#ff4f81"

            }}

          >

            🧾 Order Summary

          </h2>




          <h3>

            Total Amount

          </h3>




          <h1

            style={{

              color:"#27ae60"

            }}

          >

            ₹{amount.toFixed(2)}

          </h1>




          <p>✔ Secure Payment</p>

          <p>✔ Fast Delivery</p>

          <p>✔ Easy Returns</p>



        </div>




      </div>



    </div>

  );

}




const inputStyle = {


  width:"100%",

  padding:"14px",

  marginTop:"15px",

  borderRadius:"10px",

  border:"1px solid #ddd",

  fontSize:"15px",

  boxSizing:"border-box"


};



export default Payment;