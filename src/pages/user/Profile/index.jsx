import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
import { ListOfImage } from "./components/ListOfImage/ListOfImage";
import { COLORS } from "@common/constants/colors";
import { useParams } from "react-router-dom";
import { useUser } from "@hooks/useUser";

export default function PageProfile() {
  const { username } = useParams();
  const { user } = useUser({ username });

  return (
    <main className="min-h-screen">
      <header className="profile-header">
        <div className="header-img">
          <ImagePerfil size="100px" borderColor={COLORS.primary} />
        </div>
      </header>
      <section className="profile-info"></section>
      <section>
        <ListOfImage />
      </section>
    </main>
  );
}
