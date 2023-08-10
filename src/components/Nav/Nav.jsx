import { SvgHome } from "../../common/icons/svgIcons";
import { SvgRoutine } from "../../common/icons/svgIcons";
import { Header } from "../Header/Header";
import { NAV_ICON_SIZE } from "../../common/constants/components";
import { ImagePerfil } from "../ImagePerfil/ImagePerfil";

export function Nav() {
  return (
    <div className="Nav-container">
      <Header />
      <nav className="footer-nav">
        <SvgHome size={NAV_ICON_SIZE} />
        <SvgRoutine size={NAV_ICON_SIZE} />
        <ImagePerfil />
      </nav>
    </div>
  );
}
