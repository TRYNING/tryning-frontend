const PuertosPermitidos = [7000, 5173];
const DireccionesPermitidas = ["https://www.pagina1.com"];

export const verificarAcceso = (req, res, next) => {
  const clientIP = req.ip;
  const host = req.get("host");

  if (esDireccionPermitida(host) || esPuertoPermitido(host)) {
    // La dirección o el puerto están permitidos, continúa con la solicitud
    next();
  } else {
    // La dirección o el puerto no están permitidos, envía una respuesta de acceso denegado
    res.status(403).json({ error: "Acceso denegado a la api" });
  }
};

const esPuertoPermitido = (host) => {
  const puerto = host.split(":")[1];
  return PuertosPermitidos.includes(Number(puerto));
};

const esDireccionPermitida = (host) => {
  return DireccionesPermitidas.includes(host);
};
