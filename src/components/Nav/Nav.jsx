import { SvgHome } from "../../common/icons/svgIcons";
import { SvgRoutine } from "../../common/icons/svgIcons";
import { useAuthContext } from "../../hooks/useAuthContext";

export function Nav() {
  const { user, SignOut } = useAuthContext();
  return (
    <div className="Nav-container">
      <nav>
        <SvgHome size={25} />
        <SvgRoutine size={25} />
        <div className="container-img" onClick={() => SignOut()}>
          {user && <img src={user.photoURL} alt="imagen del usuario" />}
        </div>
      </nav>
      ;
    </div>
  );
}
