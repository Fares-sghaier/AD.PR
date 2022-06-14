import Login from './components/Auth/Login/Login.jsx';
import Signup from './components/Auth/Signup/Signup.jsx';

import TopBar from './components/TopBar/TopBar.jsx'
import { Route, Routes, Navigate,browserHistory } from "react-router-dom";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Routes >
    {user && <Route path="/" exact element={<TopBar />} />}
    <Route path="/signup" exact element={<Signup />} />
    <Route path="/login" exact element={<Login />} />
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>
  );
}

export default App;
