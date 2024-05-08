import React from "react";
import Category from "./Category";

function Menu({ menu, action, total }) {
  return (
    <div className="menu">
      <h1>Menu</h1>

      {Object.keys(menu).map((category) => (
        <Category
          key={category}
          menuItems={menu[category]}
          addAction={action}
          category={category}
          totl={total}
        />
      ))}
    </div>
  );
}

export default Menu;
