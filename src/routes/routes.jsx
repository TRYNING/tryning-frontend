import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Macrociclo from "../pages/Macrociclo";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/macrociclo" element={<Macrociclo />} />
        <Route path="/microciclo/:dia" element={<Macrociclo />} />
      </Routes>
    </BrowserRouter>
  );
}
