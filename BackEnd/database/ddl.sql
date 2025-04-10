

-- Tabla Recinto
CREATE TABLE Recinto (
    id_recinto SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(150) NOT NULL,
    capacidad INT NOT NULL
);

-- Tabla Asiento
CREATE TABLE Asiento (
    id_asiento SERIAL PRIMARY KEY,
    id_recinto INT NOT NULL,
    fila INT NOT NULL,
    numero INT NOT NULL,
    tipo VARCHAR(50),
    FOREIGN KEY (id_recinto) REFERENCES Recinto(id_recinto)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabla Evento
CREATE TABLE Evento (
    id_evento SERIAL PRIMARY KEY,
    nombre_evento VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    id_recinto INT NOT NULL,
    FOREIGN KEY (id_recinto) REFERENCES Recinto(id_recinto)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabla Cliente
CREATE TABLE Cliente (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    telefono VARCHAR(20)
);

-- Tabla Reserva
CREATE TABLE Reserva (
    id_reserva SERIAL PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_evento INT NOT NULL,
    fecha_reserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_reserva VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_evento) REFERENCES Evento(id_evento)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabla Reserva_Asiento
CREATE TABLE Reserva_Asiento (
    id_reserva_asiento SERIAL PRIMARY KEY,
    id_reserva INT NOT NULL,
    id_asiento INT NOT NULL,
    UNIQUE (id_reserva, id_asiento),
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id_reserva)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (id_asiento) REFERENCES Asiento(id_asiento)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Tabla Bitacora
CREATE TABLE Bitacora (
    id_bitacora SERIAL PRIMARY KEY,
    id_reserva INT,
    accion VARCHAR(100) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    descripcion TEXT,
    FOREIGN KEY (id_reserva) REFERENCES Reserva(id_reserva)
        ON DELETE SET NULL
        ON UPDATE CASCADE
);




