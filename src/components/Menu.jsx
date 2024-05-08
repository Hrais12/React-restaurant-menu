import React from "react";
// import Main from "./Main";
// import Appetizer from "./Appetizer";
// import Dessert from "./Dessert";
import Category from "./Category";

function Menu({ menu, action }) {
  return (
    <div className="menu">
      <h1>Menu</h1>

      {/* <Appetizer appetizer={menu.appetizer} addAction={action} />

      <Main main={menu.mainCourse} addAction={action} />

      <Dessert dessert={menu.dessert} addAction={action} /> */}

      {Object.keys(menu).map((category) => (
        <Category
          key={category}
          menuItems={menu[category]}
          addAction={action}
          category={category}
        />
      ))}
    </div>
  );
}

export default Menu;
