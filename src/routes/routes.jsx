import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Contact from "../pages/Contact";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";
import AboutUs from "../pages/AboutUs";
import BecomeTrainer from "../pages/BecomeTrainer";
import Trainers from "../pages/Trainers";

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
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/my-account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route
          path="/about-us"
          element={
            <RequireAuth>
              <AboutUs />
            </RequireAuth>
          }
        />
        <Route
          path="/contact"
          element={
            <RequireAuth>
              <Contact />
            </RequireAuth>
          }
        />
        <Route
          path="/become-trainer"
          element={
            <RequireAuth>
              <BecomeTrainer />
            </RequireAuth>
          }
        />
        <Route
          path="/trainers"
          element={
            <RequireAuth>
              <Trainers />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
