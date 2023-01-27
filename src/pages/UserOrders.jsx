import React, { useContext } from "react";
import food from "../Api/Food.json";
import { DataContext } from "../contexts/dataContext";
function UserOrders({ setVisility, id }) {
  console.log(id);
  const value = useContext(DataContext);
  let checkItem = value.data.find((e) => e.id == id);

  const addItem = (item) => {
    let check = checkItem.sifarisler.find((e) => e.id == item.id);
    if (check) {
      check.count++;
      check.countPrice = (Number(check.count) * Number(check.price)).toFixed(2);
    } else {
      checkItem.sifarisler.push(item);
    }
    let totalCount = 0;
    checkItem.sifarisler.map((e) => {
      totalCount += Number(e.countPrice);
    });
    checkItem.mebleg = totalCount.toFixed(2);
    value.setData([...value.data]);
  };
  const decrment = (item) => {
    let check = checkItem.sifarisler.find((e) => e.id == item.id);
    check.count--;
    if (check.count > 0) {
      check.countPrice = (Number(check.count) * Number(check.price)).toFixed(2);
      let totalCount = 0;
      checkItem.sifarisler.map((e) => {
        totalCount += Number(e.countPrice);
      });
      checkItem.mebleg = totalCount.toFixed(2);
      value.setData([...value.data]);
    } else {
      checkItem.sifarisler = checkItem.sifarisler.filter(
        (e) => e.id != item.id
      );
      checkItem.mebleg = 0;
      value.setData([...value.data]);
    }
  };

  return (
    <div className="userOrders">
      <div className="foodContainer">
        <div className="left">
          {food.map((e) => (
            <div className="food_item">
              <p>{e.name} </p>
              <button onClick={addItem.bind(this, e)}>{e.price}azn</button>
            </div>
          ))}
        </div>
        <div className="rigth">
          <div className="selectFood">
            <ul>
              {checkItem.sifarisler.map((e) => (
                <li>
                <p>
                 <b>{e.name}-</b> 
                  <span>{e.count}</span>ədəd-
                  <span>{e.countPrice}</span>azn
                </p>
                  <button onClick={decrment.bind(this, e)}>-</button>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={(e) => setVisility(false)}>exit</button>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;
