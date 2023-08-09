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
import Routine from "../pages/Routine";
import Routines from "../pages/Routines";
import Mesociclos from "../pages/Mesociclos";
import Mesociclo from "../pages/Mesociclo";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";

import {
  ACCOUNT_ROUTE,
  HOME_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  MESOCICLOS_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
  ROUTINES_ROUTE,
} from "../common/constants/routes";

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
        <Route path={`${ROUTINES_ROUTE}`} element={<Routines />} />
        <Route path={`${ROUTINES_ROUTE}/:routineId`} element={<Routine />} />
        <Route
          path={`${ROUTINES_ROUTE}/:routineId${MESOCICLOS_ROUTE}`}
          element={<Mesociclos />}
        />
        <Route
          path={`${ROUTINES_ROUTE}/:routineId${MESOCICLOS_ROUTE}/:mesocicloId`}
          element={<Mesociclo />}
        />
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
