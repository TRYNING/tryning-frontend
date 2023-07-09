import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";
import Profile from "../pages/Profile";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={
            <ExistUser>
              <Login />
            </ExistUser>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            // <RequireAuth>
              <Home />
            // </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
