import "./App.scss";
import Rutas from "./routes/routes";
import { Header } from "./components/Header/Header";
import { AuthContextProvider } from "./context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <>
        <Header />
        <Rutas />
      </>
    </AuthContextProvider>
  );
}

export default App;
