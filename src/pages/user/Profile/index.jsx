import { useAuthContext } from "@hooks/useAuthContext";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
import { ListOfImage } from "./components/ListOfImage/ListOfImage";
import { COLORS } from "@common/constants/colors";

export default function PageProfile() {
  const { user } = useAuthContext();

  return (
    <main className="Profile-container">
      <header className="profile-header">
        <div className="header-img">
          <ImagePerfil size="100px" borderColor={COLORS.primary} />
        </div>
      </header>
      <section className="profile-info">
        
        <h3>{user.name}</h3>
        <p>{user.desc}</p>
      </section>
      <section>
        <ListOfImage />
      </section>
    </main>
  );
}
