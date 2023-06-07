import { useAuthContext } from "../../hooks/useAuthContext";
import { Header } from "../../components/Header/Header";
import "../../components/buttons/Buttons.scss";
import "./Home.scss";

export default function Home() {
  const { user, googleSignUp, SignOut } = useAuthContext();
  console.log(user);
  const handleClick = () => {
    googleSignUp();
  };

  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <button onClick={handleClick}>Registrate con google</button>
        <section>
          {user && (
            <div className="user">
              <h1>
                Bienvenido <span>{user.displayName}</span>
              </h1>
              <div className="ph-mail">
                <img src={user.photoURL} />
                <p>{user.email}</p>
              </div>
              <button onClick={SignOut}>Cerrar sesion</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
