import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {user}=useContext(AuthContext)
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register/>}  />
        <Route exact path="/login" element={user ?<Navigate to="/"/>: <Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
