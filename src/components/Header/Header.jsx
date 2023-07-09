import { SvgHome } from "../../common/icons/svgIcons";
import { SvgRoutine } from "../../common/icons/svgIcons";

import logo from "../../assets/images/logo.png";

export function Header() {
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
        <div className="container-img">
          <a href="/profile">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
            alt="imagen del usuario"
          />
          </a>
        </div>
      </nav>
    </div>
  );
}
