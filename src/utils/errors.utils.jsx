export function errorMessageLogin(errorCode) {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Correo electrónico incorrecto";
    case "auth/user-disabled":
      return "Usuario deshabilitado";
    case "auth/user-not-found":
      return "Usuario no encontrado";
    case "auth/wrong-password":
      return "Contraseña incorrecta";
    default:
      return "Error de inicio de sesión";
  }
}

export function errorMessageRegister(errorCode) {
  switch (errorCode) {
    case "auth/email-already-in-use":
      return "El correo electrónico ya está en uso";
    case "auth/invalid-email":
      return "Correo electrónico no válido";
    case "auth/weak-password":
      return "La contraseña es débil";
    default:
      return "Error al crear el usuario";
  }
}
