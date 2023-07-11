import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";
import Profile from "../pages/Profile";
import {
  HOME_ROUTE,
  LANDING_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../common/constants/routes";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LANDING_ROUTE} element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
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
      </Routes>
    </BrowserRouter>
  );
}
