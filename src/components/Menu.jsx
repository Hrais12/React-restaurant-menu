import React from "react";
import Category from "./Category";
import { useState } from "react";

function Menu({ menu, action }) {
  const [showCategory, setShowCategory] = useState({
    mainCourse: true,
    appetizer: false,
    dessert: false,
  });
  const visibile = (category) => {
    setShowCategory({
      ...showCategory,
      [category]: !showCategory[category], //replace with true
    });
  };

  return (
    <div className="menu">
      <h1>Menu</h1>

      <nav>
        <ul className="menuCategory">
          <li>
            <button
              className="categoryBtn"
              onClick={() => visibile("mainCourse")}
            >
              Main Course
            </button>
          </li>
          <li>
            <button
              className="categoryBtn"
              onClick={() => visibile("appetizer")}
            >
              Appetizer
            </button>
          </li>
          <li>
            <button className="categoryBtn" onClick={() => visibile("dessert")}>
              Dessert
            </button>
          </li>
        </ul>
      </nav>

      {Object.keys(menu).map(
        (category) =>
          showCategory[category] && (
            <Category
              key={category}
              menuItems={menu[category]}
              addAction={action}
              category={category}
            />
          )
      )}
    </div>
  );
}

export default Menu;
