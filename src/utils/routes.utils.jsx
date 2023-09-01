import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PageNotFound = lazy(() => import("@pages/NotFound"));

export function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
