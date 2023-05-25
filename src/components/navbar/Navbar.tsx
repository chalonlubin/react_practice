import "./navbar.css";

export default function Navbar() {
  const user = false;

  return (
    <div className="navbar-container">
      <div className="logo">
        <button>Logo</button>
      </div>
      <div className="navbar-menu">
      <ul >
        <li><button>About</button></li>
        <li><button>Stuff</button></li>
        <li><button>And Things</button></li>
      </ul>
      </div>
      <div className="navbar-auth">
        {user ? <p>Welcome, Chalon! </p> : <button>Sign Up</button>}
      </div>
    </div>
  );
}
