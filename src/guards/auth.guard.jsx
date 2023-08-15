import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "@common/constants/routes";
import { useAuthContext } from "@hooks/useAuthContext";

export const AuthGuard = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate replace to={PublicRoutes.LANDING} />;
};
