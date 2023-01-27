import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import Input from "../component/Input";
import { DataContext } from "../contexts/dataContext";
import UserOrders from "./UserOrders";

function EditPage() {
  const params=useParams();
  const navigate=useNavigate()
  const [visibility, setVisibility] = useState(false);
  const [loading, setloading] = useState(false);

  const [getOneData, setgetOneData] = useState({});
  const value = useContext(DataContext);
  useEffect(() => {
    if (value.data.length > 0) {
      setgetOneData(value.data.find((e) => e.id == params.id));
      setloading(false)
    } else {
      // setgetOneData(JSON.parse(localStorage.getItem("currentOrder")));
      setloading(true)
    }
  }, []);
const selectChange=(e)=>{
console.log(e.target.value);
setgetOneData({
  ...getOneData,
  status: e.target.value,
});
}
  const backPage = () => {
    navigate("/orders");
  };

  const submithundle = (e) => {
    e.preventDefault();
    let index = value.data.findIndex((e) => e.id == params.id);
    value.data[index] = getOneData;
    value.setData([...value.data]);
    navigate("/orders");
  };

  const showFood = () => {
    setVisibility(true);
  };

  console.log(getOneData);
  return (
    <div className="editpage">
      <h2>Sifarişi təzələ:</h2>
      {loading?(
        <div>
        <div class="container">
        <div class="loading">
          <div class="ball one"></div>
          <div class="ball two"></div>
          <div class="ball three"></div>
           <div class="ball four"></div>
        </div>
      </div>
      <button onClick={backPage} className="againBtn">Yenidən cəhd et</button>
      </div>
      
      ):(
  <form onSubmit={submithundle}>
  <Input
    label="Sira Sayi"
    type="text"
    value={getOneData.sirasayi}
    name="sirasayi"
    obj={getOneData}
    setObj={setgetOneData}
  />
  <Input
    label="Masaniz"
    type="text"
    value={getOneData.masa}
    name="masa"
    obj={getOneData}
    setObj={setgetOneData}
  />
  <Input
    label="Xidmetci"
    type="text"
    value={getOneData.xidmetci}
    name="xidmetci"
    obj={getOneData}
    setObj={setgetOneData}
  />
  <Input
    label="Mebleg"
    type="text"
    value={getOneData.mebleg}
    name="mebleg"
    obj={getOneData}
    setObj={setgetOneData}
  />
  <Input
    label="Sonlanma Tarixi"
    type="datetime-local"
    value={getOneData.sonlanmaTarixi}
    name="sonlanmaTarixi"
    obj={getOneData}
    setObj={setgetOneData}
  />

  <div className="select">
    <label htmlFor="">Status</label>
    <select onChange={selectChange}>
      <option value="sonlanmayib">sonlanmayib</option>
      <option value="sonlanib">sonlanib</option>
    </select>
  </div>
  <div className="inp">
    <label htmlFor="">Sifarisler</label>
    <input type="button" value="göstər" onClick={showFood} />
  </div>

  <div className="btn">
    <button type="submit">Save</button>
    <button onClick={backPage}>Cancel</button>
  </div>
</form>
      )}
    
      {visibility ? (
        <UserOrders setVisility={setVisibility} id={getOneData.id} />
      ) : null}
    </div>
  );
}

export default EditPage;
