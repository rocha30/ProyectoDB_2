import express from 'express';
import {
    obtenerClientes,
    ObtenerReservas,
    obtenerAsientosDisponibles,
    reservarAsiento,

} from '../controllers/crud.controller.js';

const router = express.Router();

// Endpoint para obtener todos los clientes
router.get('/clientes', obtenerClientes);

// Endpoint para obtener todas las reservas
router.get('/reservas', ObtenerReservas);

// Endpoint para obtener asientos disponibles
router.get('/asientos-disponibles', obtenerAsientosDisponibles);

// Endpoint para reservar un asiento (nivel de aislamiento opcional)
router.post('/reservar-asiento', reservarAsiento);



//exportamos el router para usarlo en otros archivos
export default router;
