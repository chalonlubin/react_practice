import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./shoppingList.css";

export default function ShoppingList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false)

  const addItem = (event) => {
    event.preventDefault();

    if (!items.some((item => item.value === inputValue ))) {
      setItems((prevItems) => [
        ...prevItems,
        { id: uuidv4(), value: inputValue  },
      ]);
      setInputValue("");
      setError(false)
    } else {
      setError(true)
    }
  };

  const toggleComplete = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setError(false);
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
          {error &&
          <div id="sl-error">Item already exists, please enter new item.</div>}
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
              <li
                key={item.id}
                className={item.isComplete ? "complete" : "incomplete"}
                onClick={() => toggleComplete(item.id)}
              >
                <p>{item.value}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
