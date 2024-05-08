import React from "react";

function SelectedItems({ selectedItems, total, count, remove }) {
  return (
    <div className="selectedItems">
      <h1>Selected Items</h1>
      <div className="screen">
        <ul>
          {selectedItems.map((item, index) => (
            <div className="item">
              <li key={index} className="itemInfo">
                <img src={item.image} alt={item.name} />
                <div className="info">
                  <span className="name">
                    <b>{item.name} </b> <br></br>
                  </span>
                  <span className="price">
                    <b>$ {item.price}</b>
                    <br></br>
                    <button onClick={() => remove(index)}>Remove</button>
                  </span>
                </div>
              </li>
            </div>
          ))}
        </ul>

        <div className="checkout">
          <b>
            {" "}
            ${total} subtotal {count} items
          </b>
          <button className="checkoutBtn">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default SelectedItems;
