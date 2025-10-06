import "./App.css";

function Dashboard({ user, onLogout }) {
  return (
    <div className="form-container">
      <div className="form-box">
        <h1>Welcome, {user.username} 🎉</h1>
        <p>Email: {user.email}</p>
        <button className="btn" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
