import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Login from "./component/login/Login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
