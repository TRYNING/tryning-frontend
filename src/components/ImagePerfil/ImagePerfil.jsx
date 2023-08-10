import imgNotFound from "../../assets/images/userNotFound.png";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

export function ImagePerfil() {
  const { user, SignOut } = useAuthContext();
  const [imageError, setImageError] = useState(false);
  return (
    <div className="Image-perfil" onClick={() => SignOut()}>
      {user && !imageError ? (
        <img
          src={user.photoURL}
          alt="imagen del usuario"
          onError={() => setImageError(true)}
        />
      ) : (
        <img src={imgNotFound} alt="usuario no encontrado" />
      )}
    </div>
  );
}
