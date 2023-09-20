import { lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { RoutesTrainer } from "./RoutesTrainer";
import { RoutesUser } from "./RoutesUser";
import { RoutesWithNotFound } from "@common/utils/routes.utils";
import { AuthenticatedGuard } from "../guards/authenticated.guard";
import { PrivateRoutes, PublicRoutes } from "@common/constants/routes";
import { LayoutUser } from "../layouts/LayoutUser";
import { LayoutTrainer } from "../layouts/LayoutTrainer";

const PageLanding = lazy(() => import("@pages/Landing"));
const PageLogin = lazy(() => import("@pages/Login"));
const PageRegister = lazy(() => import("@pages/Register"));

export function PageRoutes() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route index element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PublicRoutes.LANDING} element={<PageLanding />} />
        <Route element={<AuthenticatedGuard />}>
          <Route path={PublicRoutes.LOGIN} element={<PageLogin />} />
          <Route path={PublicRoutes.REGISTER} element={<PageRegister />} />
        </Route>
        <Route
          path="/*"
          element={
            <LayoutUser>
              <RoutesUser />
            </LayoutUser>
          }
        />
        <Route
          path={`/${PrivateRoutes.TRAINER}/*`}
          element={
            <LayoutTrainer>
              <RoutesTrainer />
            </LayoutTrainer>
          }
        />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}
