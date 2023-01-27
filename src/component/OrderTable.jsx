import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import data from "../Api/Data.json";
import { DataContext } from "../contexts/dataContext";

function OrderTable() {
  const navigate=useNavigate()
  const value=useContext(DataContext)
  console.log(value.data);
  const getEditPage = (id) => {
    navigate("/editPage/"+id);
  };
  return (
    <table>
      <tr>
        <th>S/S</th>
        <th>Masa</th>
        <th>Xidmətçi</th>
        <th>Status</th>
        <th>Məbləğ</th>
        <th>Sonlanma Tarixi</th>
        <th>Ətraflı</th>
      </tr>
      {[...value.data].reverse().map((e) => (
        <tr>
          <td>{e.sirasayi}</td>
          <td>{e.masa}</td>
          <td>{e.xidmetci}</td>
          <td>{e.status}</td>
          <td>{e.mebleg}</td>
          <td>{e.sonlanmaTarixi}</td>
          <td>
            <button onClick={getEditPage.bind(this, e.id)}>Bax</button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default OrderTable;
