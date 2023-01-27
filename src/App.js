import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";
import OrderAdd from "./pages/OrderAdd";
import Orders from "./pages/Orders";
import orders from "./Api/Data.json";
import { DataContext } from "./contexts/dataContext";
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(orders);
  }, []);
  return (
    <div>
      {/* <Test2/> */}
      <DataContext.Provider value={{data,setData}}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orderAdd" element={<OrderAdd />} />
            <Route path="/editPage/:id" element={<EditPage />} />
          </Routes>
        </main>
      </DataContext.Provider>
    </div>
  );
}

export default App;
