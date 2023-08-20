import imgNotFound from "@assets/images/userNotFound.webp";
import { useState } from "react";
import { useAuthContext } from "@hooks/useAuthContext";

export function ImagePerfil() {
  const { user, SignOut } = useAuthContext();
  const [imageError, setImageError] = useState(false);
  return (
    <div className="Image-perfil" onClick={() => SignOut()}>
      {user?.urlImage && !imageError ? (
        <img
          src={user.urlImage}
          alt={`imagen de perfil del usuario ${user.name}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <img src={imgNotFound} alt="usuario no encontrado" />
      )}
    </div>
  );
}
