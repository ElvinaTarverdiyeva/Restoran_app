import React, { useContext, useEffect, useState } from "react";
import OrderTable from "../component/OrderTable";
import { DataContext } from "../contexts/dataContext";

function Orders() {
  const value = useContext(DataContext);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let p = 0;
    if(value.data.length>0){
      value.data.map((e) => {
        if(e.status=="sonlanib"){
          p += Number(e.mebleg);
        }
      });
      setPrice(p.toFixed(2))
    }else{
      setPrice(66.60.toFixed(2))
    }
 
  }, []);
  return (
    <div  className="orders">
      <h4>Ümumi Gəlir: {price} AZN</h4>

      <OrderTable />
    </div>
  );
}

export default Orders;
