import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Home.scss";



export default function Home() {
  const {user, googleSignUp, outSign} = useAuthContext()
  console.log(user)
  const handleClick = ()=> {
    googleSignUp()
  }

  const cerrarSesion = () => {
    outSign()
  }  
  return (
    <div>
      <Link to="/login">login</Link>
      <h1>Home</h1>
      <button onClick={handleClick}>Registrate con google</button>
      {
        user && (
          <div>
            <h1>el usuario es {user.displayName}</h1>
            <div>{user.email}</div>
            <img src={user.photoURL}/>
            <button onClick={cerrarSesion}>cerrar sesion</button>
          </div>
        )
      }
    </div>
  );
}
