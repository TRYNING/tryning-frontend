import { SvgHome } from "../../common/icons/svgIcons";
import { SvgRoutine } from "../../common/icons/svgIcons";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Header } from "../Header/Header";

export function Nav() {
  const { user, SignOut } = useAuthContext();
  return (
    <div className="Nav-container">
      <Header />
      <nav className="footer-nav">
        <SvgHome size={25} />
        <SvgRoutine size={25} />
        <div className="container-img" onClick={() => SignOut()}>
          {user && <img src={user.photoURL} alt="imagen del usuario" />}
        </div>
      </nav>
    </div>
  );
}
