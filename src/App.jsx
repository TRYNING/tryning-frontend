import Rutas from "./routes/routes";
import { AuthContextProvider } from "./context/AuthContextProvider";
import "./common/styles/main.scss";

function App() {
  return (
    <AuthContextProvider>
      <>
        <Rutas />
      </>
    </AuthContextProvider>
  );
}

export default App;
