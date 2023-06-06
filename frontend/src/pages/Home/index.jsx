import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Home.scss";

export default function Home() {
  const {googleSingUp} = useAuthContext()

  const handleClick = ()=> {
    googleSingUp()
  }
  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Registrate con google</button>
    </div>
  );
}
