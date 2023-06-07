import { useAuthContext } from "../../hooks/useAuthContext";
import { Header } from "../../components/Header/Header";
import { SignOutButton, SignUpButton } from "../../components/buttons/Buttons";
import "../../components/buttons/Buttons.scss";
import "./Home.scss";

export default function Home() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <>
      <Header />
      <main>
        <h1>Home</h1>
        <SignUpButton label="Registrarse con google" />
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
              <SignOutButton label="Cerrar Sesion" />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
