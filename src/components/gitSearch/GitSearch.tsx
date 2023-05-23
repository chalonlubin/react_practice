import { useState } from "react";
import "./gitSearch.css"

export default function GitSearch() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState("");

  const fetchUser = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${formData}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((err) => {
        console.error("Error fetching user:", err);
        setUser(null);
      });
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setFormData(event.target.value);
    console.log("formData:", formData);
  };

  return (
    <section>
      <div className="gs-container">
        <h1> Component #5: GitHub User Search</h1>
        <form className="gs-form" onSubmit={fetchUser}>
          <label htmlFor="user-input"></label>
          <input
            id="user-input"
            type="text"
            placeholder="Search for a user"
            value={formData}
            onChange={handleInputChange}
            required
          ></input>
          <button>Search</button>
        </form>
        <div className="list-container">
          {user?.name ? (
            <ul>
              <li>
                <strong>Name:</strong> {user.name}
              </li>
              <li>
                <strong>Username:</strong> {user.login}
              </li>
              <li>
                <strong>Followers:</strong> {user.followers}
              </li>
              <li>
                <strong>Repositories:</strong> {user.public_repos}
              </li>
            </ul>
          ) : (
            <p>User not found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
