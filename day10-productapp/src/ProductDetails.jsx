import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const products = [
  {
  id: 1,
  name: "Vitamin Infused Face Wash",
  price: "₹349",
  category: "Cleanser",

  image:
    "https://letshyphen.com/cdn/shop/files/acne_cleanser.jpg?v=1737977652",

  images: [
    "https://letshyphen.com/cdn/shop/files/acne_cleanser.jpg?v=1737977652",

    "https://letshyphen.com/cdn/shop/files/07_cd8a3ee1-5363-4acd-a93e-e3f68b5cf8b5.jpg?v=1762496711&width=493",
    "https://letshyphen.com/cdn/shop/files/04_dcc4cb7d-c187-4ec9-9b8c-92a98b1c2c20.jpg?v=1762496711&width=493"
  ]
},
{ id: 2,
     name: "Golden Hour Glow Serum",
      price: "₹799", category: "Serum", 
      image: "https://letshyphen.com/cdn/shop/files/Card_1_f7a860ec-d844-487f-88f1-58f21b350ff1.jpg?v=1772784026", 

      images:[
        "https://letshyphen.com/cdn/shop/files/Card_5_4baa4b01-89e2-4b74-b7fb-58aa99a29f59.jpg?v=1772784187&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_8_64b6016d-388a-49fc-a088-26dcdc662661.jpg?v=1773665186&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_3_5fbd2ace-150c-4f5d-b9f8-af59136fd5a2.jpg?v=1772784187&width=493"
      ]
  },
  {
    id: 3,
    name: "Barrier Care Moisturizer",
    price: "₹599",
    category: "Moisturizer",
    image:
      "https://letshyphen.com/cdn/shop/files/1_7d11a26e-2bf3-4500-9c9f-9994589f4340.jpg?v=1743052254",
      images:[
        "https://letshyphen.com/cdn/shop/files/5_79e3b224-3512-4a18-8aa8-7b50ec4cce4e.jpg?v=1762496767&width=493",
        "https://letshyphen.com/cdn/shop/files/4_53f23536-f996-46f7-beef-b54f94ea0b71.jpg?v=1762496767&width=493",
        "https://letshyphen.com/cdn/shop/files/2_0df39b3b-2cef-4614-98e9-c150d9764199.jpg?v=1762496767&width=493"
      ]
  },
  {
    id: 4,
    name: "SPF 50 Sunscreen",
    price: "₹499",
    category: "Sunscreen",
    image:
      "https://letshyphen.com/cdn/shop/files/matte.jpg?v=1737978892",

      images:[
        "https://letshyphen.com/cdn/shop/files/Card_3_61d9273b-4d4d-4e47-a358-f024e449f02b.jpg?v=1762494767&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_6_e5b0944d-5588-470d-9974-f87bb9ea6a49.jpg?v=1762494767&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_8_dbe5b616-7b21-4090-b801-14bb19af3898.jpg?v=1762494767&width=493"
      ]
  },
  {
    id: 5,
    name: "Face Mask",
    price: "₹899",
    category: "Night Care",
    image:
      "https://letshyphen.com/cdn/shop/files/card1_88b32f94-0ae5-4927-a676-d5b09e9e7384.jpg?v=1745401100",

      images:[
        "https://letshyphen.com/cdn/shop/files/card5_868cfd48-fe18-48f7-a9a8-2d08b0e66b8b.jpg?v=1762496631&width=493",
        "https://letshyphen.com/cdn/shop/files/card_9_e5080652-6310-4ef8-b331-48976e8c10ba.jpg?v=1762496631&width=493",
        "https://letshyphen.com/cdn/shop/files/card7_93a924b8-8028-425e-bd9c-26dbeed276c2.jpg?v=1762496631&width=493",
      ]
  },
  {
    id: 6,
    name: "Hydrating Lip Balm",
    price: "₹299",
    category: "Lip Care",
    image:
      "https://letshyphen.com/cdn/shop/files/Card1_8c782068-b0d9-43c8-854f-c2d52a8ac54d.jpg?v=1752555270",

      images:[
       " https://letshyphen.com/cdn/shop/files/Card-4_58c73d30-11fd-4182-a928-5fc74f8724c9.jpg?v=1752555270&width=493",
       "https://letshyphen.com/cdn/shop/files/Card-6_d4b6d15f-39b6-40f0-b08a-dcfef7de208a.jpg?v=1752555270&width=493",
       "https://letshyphen.com/cdn/shop/files/Card-2_44835fe6-6a80-4da6-a438-8a531a5281b2.jpg?v=1752555270&width=493",
      ]
  },
    {
    id: 7,
    name: "Daily Dry-Skin Care Bundle",
    price: "₹849",
    category: "Bundle",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRqhb79XnxoYCncqcL6xVAa5HaOR6tNC23YaQqH8L2ygjYuIuaawKBj5_Kyd--w4bJk--lq_F1TsVvkB-gUzlMntw9nojOq",

      images:[
       "https://letshyphen.com/cdn/shop/files/Card3_3398a54e-09f0-4aea-a038-3a6847369c60.jpg?v=1693286465&width=493",
       "https://letshyphen.com/cdn/shop/files/Card4_dc25781e-9431-436a-ba04-681ee8412650.jpg?v=1693286464&width=493",
       "https://letshyphen.com/cdn/shop/files/Card5_f7853120-80a1-4514-b118-dd7bb5d8a95a.jpg?v=1717413213&width=493",
      ]
  },
{
    id: 8,
    name: "HYPEN Lipblam",
    price: "₹699",
    category: "Lipblam",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlDdQDJC8KgQUL-Jrcm-flGPeQqmDT-Y8q4HnzX9Tat6n1apmdxGwYUjwJ-MnqfdBgY6oce1ay2BtnKroXdkXOZgQRWJgL1Ngi8hWdwXKKW09UFmpolWhIiQ",

      images:[
        "https://letshyphen.com/cdn/shop/files/card_8_256815b0-b018-49f6-8d14-0ecf698e3f29.jpg?v=1721213362&width=493",
        "https://letshyphen.com/cdn/shop/files/card_7_1cd1a35d-cc0d-490f-8ed7-fdec725365c1.jpg?v=1721213333&width=493",
        "https://letshyphen.com/cdn/shop/files/card_6_b5898ea6-9af4-4573-98a7-1869e10f0e8c.jpg?v=1721213328&width=493",
        
      ]
  },  
  {
    id: 9,
    name: "HYPHEN Non-Comedogenic Face Cream with Heartleaf Extracts",
    price: "₹549",
    category: "Face cream",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRCG48ZX6rlVqBNl2vvy8rj_BREhG5-P8NQ0Zfm-u0NK5MWw-yz_744vXErqUI-2p2ZzrOb9C3ATwoX3atXfc4fTuXFPNXVVQ",

      images:[
        "https://letshyphen.com/cdn/shop/files/card5_e92587f6-0bae-4f77-af6c-8f3951e58dca.jpg?v=1762496812&width=493",
        "https://letshyphen.com/cdn/shop/files/card6_019181c7-3158-4ef6-905e-f7883afe063d.jpg?v=1762496812&width=493",
      ]
  },
  {
    id: 10,
    name: "HYPHEN Juicy Lips Trio Marshmallow Tinted Lip Balms with Vitamin E & Squalane",
    price: "₹749",
    category: "Lip care",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQqAetgDIPsQg17IpPuKarc5G5YH2MXTnlwBUDK19Y8cFMdgPszDj7bUUcASzeCyNmX_iqTm27mNdAE1ph-Kd03tQA5j5d",

      images:[
        "https://letshyphen.com/cdn/shop/files/Card_4_566bca82-d65b-49a3-a1c1-d081c9085636.jpg?v=1721365881&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_5_1a2f4481-e60c-487b-a2ca-1f5a5cf1f4d9.jpg?v=1721365887&width=493",
        "https://letshyphen.com/cdn/shop/files/Card_6_57feacee-3c39-415f-8a32-38ef728b5ab7.jpg?v=1721365893&width=493",
      ]
  },

 {
    id: 11,
    name: "HYPHEN SPF 50 Sunscreen",
    price: "₹899",
    category: "Sunscreen",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRERwHbNfrZi-L-FTc4kPjadGx7NWxH9bfQSCToTo6lX6PJ2lfCQKII_9-JcjQhWTAB3X-ixPFBDb4-0itv_az2oSBJeaVPfw",

      images:[
        "https://letshyphen.com/cdn/shop/files/5_5.jpg?v=1780038250&width=493",
        "https://letshyphen.com/cdn/shop/files/4_4.jpg?v=1780038250&width=493",
        "https://letshyphen.com/cdn/shop/files/9_4.jpg?v=1780038250&width=493",
      ]
  },
   {
    id: 12,
    name: "HYPHEN Golden Hour Glow Sunscreen SPF 50 PA++",
    price: "₹599",
    category: "Sunscreen",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQeS8KId0WmynsJfyygGEDQgjxerXW8WdnBgS5UcVLBrGxR0XDG7ypMj8EQGTCX7GVJ8AAaZJio-oWIY2H5u4LCeGadoenvl7pPlXUAB-sYe31oZzPHFSgp",

      images:[
        "https://letshyphen.com/cdn/shop/files/4_f50f1c49-be11-4ef2-9e9c-1be30a107aba.jpg?v=1762494638&width=493",
        "https://letshyphen.com/cdn/shop/files/5_1.jpg?v=1762494638&width=493",
        "https://letshyphen.com/cdn/shop/files/6_1.jpg?v=1762494638&width=493",
      ]
  },
    {
    id: 13,
    name: "HYPHEN Nourishing Glow Kit",
    price: "₹649",
    category: "skincare kit",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIdA1jU58KQaiSRZzHFYx0ANxRa0adxKWNi2DEHmCCjHSsphqyof1hTIpd_u63XwxdWDe4OjYBf0G44jZpDXlMhEljzRtApR4wsxgwi_tH0bfHFz64zXzRJw",

      images:[
        "https://letshyphen.com/cdn/shop/files/Card2_548140be-6788-489e-acb6-99a0cfd94db7.jpg?v=1748441341&width=493",
        "https://letshyphen.com/cdn/shop/files/Card1_b2a1672e-3067-4aa4-bed3-38a444433de1.jpg?v=1694503955&width=493",
      ]
  },
  {
    id: 14,
    name: "HYPHEN Power Peptides Cocktail Serum By HYPHEN",
    price: "₹549",
    category: "Serum",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQAOy13v8z5_LVc7hXpj3eB7_fC5z36UJHTeNNMb7t1J7GPzwCUKisN2oWZ87upbgmw0ryi1zxGTBgm_yEadhmBP6QTg8ev",

      images:[
       "https://letshyphen.com/cdn/shop/files/Card_2_d5c495ba-e653-4c65-946b-0d1153f35bd0.jpg?v=1762236595&width=493",
       "https://letshyphen.com/cdn/shop/files/Card_4_79cba4d6-a534-4c23-b66a-a2636b4f86d9.jpg?v=1762236595&width=493",
      ]
  },

   {
    id: 15,
    name: "HYPHEN 2% Cica Exosomes Oil Free Moisturizer",
    price: "₹399",
    category: "Moisturizer",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQY2qBT0OCgVJIJ41vAhb9uIQ9ga2OYe50QE_V6CDOGD0HW_4WXeDTv9wHGL4Hfw3hzU2Ocvh5UorU7LcaARF0LOp1id8v3pBdXQ0CPsQY4awIcmwvsssjNCw",

      images:[
        "https://letshyphen.com/cdn/shop/files/card2_1.jpg?v=1774876608&width=493",
        "https://letshyphen.com/cdn/shop/files/card8_1.jpg?v=1774876608&width=493",
      ]
  },
  {
  id: 16,
  name: "10% fermented rice water cleanser - 1% vit c & 0.5% glycolic acid",
  price: "₹800",
  category: "Cleanser",
  image: "https://letshyphen.com/cdn/shop/files/card1_5275217c-d7e3-4505-970d-a9d7f092e17e.jpg?v=1755495879",

  images:[
    "https://letshyphen.com/cdn/shop/files/card5_fb16215b-f341-42bc-ac3f-82442f12944a.jpg?v=1755495879&width=493",
    "https://letshyphen.com/cdn/shop/files/card3_875e26a3-8b00-4e93-98ac-46d009bcfa5a.jpg?v=1755495879&width=493",
  ]

  
},
{
  id: 17,
  name: "Oil control & exfoliating cleanser with 2% aha bha - 100 ml",
  price: "₹400",
  category: "Cleanser",
  image: "https://letshyphen.com/cdn/shop/files/card1_bf2b1428-4f69-41dc-8e4c-f1bdf076e8ba.jpg?v=1707453592",

  images:[
    "https://letshyphen.com/cdn/shop/files/card4_d5222d13-67aa-4ba3-9531-d440551ae1a0.jpg?v=1707710364&width=493",
    "https://letshyphen.com/cdn/shop/files/card6_65e1937d-de24-4bb8-ab1e-74efb87eff9d.jpg?v=1707710364&width=493",
  ]
},
{
  id: 18,
  name: "Daily glow essentials gift kit",
  price: "₹1,422",
  category: "Bundle",
  image: "https://letshyphen.com/cdn/shop/files/Card1_19c56b14-3415-4f8d-b230-62131e44c9e6.jpg?v=1701256508",

  images:[
    "https://letshyphen.com/cdn/shop/files/Card4_6a2e2c7a-d774-4f54-8945-2a6a9717c3bb.jpg?v=1701256508&width=493",
    "https://letshyphen.com/cdn/shop/files/Card5_bdb54e42-e377-4d2e-b823-dacc13baf78c.jpg?v=1701256508&width=493",
    "https://letshyphen.com/cdn/shop/files/Card6.jpg?v=1701256508&width=493",
  ]
},
{
  id: 19,
  name: "Brightening serum pads with 44% rice water - 50 pads",
  price: "₹700",
  category: "Night care",
  image: "https://letshyphen.com/cdn/shop/files/card1_703f1df0-4f68-4e2f-9943-5346260cdea5.jpg?v=1737974459",

  images:[
    "https://letshyphen.com/cdn/shop/files/card2_cb6bb014-1634-43f7-9f61-bbc06398c74a.jpg?v=1762236537&width=493",
    "https://letshyphen.com/cdn/shop/files/card9_7e2d900b-b2a3-4c5f-90cd-4c88581934a1.jpg?v=1762236537&width=493",
  ]
},
{
  id: 20,
  name: "Anti acne face serum with 10% azelaic acid & 2% salicylic acid - 30 ml",
  price: "₹649",
  category: "Serum",
  image: "https://letshyphen.com/cdn/shop/files/1_e2c45436-eaa0-422c-bd1c-419271ffcfbc.jpg?v=1749643571",

  images:[
    "https://letshyphen.com/cdn/shop/files/3_9ac1544d-d3b6-4259-895c-bfdb77c21013.jpg?v=1762236485&width=493",
    "https://letshyphen.com/cdn/shop/files/7_41af1cee-284c-4b48-afc3-21c30a29d25d.jpg?v=1762236485&width=493",
  ]
},
{
  id: 21,
  name: "0.1% retinal reset serum pro 30ml",
  price: "₹649",
  category: "Serum",
  image: "https://letshyphen.com/cdn/shop/files/0.1___retinal_serum.jpg?v=1737977239",

  images:[
    "https://letshyphen.com/cdn/shop/files/Card3_e297f62b-ef04-425d-bb9c-9009f51a5558.jpg?v=1762236766&width=493",
    "https://letshyphen.com/cdn/shop/files/card6_0c32f431-f1ea-4112-8bc3-349fe0adb11b.png?v=1762236766&width=493",
  ]
},
{
  id: 22,
  name: "Vip vintage lip balm with 1% vit e, 2% squalane & peptides - 10g",
  price: "₹649",
  category: "Lip Care",
  image: "https://letshyphen.com/cdn/shop/files/Card_1_copy.jpg?v=1728908940",

  images:[
    "https://letshyphen.com/cdn/shop/files/Card_5_52efcfe1-f8da-451b-97d8-ae5508e7ced5.jpg?v=1721219272&width=493",
    "https://letshyphen.com/cdn/shop/files/Card_7_45f7d805-8015-4856-8f72-561b60bcc259.jpg?v=1721219273&width=493",
  ]
},
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );
  const [selectedImage, setSelectedImage] = useState(
  product?.images?.[0] || product?.image
);
  const addToWishlist = () => {
  let items =
    JSON.parse(localStorage.getItem("wishlist")) || [];

  const exists = items.find(
    (item) => item.id === product.id
  );
  const cartItems =
  JSON.parse(localStorage.getItem("cart")) || [];

cartItems.push(product);

localStorage.setItem(
  "cart",
  JSON.stringify(cartItems)
);

  if (!exists) {
    items.push(product);
    localStorage.setItem(
      "wishlist",
      JSON.stringify(items)
    );
  }

  setWishlist(true);
};

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

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
          maxWidth: "1200px",
          margin: "auto",
          background: "#fff",
          borderRadius: "30px",
          padding: "40px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
         <img
  src={selectedImage}
  alt={product.name}
  style={{
    width: "100%",
    borderRadius: "25px",
    height: "500px",
    objectFit: "contain",
  }}
