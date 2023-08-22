import { lazy } from "react";
import { AuthGuard } from "../guards/auth.guard";
import { Route } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { RoutesWithNotFound } from "../utilities/routesWithNotFound";

const PageHome = lazy(() => import("@pages/user/Home"));
const PageProfile = lazy(() => import("@pages/user/Profile"));
const PageRoutines = lazy(() => import("@pages/user/Routines"));
const PageRoutine = lazy(() => import("@pages/user/Routine"));
const PageMesociclo = lazy(() => import("@pages/user/Mesociclo"));
const PageAccount = lazy(() => import("@pages/user/Account"));
const PageBecomeTrainer = lazy(() => import("@pages/user/BecomeTrainer"));
const PageTrainers = lazy(() => import("@pages/user/Trainers"));

export function RoutesUser() {
  return (
    <RoutesWithNotFound>
      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.HOME} element={<PageHome />} />
        <Route path={PrivateRoutes.PROFILE} element={<PageProfile />} />
        <Route path={PrivateRoutes.ROUTINES} element={<PageRoutines />} />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId`}
          element={<PageRoutine />}
        />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId/${PrivateRoutes.MESOCICLOS}/:mesocicloId`}
          element={<PageMesociclo />}
        />
        <Route path={PrivateRoutes.ACCOUNT} element={<PageAccount />} />
        <Route
          path={PrivateRoutes.BECOME_TRAINER}
          element={<PageBecomeTrainer />}
        />
        <Route path={PrivateRoutes.TRAINERS} element={<PageTrainers />} />
      </Route>
    </RoutesWithNotFound>
  );
}
