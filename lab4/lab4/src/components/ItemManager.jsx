import { useState } from "react";
import ItemList from "./ItemList";

function ItemManager() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={styles.container}>
      <h2>Item Manager (Parent)</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />

      <button onClick={addItem} style={styles.button}>
        Add Item
      </button>

      <ItemList
        items={items}
        deleteItem={deleteItem}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default ItemManager;