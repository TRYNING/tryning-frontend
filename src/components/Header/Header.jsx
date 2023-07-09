import { SvgHome } from "../../common/icons/svgIcons";
import { SvgRoutine } from "../../common/icons/svgIcons";

import logo from "../../assets/images/logo.png";

import { useAuthContext } from "../../hooks/useAuthContext";

export function Header() {
  const { user, SignOut } = useAuthContext();
  return (
    <div className="Header-container">
      <header>
        <div className="container-logo">
          <img src={logo} alt="logo de tryning" />
        </div>
      </header>
      <nav>
        <SvgHome size={25} />
        <SvgRoutine size={25} />
        <div className="container-img" onClick={() => SignOut()}>
          {user && <img src={user.photoURL} alt="imagen del usuario" />}
        </div>
      </nav>
    </div>
  );
}
