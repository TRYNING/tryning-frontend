import { SvgHome } from "@assets/icons/svgIcons";
import { SvgRoutine } from "@assets/icons/svgIcons";
import { Header } from "@components/Header/Header";
import { NAV_ICON_SIZE } from "@common/constants/components";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
import { SvgUsers } from "../../assets/icons/svgIcons";

export function NavbarTrainer() {
  return (
    <div className="NavbarTrainer-container">
      <Header />
      <nav className="footer-nav">
        <SvgHome size={NAV_ICON_SIZE} />
        <SvgRoutine size={NAV_ICON_SIZE} />
        <SvgUsers size={NAV_ICON_SIZE} />
        <ImagePerfil />
      </nav>
    </div>
  );
}
