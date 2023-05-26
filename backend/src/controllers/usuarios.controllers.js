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
      "INSERT INTO usuarios (id_usuario, nombre_usuario, apellido_usuario, edad_usuario, genero_usuario, direccion_usuario, email_usuario, telefono_usuario, id_entrenador) VALUES (?,?,?,?,?,?,?,?,?)",
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

export const patchUsuario = async (req, res) => {
  const { idUsuario } = req.params;

  const {
    nombreUsuario,
    apellidoUsuario,
    edadUsuario,
    generoUsuario,
    direccionUsuario,
    emailUsuario,
    telefonoUsuario,
  } = req.body;
  try {
    const [response] = await pool.query(
      "UPDATE usuarios SET nombre_usuario = IFNULL(?,nombre_usuario), apellido_usuario = IFNULL(?,apellido_usuario), edad_usuario = IFNULL(?,edad_usuario), genero_usuario = IFNULL(?,genero_usuario), direccion_usuario = IFNULL(?,direccion_usuario), email_usuario = IFNULL(?,email_usuario), telefono_usuario = IFNULL(?,telefono_usuario) WHERE id_usuario = ?",
      [
        nombreUsuario,
        apellidoUsuario,
        edadUsuario,
        generoUsuario,
        direccionUsuario,
        emailUsuario,
        telefonoUsuario,
        idUsuario,
      ]
    );
    if (response.affectedRows === 0)
      return res.status(404).json({
        mensaje: "usuario no encotrado",
      });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
