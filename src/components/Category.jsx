import React from "react";

function Category({ category, addAction, menuItems }) {
  const showCategory = () => {
    if (category === "mainCourse") {
      return <h3>Main Course</h3>;
    } else if (category === "appetizer") {
      return <h3>Appetizer</h3>;
    } else {
      return <h3>Dessert</h3>;
    }
  };
  return (
    <div>
      {showCategory()}
      <ul className="list">
        {menuItems.map((item, index) => (
          <div className="result" key={index}>
            <li>
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

export default Category;
