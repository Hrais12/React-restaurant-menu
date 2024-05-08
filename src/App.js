import "./App.css";

import { useState } from "react";
import menu from "./models/data.js";

import Menu from "./components/Menu.jsx";
import SelectedItems from "./components/SelectedItems.jsx";

function App() {
  const [selectedItems, setSelectedItem] = useState([]);

  const addItem = (item) => {
    setSelectedItem([...selectedItems, item]);
  };
  return (
    <div className="App">
      <Menu menu={menu} action={addItem} />

      <SelectedItems selectedItems={selectedItems} />
    </div>
  );
}

export default App;
