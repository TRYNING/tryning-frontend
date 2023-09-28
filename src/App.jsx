import { AuthContextProvider } from "./context/AuthContextProvider";
import { RoutinesContextProvider } from "./context/RoutinesContextProvider";
import { PageRoutes } from "./routes/Routes";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner/Spinner";
import { Toaster } from "sonner";
import "@assets/styles/main.css";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Suspense fallback={<Spinner />}>
        <AuthContextProvider>
          <RoutinesContextProvider>
            <PageRoutes />
          </RoutinesContextProvider>
        </AuthContextProvider>
      </Suspense>
    </div>
  );
}

export default App;
