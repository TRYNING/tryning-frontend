import { useAuthContext } from "@hooks/useAuthContext";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";
import { ListOfImage } from "./components/ListOfImage/ListOfImage";

export default function PageProfile() {
  const { user } = useAuthContext();
  return (
    <main className="Profile-container">
      <div className="profile-header">
        <ImagePerfil size="120px" />
        <h2>{user.name}</h2>
        <p className="profile-desc">{user.desc}</p>
      </div>
      <div className="profile-section">
       <ListOfImage/>
      </div>
    </main>
     
  );
}
