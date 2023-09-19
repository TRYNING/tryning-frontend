import { SvgHome } from "@assets/icons/svgIcons";
import { SvgRoutine } from "@assets/icons/svgIcons";
import { Header } from "@components/Header/Header";
import { NAV_ICON_SIZE } from "@common/constants/components";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";

export function NavbarUser() {
  return (
    <div className="fixed w-full h-screen top-0 left-0 flex flex-col justify-between z-50 pointer-events-none ">
      <Header />
      <nav className="flex justify-around items-center p-4 bg-[var(--color-primary)] pointer-events-auto">
        <SvgHome size={NAV_ICON_SIZE} />
        <SvgRoutine size={NAV_ICON_SIZE} />
        <ImagePerfil />
      </nav>
    </div>
  );
}
