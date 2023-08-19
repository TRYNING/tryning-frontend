import { Route } from "react-router-dom";
import { RoutesWithNotFound } from "../utilities/routesWithNotFound";

export function RoutesTrainer() {
  return (
    <RoutesWithNotFound>
      <Route path="/dashboard" element={<h1>dashboard</h1>} />
    </RoutesWithNotFound>
  );
}
