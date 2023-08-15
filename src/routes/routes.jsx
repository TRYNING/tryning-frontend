import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesUser } from "./routesUser";
import { RoutesTrainer } from "./routesTrainer";

export function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesUser />} />
        <Route path="/trainer/*" element={<RoutesTrainer />} />
      </Routes>
    </BrowserRouter>
  );
}
