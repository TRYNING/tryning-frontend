import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";

export default function Home() {
  return (
    <div className="Home-container">
      <main>
        <Header />
        <h1>Home</h1>
      </main>
      <Navbar />
    </div>
  );
}