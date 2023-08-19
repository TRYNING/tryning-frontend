import { SvgHome } from "@assets/icons/svgIcons";
import { SvgRoutine } from "@assets/icons/svgIcons";
import { Header } from "@components/Header/Header";
import { NAV_ICON_SIZE } from "@common/constants/components";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";

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
