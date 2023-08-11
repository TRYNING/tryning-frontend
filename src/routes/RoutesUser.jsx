import { Route, Routes } from "react-router-dom";
import { RequireAuth, ExistUser } from "../components/ProtectRoutes";
import { PageLanding } from "../pages/user/Landing";
import { PageLogin } from "../pages/user/Login";
import { PageRegister } from "../pages/user/Register";
import { PageHome } from "../pages/user/Home";
import { PageProfile } from "../pages/user/Profile";
import { PageRoutines } from "../pages/user/Routines";
import { PageRoutine } from "../pages/user/Routine";
import { PageMesociclo } from "../pages/user/Mesociclo";
import { PageAccount } from "../pages/user/Account";
import { PageAboutUs } from "../pages/user/AboutUs";

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
import { PageBecomeTrainer } from "../pages/user/BecomeTrainer";
import { PageTrainers } from "../pages/user/Trainers";

export function RoutesUser() {
  return (
    <Routes>
      <Route path={LANDING_ROUTE} element={<PageLanding />} />
      <Route
        path={LOGIN_ROUTE}
        element={
          <ExistUser>
            <PageLogin />
          </ExistUser>
        }
      />
      <Route path={REGISTER_ROUTE} element={<PageRegister />} />
      <Route
        path={HOME_ROUTE}
        element={
          <RequireAuth>
            <PageHome />
          </RequireAuth>
        }
      />
      <Route path={PROFILE_ROUTE} element={<PageProfile />} />
      <Route path={`${ROUTINES_ROUTE}`} element={<PageRoutines />} />
      <Route path={`${ROUTINES_ROUTE}/:routineId`} element={<PageRoutine />} />
      <Route
        path={`${ROUTINES_ROUTE}/:routineId${MESOCICLOS_ROUTE}/:mesocicloId`}
        element={<PageMesociclo />}
      />
      <Route
        path={ACCOUNT_ROUTE}
        element={
          <RequireAuth>
            <PageAccount />
          </RequireAuth>
        }
      />
      <Route
        path="/about-us"
        element={
          <RequireAuth>
            <PageAboutUs />
          </RequireAuth>
        }
      />
      <Route path="/become-trainer" element={<PageBecomeTrainer />} />
      <Route
        path="/trainers"
        element={
          <RequireAuth>
            <PageTrainers />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
