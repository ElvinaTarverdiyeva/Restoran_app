import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import masa from "../Api/Masa.json";
import officer from "../Api/Officer.json";
import { DataContext } from "../contexts/dataContext";



function OrderAdd() {
  const navigate=useNavigate()
  const [masaS, setMasa] = useState("");
  const [offiverS, setOfficerS] = useState("");
  const value = useContext(DataContext);

  const submithundle = (e) => {
    e.preventDefault();
    if (masaS === "" || offiverS === "") {
      alert("Masa və xidmət edəcək şəxsi seçin!");
    } else {
      value.setData([
        ...value.data,
        {
          id: value.data.length + 1,
          sirasayi: value.data.length + 1,
          masa: masaS,
          xidmetci: offiverS,
          status: "sonlanmayib",
          mebleg: 0,
          sonlanmaTarixi: "-",
          sifarisler: [],
        },
      ]);
      alert("Sifariş əlavə olundu!");
      navigate("/orders")
    }
  };
  return (
    <div className="orderAddContainer">
      <h2>Sifaris elave et:</h2>
      <form onSubmit={submithundle}>
        <div className="select">
          <label htmlFor="">Masanın adı:</label>
          <select name="" id="" onChange={(e) => setMasa(e.target.value)}>
            <option value="null"></option>
            {masa.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
        <div className="select">
          <label htmlFor="">Xidmət edəcək şəxs:</label>
          <select name="" id="" onChange={(e) => setOfficerS(e.target.value)}>
            <option value="null"></option>
            {officer.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}
          </select>
        </div>
        <button>Əlavə et</button>
      </form>
    </div>
  );
}

export default OrderAdd;
