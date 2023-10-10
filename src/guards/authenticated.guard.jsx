import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";
import { useAuthContext } from "@hooks/useAuthContext";

export const AuthenticatedUser = () => {
  const { user } = useAuthContext();
  return !user ? <Outlet /> : <Navigate replace to={PrivateRoutes.HOME} />;
};

export const AuthenticatedTrainer = () => {
  const { user } = useAuthContext();
  return !user ? <Outlet /> : <Navigate replace to={PrivateRoutes.TRAINER} />;
};
