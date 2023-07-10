import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export function RequireAuth({ children }) {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
}

export function ExistUser({ children }) {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to="/home"></Navigate>;
  } else {
    return children;
  }
}
