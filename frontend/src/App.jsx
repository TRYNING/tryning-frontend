import "./App.scss";
import Rutas from "./routes/routes";
import { AuthContextProvider } from "./context/AuthContextProvider";

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
