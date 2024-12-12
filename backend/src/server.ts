import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";

dotenv.config(); // Cargar las variables de entorno

const PORT = process.env.PORT || 4000;

// Conectar a la base de datos y luego iniciar el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("Error al iniciar la aplicación:", error);
  process.exit(1); // Salir del proceso si ocurre un error
});

