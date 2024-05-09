import "./App.css";

import { useState } from "react";
import menu from "./models/data.js";

import Menu from "./components/Menu.jsx";
import SelectedItems from "./components/SelectedItems.jsx";

function App() {
  const [selectedItems, setSelectedItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState([]);

  const addItem = (item) => {
    const itemIndex = selectedItems.findIndex(
      (existingItem) => existingItem.id === item.id
    );
    if (itemIndex !== -1) {
      setSelectedItem([...selectedItems]);

      let updateQuantity = [...quantity];
      updateQuantity[itemIndex] += 1;

      setQuantity(updateQuantity);
    } else {
      setSelectedItem([...selectedItems, item]);
      setQuantity([...quantity, 1]);
    }

    setTotal(totalPrice(item));
    setCount(count + 1);
  };

  const removeItem = (index) => {
    let updatedItems = [...selectedItems];
    let deletedItem = updatedItems.splice(index, 1);
    let updatedQuantity = [...quantity];
    // console.log(updatedQuantity[1]);

    if (updatedQuantity[index] > 1) {
      updatedQuantity[index] -= 1;
      setQuantity(updatedQuantity);
      // console.log(updatedQuantity[index]);
    } else {
      let updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItem(updatedItems);
      updatedQuantity.splice(index, 1);
      setQuantity(updatedQuantity);
    }

    let deletedItemPrice = deletedItem[0].price;
    let updatedTotal = Math.round((total - deletedItemPrice) * 100) / 100;
    // console.log(deletedItem);
    setTotal(updatedTotal);
    setCount(count - 1);
  };

  const totalPrice = (item) => {
    let currentTotal = 0;
    selectedItems.forEach((item, index) => {
      currentTotal += Number(item.price) * quantity[index];
    });
    return Math.round((currentTotal += Number(item.price)) * 100) / 100;
  };

  return (
    <div className="App">
      <Menu menu={menu} action={addItem} />

      <SelectedItems
        selectedItems={selectedItems}
        total={total}
        count={count}
        remove={removeItem}
        quantity={quantity}
        action={addItem}
      />
    </div>
  );
}

export default App;
