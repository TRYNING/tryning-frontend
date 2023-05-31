import { Link } from "react-router-dom";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <Link to="/login">login</Link>
      <h1>Home</h1>
    </div>
  );
}
