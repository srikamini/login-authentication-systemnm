import { useState } from "react";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Dashboard from "./Dashboard.js";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("login"); // "login" | "signup" | "dashboard"

  const handleSignup = (username, email, password) => {
    setUsers([...users, { username, email, password }]);
    alert("Signup successful! Please login.");
    setPage("login");
  };

  const handleLogin = (username, email, password) => {
    const found = users.find(
      (u) =>
        u.username === username && u.email === email && u.password === password
    );

    if (found) {
      setUser(found);
      setPage("dashboard");
    } else {
      alert("Invalid credentials or user not found.");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setPage("login");
  };

  return (
    <div>
      {page === "login" && (
        <Login onLogin={handleLogin} onChangePage={setPage} />
      )}

      {page === "signup" && (
        <Signup onSignup={handleSignup} onChangePage={setPage} />
      )}

      {page === "dashboard" && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
