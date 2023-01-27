import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../image/malakan_1.jpg"

function Home() {
  const navigate=useNavigate();
  const getOrderAdd=()=>{
navigate("/orderAdd")
  }
  return (
    <div className="homePgae">
      <h2>Ana Səhifə:</h2>
      <img src={img} alt="" />
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        natus numquam, id tempora incidunt delectus consequatur voluptatem
        repellat voluptates nisi.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a
        architecto quos maxime. Provident commodi placeat reiciendis consectetur
        autem sapiente saepe delectus rem expedita quidem, architecto natus,
        quas corporis qui itaque esse hic dolores. Quam ipsum a dolores
        distinctio. Non.
      </p>
      <button onClick={getOrderAdd}>Sifariş əlavə et</button>
    </div>
  );
}

export default Home;
