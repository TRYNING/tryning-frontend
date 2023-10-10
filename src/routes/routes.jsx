import { lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { RoutesTrainer } from "./RoutesTrainer";
import { RoutesUser } from "./RoutesUser";
import { RoutesWithNotFound } from "@common/utils/routes.utils";
import {
  AuthenticatedUser,
  AuthenticatedTrainer,
} from "../guards/authenticated.guard";
import { PrivateRoutes, PublicRoutes } from "@common/constants/routes";
import { LayoutUser } from "../layouts/LayoutUser";
import { LayoutTrainer } from "../layouts/LayoutTrainer";

const PageLanding = lazy(() => import("@pages/Landing"));
const PageLoginUser = lazy(() => import("@pages/Login/LoginUser"));
const PageRegisterUser = lazy(() => import("@pages/Register/RegisterUser"));
const PageLoginTrainer = lazy(() => import("@pages/Login/LoginTrainer"));
const PageRegisterTrainer = lazy(() =>
  import("@pages/Register/RegisterTrainer")
);

export function PageRoutes() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route index element={<Navigate to={PrivateRoutes.HOME} />} />
        <Route path={PublicRoutes.LANDING} element={<PageLanding />} />

        <Route element={<AuthenticatedUser />}>
          <Route path={PublicRoutes.LOGIN_USER} element={<PageLoginUser />} />
          <Route
            path={PublicRoutes.REGISTER_USER}
            element={<PageRegisterUser />}
          />
        </Route>

        <Route element={<AuthenticatedTrainer />}>
          <Route
            path={PublicRoutes.LOGIN_TRAINER}
            element={<PageLoginTrainer />}
          />
          <Route
            path={PublicRoutes.REGISTER_TRAINER}
            element={<PageRegisterTrainer />}
          />
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
