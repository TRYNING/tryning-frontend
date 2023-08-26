import imgNotFound from "@assets/images/userNotFound.webp";
import { useState } from "react";
import { useAuthContext } from "@hooks/useAuthContext";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";

export function ImagePerfil() {
  const { user } = useAuthContext();
  const [imageError, setImageError] = useState(false);
  return (
    <Link to={`${PrivateRoutes.PROFILE}`} className="Image-perfil">
      {user?.urlImage && !imageError ? (
        <img
          src={user.urlImage}
          alt={`imagen de perfil del usuario ${user.name}`}
          onError={() => setImageError(true)}
        />
      ) : (
        <img src={imgNotFound} alt="usuario no encontrado" />
      )}
    </Link>
  );
}
