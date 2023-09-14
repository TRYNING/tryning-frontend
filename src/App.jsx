import { AuthContextProvider } from "./context/AuthContextProvider";
import { RoutinesContextProvider } from "./context/RoutinesContextProvider";
import { PageRoutes } from "./routes/Routes";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner/Spinner";
import "@assets/styles/main.scss";
import { Toaster } from "sonner";

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
