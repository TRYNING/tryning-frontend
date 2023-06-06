import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Landing from "../pages/Landing";

export default function Rutas() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
  );
}
