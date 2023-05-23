import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./shoppingList.css";

export default function ShoppingList() {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState("");
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!list.some((item => item.value === formData ))) {
      setList((prevlist) => [
        ...prevlist,
        { id: uuidv4(), value: formData  },
      ]);
      setFormData("");
      setError(false)
    } else {
      setError(true)
    }
  };

  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  const toggleComplete = (itemId) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === itemId ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setList((prevlist) => prevlist.filter((item) => item.id !== itemId));
    setError(false);
  };



  return (
    <section>
      <h1>Component #4: Shopping List</h1>
      <div className="sl-container">
        <h2>Items To Buy</h2>
        <form onSubmit={handleSubmit} className="sl-form">
          {error &&
          <div id="sl-error">Item already exists, please enter new item.</div>}
          <label htmlFor="item-input"></label>
          <input
            type="text"
            name="item-input"
            placeholder="Add a new item"
            value={formData}
            onChange={handleInputChange}
            required
          />
          <button id="sl-add-btn">Add Item</button>
        </form>
        <div className="sl-item-container">
          <ul>
            {list.map((item) => (
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