/>

<div
  style={{
    display: "flex",
    gap: "10px",
    marginTop: "15px",
  }}
>
  {product.images?.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      onClick={() => setSelectedImage(img)}
      style={{
        width: "80px",
        height: "80px",
        objectFit: "contain",
        border: "2px solid #ff4f81",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    />
  ))}
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  }}
>
  <button
    onClick={() => {
      const currentIndex =
        product.images.indexOf(selectedImage);

      const prevIndex =
        currentIndex === 0
          ? product.images.length - 1
          : currentIndex - 1;

      setSelectedImage(product.images[prevIndex]);
    }}
    style={{
      padding: "10px 20px",
      background: "#ff4f81",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
    ⬅ 
  </button>

  <button
    onClick={() => {
      const currentIndex =
        product.images.indexOf(selectedImage);

      const nextIndex =
        currentIndex === product.images.length - 1
          ? 0
          : currentIndex + 1;

      setSelectedImage(product.images[nextIndex]);
    }}
    style={{
      padding: "10px 20px",
      background: "#ff4f81",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
    }}
  >
     ➡
  </button>
</div>
</div>
        </div>

        <div>
          <span
            style={{
              background: "#ff4f81",
              color: "white",
              padding: "8px 15px",
              borderRadius: "30px",
            }}
          >
            BESTSELLER ✨
          </span>

          <h1
            style={{
              marginTop: "20px",
              fontSize: "42px",
            }}
          >
            {product.name}
          </h1>

          <h2 style={{ color: "#ff4f81" }}>
            {product.price}
          </h2>

          <h3>{product.category}</h3>

          <div
            style={{
              fontSize: "22px",
              margin: "15px 0",
            }}
          >
            ⭐⭐⭐⭐⭐ 4.9 Rating
          </div>

          <p style={{ lineHeight: "1.8" }}>
            Experience premium skincare powered by
            advanced ingredients that hydrate,
            nourish and enhance your natural glow.
          </p>

          <h3 style={{ marginTop: "20px" }}>
            Benefits
          </h3>

          <ul style={{ lineHeight: "2" }}>
            <li>✨ Deep Hydration</li>
            <li>✨ Bright & Glowing Skin</li>
            <li>✨ Lightweight Formula</li>
            <li>✨ Dermatologically Tested</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>
            Ingredients
          </h3>

          <ul style={{ lineHeight: "2" }}>
            <li>🌿 Niacinamide</li>
            <li>🌿 Hyaluronic Acid</li>
            <li>🌿 Vitamin C</li>
            <li>🌿 Ceramides</li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>
            Quantity
          </h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
            >
              -
            </button>

            <h2>{quantity}</h2>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
            >
              +
            </button>
          </div>

          <h3 style={{ marginTop: "20px" }}>
            Total Price
          </h3>

          <h2 style={{ color: "#27ae60" }}>
            ₹
            {Number(
              product.price.replace("₹", "").replace(",", "")
            ) * quantity}
          </h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() =>
                alert(
                  `🛍️ Order Placed!\nProduct: ${product.name}\nQuantity: ${quantity}`
                )
              }
              style={{
                background: "#ff4f81",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>

           <button
  onClick={() => {
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      wishlistItems.push(product);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlistItems)
      );

      alert("❤️ Added to Wishlist");
    } else {
      alert("Already in Wishlist");
    }
  }}
  style={{
    background: "#fff0f5",
    border: "1px solid #ff4f81",
    padding: "15px 30px",
    borderRadius: "12px",
    cursor: "pointer",
  }}
>
  ❤️ Add to Wishlist
</button><button
  onClick={() => {
    const cartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cartItems.find(
      (item) => item.id === product.id
    );

    if (!exists) {
      cartItems.push(product);

      localStorage.setItem(
        "cart",
        JSON.stringify(cartItems)
      );

      alert("🛒 Added to Cart");
    } else {
      alert("Already in Cart");
    }
  }}
  style={{
    background: "#fff0f5",
    border: "1px solid #ff4f81",
    padding: "15px 30px",
    borderRadius: "12px",
    cursor: "pointer",
  }}
>
  🛒 Add to Cart
</button>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "15px 30px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
              }}
            >
              ⬅ Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;