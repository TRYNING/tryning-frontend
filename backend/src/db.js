import mysql from "mysql2/promise";

// Creamos un grupo de conexiones con los parámetros de conexión a la base de datos
export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_entrenamiento",
});
