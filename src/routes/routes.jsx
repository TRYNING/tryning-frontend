import { lazy } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { RoutesUser } from "./RoutesUser";
import { RoutesWithNotFound } from "@common/utils/routes.utils";
import { AuthenticatedUser } from "../guards/authenticated.guard";
import { PrivateRoutes, PublicRoutes } from "@common/constants/routes";
import { LayoutUser } from "../layouts/LayoutUser";

const PageLanding = lazy(() => import("@pages/Landing"));
const PageLoginUser = lazy(() => import("@pages/Login"));
const PageRegisterUser = lazy(() => import("@pages/Register"));

export function PageRoutes() {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route index element={<Navigate to={PrivateRoutes.HOME} />} />

        <Route element={<AuthenticatedUser />}>
          <Route path={PublicRoutes.LANDING} element={<PageLanding />} />
          <Route path={PublicRoutes.LOGIN} element={<PageLoginUser />} />
          <Route path={PublicRoutes.REGISTER} element={<PageRegisterUser />} />
        </Route>

        <Route
          path="/*"
          element={
            <LayoutUser>
              <RoutesUser />
            </LayoutUser>
          }
        />
      </RoutesWithNotFound>
    </BrowserRouter>
  );
}
