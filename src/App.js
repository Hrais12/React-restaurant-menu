import "./App.css";

import { useState } from "react";
import menu from "./models/data.js";

import Menu from "./components/Menu.jsx";
import SelectedItems from "./components/SelectedItems.jsx";

function App() {
  const [selectedItems, setSelectedItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  const addItem = (item) => {
    setSelectedItem([...selectedItems, item]);
    setTotal(totalPrice(item));
    setCount(count + 1);
  };

  const removeItem = (index) => {
    let updatedItems = [...selectedItems];
    let deletedItem = updatedItems.splice(index, 1);

    setSelectedItem(updatedItems);
    setCount(count - 1);
    let deletedItemPrice = deletedItem[0].price;
    let updatedTotal = Math.round((total - deletedItemPrice) * 100) / 100;
    console.log(deletedItem);
    setTotal(updatedTotal);
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    selectedItems.map((item) => (currentTotal += Number(item.price)));
    return Math.round((currentTotal + Number(item.price)) * 100) / 100;
  };

  return (
    <div className="App">
      <Menu menu={menu} action={addItem} />

      <SelectedItems
        selectedItems={selectedItems}
        total={total}
        count={count}
        remove={removeItem}
      />
    </div>
  );
}

export default App;
