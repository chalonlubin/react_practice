import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./shoppingList.css";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };

  const removeItem = (item) => {
    const updatedItems = items.filter((currentItem) => currentItem !== item);
    setItems(updatedItems);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <h1>Component #4: Shopping List</h1>
      <div className="sl-container">
        <h2>Items To Buy</h2>
        <form onSubmit={addItem}>
          <input
            type="text"
            name="item"
            placeholder="Add a new item"
            value={inputValue}
            onChange={handleInputChange}
            required
          />
          <button id="sl-add-btn">Add Item</button>
        </form>
        <div className="sl-item-container">
          <ul>
            {items.map((item) => (
              <li key={uuidv4()}>
                <p>{item}</p>
                <button onClick={() => removeItem(item)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

