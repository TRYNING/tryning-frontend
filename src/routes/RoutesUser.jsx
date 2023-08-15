import { Route, Routes } from "react-router-dom";
import { PageLanding } from "@pages/user/Landing";
import { PageLogin } from "@pages/user/Login";
import { PageRegister } from "@pages/user/Register";
import { PageHome } from "@pages/user/Home";
import { PageProfile } from "@pages/user/Profile";
import { PageRoutines } from "@pages/user/Routines";
import { PageRoutine } from "@pages/user/Routine";
import { PageMesociclo } from "@pages/user/Mesociclo";
import { PageAccount } from "@pages/user/Account";
import { PageAboutUs } from "@pages/user/AboutUs";
import { PageBecomeTrainer } from "@pages/user/BecomeTrainer";
import { PageTrainers } from "@pages/user/Trainers";
import { PrivateRoutes, PublicRoutes } from "@common/constants/routes";
import { AuthGuard } from "../guards/auth.guard";
import { AuthenticatedGuard } from "../guards/authenticated.guard";

export function RoutesUser() {
  return (
    <Routes>
      <Route path={PublicRoutes.LANDING} element={<PageLanding />} />
      <Route element={<AuthenticatedGuard />}>
        <Route path={PublicRoutes.LOGIN} element={<PageLogin />} />
        <Route path={PublicRoutes.REGISTER} element={<PageRegister />} />
      </Route>
      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.HOME} element={<PageHome />} />
        <Route path={PrivateRoutes.PROFILE} element={<PageProfile />} />
        <Route path={PrivateRoutes.ROUTINES} element={<PageRoutines />} />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId`}
          element={<PageRoutine />}
        />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId${PrivateRoutes.MESOCICLOS}/:mesocicloId`}
          element={<PageMesociclo />}
        />
        <Route path={PrivateRoutes.ACCOUNT} element={<PageAccount />} />
        <Route path={PrivateRoutes.ABOUT_US} element={<PageAboutUs />} />
        <Route
          path={PrivateRoutes.BECOME_TRAINER}
          element={<PageBecomeTrainer />}
        />
        <Route path={PrivateRoutes.TRAINERS} element={<PageTrainers />} />
      </Route>
    </Routes>
  );
}
