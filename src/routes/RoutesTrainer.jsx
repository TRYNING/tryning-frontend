import { Route, Routes } from "react-router-dom";

export function RoutesTrainer() {
  return (
    <Routes>
      <Route path="/dashboard" element={<h1>dashboard</h1>} />
    </Routes>
  );
}
