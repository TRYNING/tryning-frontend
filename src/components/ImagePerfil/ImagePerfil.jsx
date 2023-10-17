import imgNotFound from "@assets/images/userNotFound.webp";
import { useState } from "react";
import { useAuthContext } from "@hooks/useAuthContext";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";

export function ImagePerfil({ size = "30px", className }) {
  const { user } = useAuthContext();
  const [imageError, setImageError] = useState(false);
  return (
    <Link
      to={`${PrivateRoutes.PROFILE}`}
      className={`${className} rounded-full overflow-hidden border-[1px]`}
    >
      {user && !imageError ? (
        <img
          src={user.photoURL}
          alt={`imagen de perfil del usuario ${user.name}`}
          onError={() => setImageError(true)}
          width={size}
          height={size}
        />
      ) : (
        <img
          src={imgNotFound}
          alt="usuario no encontrado"
          width={size}
          height={size}
        />
      )}
    </Link>
  );
}
