import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Account from "../pages/Account";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import BecomeTrainer from "../pages/BecomeTrainer";
import Trainers from "../pages/Trainers";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";

import {
  ACCOUNT_ROUTE,
  HOME_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  ROUTINE_ROUTE,
} from "../common/constants/routes";
import Routine from "../pages/Routine";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LANDING_ROUTE} element={<Landing />} />
        <Route
          path={LOGIN_ROUTE}
          element={
            <ExistUser>
              <Login />
            </ExistUser>
          }
        />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route
          path={HOME_ROUTE}
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path={PROFILE_ROUTE} element={<Profile />} />
        <Route path={ROUTINE_ROUTE} element={<Routine />} />

        <Route
          path={ACCOUNT_ROUTE}
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
        <Route path="/become-trainer" element={<BecomeTrainer />} />
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
