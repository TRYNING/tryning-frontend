import { SvgHome } from "@assets/icons/svgIcons";
import { SvgRoutine } from "@assets/icons/svgIcons";
import { Header } from "@components/Header";
import { NAV_ICON_SIZE } from "@common/constants/components";
import { ImagePerfil } from "@components/ImagePerfil";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";

export function NavbarUser() {
  return (
    <div className="fixed w-full h-screen top-0 left-0 flex flex-col justify-between z-50 pointer-events-none ">
      <Header />
      <nav className="relative bottom-0 flex justify-around items-center p-4 bg-[var(--color-primary)] pointer-events-auto lg:hidden z-50">
        <Link to={`/${PrivateRoutes.HOME}`}>
          <SvgHome size={NAV_ICON_SIZE} />
        </Link>
        <Link to={`/${PrivateRoutes.ROUTINES}`}>
          <SvgRoutine size={NAV_ICON_SIZE} />
        </Link>
        <ImagePerfil />
      </nav>
    </div>
  );
}
