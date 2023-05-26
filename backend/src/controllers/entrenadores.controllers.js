import { pool } from "../db.js";

// Función para obtener todos los entrenadores
export const getEntrenadores = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT * FROM entrenadores");
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Función para obtener un entrenador por su ID
export const getEntrenador = async (req, res) => {
  const { idEntrenador } = req.params;
  try {
    const [response] = await pool.query(
      "SELECT * FROM entrenadores WHERE id_entrenador = ?",
      [idEntrenador]
    );
    if (response.length <= 0)
      return res.status(404).json({ error: "No se encontró el entrenador" });
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Función para crear un nuevo entrenador
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
