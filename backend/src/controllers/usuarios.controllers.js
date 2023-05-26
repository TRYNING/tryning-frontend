import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT * FROM usuarios");
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUsuario = async (req, res) => {
  const { idUsuario } = req.params;
  try {
    const [response] = await pool.query(
      "SELECT * FROM usuarios WHERE id_usuario = ?",
      [idUsuario]
    );
    if (response.length <= 0)
      return res.status(404).json({ error: "no se encotro el usuario" });
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postUsuario = async (req, res) => {
  const {
    idUsuario,
    nombreUsuario,
    apellidoUsuario,
    edadUsuario,
    generoUsuario,
    direccionUsuario,
    emailUsuario,
    telefonoUsuario,
    idEntrenador,
  } = req.body;
  try {
    const [response] = await pool.query(
      "INSERT INTO usuarios (`id_usuario`, `nombre_usuario`, `apellido_usuario`, `edad_usuario`, `genero_usuario`, `direccion_usuario`, `email_usuario`, `telefono_usuario`, `id_entrenador`) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        idUsuario,
        nombreUsuario,
        apellidoUsuario,
        edadUsuario,
        generoUsuario,
        direccionUsuario,
        emailUsuario,
        telefonoUsuario,
        idEntrenador,
      ]
    );

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
