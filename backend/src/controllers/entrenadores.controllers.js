import { pool } from "../db.js";

export const getEntrenadores = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT * FROM entrenadores");
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEntrenador = async (req, res) => {
  const { idEntrenador } = req.params;
  try {
    const [response] = await pool.query(
      "SELECT * FROM entrenadores WHERE id_entrenador = ?",
      [idEntrenador]
    );
    if (response.length <= 0)
      return res.status(404).json({ error: "no se encotro el entrenador" });
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const postEntrenador = async (req, res) => {
  const {
    idEntrenador,
    nombreEntrenador,
    apellidoEntrenador,
    edadEntrenador,
    especialidadEntrenador,
    experienciaEntrenador,
    telefonoEntrenador,
    emailEntrenador,
  } = req.body;
  try {
    const [response] = await pool.query(
      "INSERT INTO entrenadores (id_entrenador, nombre_entrenador, apellido_entrenador, edad_entrenador, especialidad_entrenador, experiencia_entrenador, telefono_entrenador, email_entrenador) VALUES (?,?,?,?,?,?,?,?)",
      [
        idEntrenador,
        nombreEntrenador,
        apellidoEntrenador,
        edadEntrenador,
        especialidadEntrenador,
        experienciaEntrenador,
        telefonoEntrenador,
        emailEntrenador,
      ]
    );

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
