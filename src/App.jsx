import { AuthContextProvider } from "./context/AuthContextProvider";
import { PageRoutes } from "./routes/Routes";
import "./common/styles/main.scss";

function App() {
  return (
    <AuthContextProvider>
      <PageRoutes />
    </AuthContextProvider>
  );
}

export default App;
