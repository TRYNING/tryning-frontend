import { lazy } from "react";
import { AuthGuard } from "../guards/auth.guard";
import { Route } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { RoutesWithNotFound } from "@common/utils/routes.utils";

const PageHome = lazy(() => import("@pages/user/Home"));
const PageProfile = lazy(() => import("@pages/user/Profile"));
const PageRoutines = lazy(() => import("@pages/user/Routines"));
const PageRoutine = lazy(() => import("@pages/user/Routine"));
const PageDays = lazy(() => import("@pages/user/Days"));
const PageAccount = lazy(() => import("@pages/user/Account"));
const PageBecomeTrainer = lazy(() => import("@pages/user/BecomeTrainer"));
const PageTrainers = lazy(() => import("@pages/user/Trainers"));
const PageSupport = lazy(() => import("@pages/Support"));
const PageAnalytics = lazy(() => import("@pages/user/Analytics"));

export function RoutesUser() {
  return (
    <RoutesWithNotFound>
      <Route element={<AuthGuard />}>
        
        <Route path={PrivateRoutes.SUPPORT} element={<PageSupport />} />
        <Route path={PrivateRoutes.ANALYTICS} element={<PageAnalytics />} />
        <Route path={PrivateRoutes.HOME} element={<PageHome />} />
        <Route path={PrivateRoutes.PROFILE} element={<PageProfile />} />
        <Route path={PrivateRoutes.ROUTINES} element={<PageRoutines />} />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId`}
          element={<PageRoutine />}
        />
        <Route
          path={`${PrivateRoutes.ROUTINES}/:routineId/${PrivateRoutes.DAYS}/:microcicloId`}
          element={<PageDays />}
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
