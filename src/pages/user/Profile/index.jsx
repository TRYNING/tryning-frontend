import { useAuthContext } from "@hooks/useAuthContext";
import { ImagePerfil } from "@components/ImagePerfil/ImagePerfil";

export default function PageProfile() {
  const { user } = useAuthContext();
  return (
    <main className="Profile-container">
      <ImagePerfil size="200px" />
      <h1>Perfil de:</h1>
      <h2>{user.email}</h2>
      <p>{user.name}</p>
    </main>
  );
}
