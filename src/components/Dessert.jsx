import React from "react";

function Dessert({ dessert, addAction }) {
  return (
    <div>
      <h3>Dessert</h3>
      <ul className="list">
        {dessert.map((item, index) => (
          <div className="result">
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <span>
                  <b>{item.price}</b>
                  <br></br>
                </span>

                <span>
                  {item.name} <br></br>
                </span>
                <button onClick={() => addAction(item)}>Add</button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Dessert;
