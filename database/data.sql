-- Insertar Recintos
INSERT INTO Recinto (nombre, ubicacion, capacidad) VALUES
('Recinto A', 'Ubicación A', 500),
('Recinto B', 'Ubicación B', 300),
('Recinto C', 'Ubicación C', 400);

-- Insertar Evento
INSERT INTO Evento (nombre_evento, descripcion, fecha, hora, id_recinto) VALUES
('ULTRA MIAMI', 'Festival de música electrónica', '2025-03-28', '18:00:00', 1);

-- Insertar Asientos para el Evento en el Recinto A
INSERT INTO Asiento (id_recinto, fila, numero, tipo) VALUES
(1, 1, 1, 'VIP'),
(1, 1, 2, 'VIP'),
(1, 2, 1, 'General'),
(1, 2, 2, 'General'),
-- (Se continúan insertando hasta completar 20 asientos)
(1, 5, 4, 'General');

truncate table Asiento cascade; 
INSERT INTO Asiento (id_recinto, fila, numero, tipo) VALUES
(1, 1, 1, 'VIP'),
(1, 1, 2, 'VIP'),
(1, 1, 3, 'VIP'),
(1, 2, 1, 'General'),
(1, 2, 2, 'General'),
(1, 2, 3, 'General'),
(1, 3, 1, 'General'),
(1, 3, 2, 'General'),
(1, 3, 3, 'General'),
(1, 4, 1, 'General'),
(1, 4, 2, 'General'),
(1, 4, 3, 'General'),
(1, 5, 1, 'General'),
(1, 5, 2, 'General'),
(1, 5, 3, 'General'),
(1, 6, 1, 'General'),
(1, 6, 2, 'General'),
(1, 6, 3, 'General'),
(1, 7, 1, 'General'),
(1, 7, 2, 'General');

-- Insertar Clientes
INSERT INTO Cliente (nombre, correo, telefono) VALUES
('Juan Pérez', 'juan.perez@example.com', '1234567890'),
('María Gómez', 'maria.gomez@example.com', '0987654321'),
('Carlos López', 'carlos.lopez@example.com', '1122334455'),
('Ana Martínez', 'ana.martinez@example.com', '2233445566'),
('Luis Fernández', 'luis.fernandez@example.com', '3344556677');

-- Insertar Reservas
INSERT INTO Reserva (id_cliente, id_evento, estado_reserva) VALUES
(1, 1, 'Confirmada'),
(2, 1, 'Pendiente'),
(3, 1, 'Cancelada');

-- Asociar Asientos a las Reservas
INSERT INTO Reserva_Asiento (id_reserva, id_asiento) VALUES
(1, 1),
(1, 2),
(2, 3);

-- Insertar registros manuales en la Bitacora
INSERT INTO Bitacora (id_reserva, accion, descripcion) VALUES
(1, 'Reserva inicial creada', 'Reserva creada manualmente para el cliente Juan Pérez'),
(2, 'Intento de reserva', 'Intento de reserva para María Gómez en estado pendiente'),
(3, 'Reserva cancelada', 'Reserva de Carlos López ha sido cancelada');
