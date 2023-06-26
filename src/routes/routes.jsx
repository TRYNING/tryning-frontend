import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterDetails from "../pages/RegisterDetails";
import { RequireAuth, CanNotAuth } from "../components/ProtectRoutes";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CanNotAuth>
              <Landing />
            </CanNotAuth>
          }
        />
        <Route
          path="/login"
          element={
            <CanNotAuth>
              <Login />
            </CanNotAuth>
          }
        />
        <Route
          path="/register"
          element={
            <CanNotAuth>
              <Register />
            </CanNotAuth>
          }
        />
        <Route
          path="/register-details"
          element={
            <CanNotAuth>
              <RegisterDetails />
            </CanNotAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
