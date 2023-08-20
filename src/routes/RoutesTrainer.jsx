import { lazy } from "react";
import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "../utilities/routesWithNotFound";
import { TrainerRoutes } from "../common/constants/routes";

const CreateRoutine = lazy(() => import("@pages/trainer/CreateRoutine"));

export function RoutesTrainer() {
  return (
    <RoutesWithNotFound>
      <Route path={`${TrainerRoutes.DASHBOARD}`} element={<h1>dashboard</h1>} />
      <Route
        path={`${TrainerRoutes.CREATE_ROUTINE}`}
        element={<CreateRoutine />}
      />
      <Route
        path={`${TrainerRoutes.VIEW_ROUTINE}`}
        element={<h1>VIEW ROUTINE</h1>}
      />
    </RoutesWithNotFound>
  );
}
