import React from "react";

function Appetizer({ appetizer, addAction }) {
  return (
    <div>
      <h3>Appetizer</h3>
      <ul className="list">
        {appetizer.map((item, index) => (
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

export default Appetizer;
