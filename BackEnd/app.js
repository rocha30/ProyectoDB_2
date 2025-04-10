import express from 'express';
import reservaRoutes from './src/routes/reserva.routes.js';
import cors from 'cors';  // Importamos el middleware de CORS

const app = express();
const port = 3010;

app.use(cors()); 
app.use(express.json());

// ✅ Usamos las rutas de reserva
app.use('/api', reservaRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port} 🚀`);
});
