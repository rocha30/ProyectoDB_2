-- Archivo reset.sql
-- Elimina todas las tablas para limpiar completamente la base de datos
-- Esto permite volver a cargar la estructura y datos desde cero

-- Importante: primero eliminamos las tablas que dependen de otras

-- Eliminar tabla intermedia entre Reserva y Asiento
DROP TABLE IF EXISTS Reserva_Asiento CASCADE;

-- Eliminar la Bitácora
DROP TABLE IF EXISTS Bitacora CASCADE;

-- Eliminar Reservas
DROP TABLE IF EXISTS Reserva CASCADE;

-- Eliminar Asientos
DROP TABLE IF EXISTS Asiento CASCADE;

-- Eliminar Eventos
DROP TABLE IF EXISTS Evento CASCADE;

-- Eliminar Clientes
DROP TABLE IF EXISTS Cliente CASCADE;

-- Eliminar Recintos
DROP TABLE IF EXISTS Recinto CASCADE;

-- Opcional: puedes verificar que quedó limpio con
-- \dt
-- para ver que no haya tablas.

-- Mensaje opcional si ejecutas desde psql interactivo:
-- SELECT 'Base de datos limpiada correctamente' AS mensaje;
 