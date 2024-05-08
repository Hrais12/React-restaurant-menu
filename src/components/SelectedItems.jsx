import React from "react";

function SelectedItems({ selectedItems }) {
  return (
    <div className="SelectedItems">
      <h1>Selected Items</h1>
      <ul className="screen">
        {" "}
        {selectedItems.map((item, index) => (
          <div className="item">
            <li key={index} className="itemInfo">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <span>
                  <b>{item.price}</b>
                  <br></br>
                </span>

                <span>
                  {item.name} <br></br>
                </span>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SelectedItems;
