-- CreateTable
CREATE TABLE "asiento" (
    "id_asiento" SERIAL NOT NULL,
    "id_recinto" INTEGER NOT NULL,
    "fila" INTEGER NOT NULL,
    "numero" INTEGER NOT NULL,
    "tipo" VARCHAR(50),

    CONSTRAINT "asiento_pkey" PRIMARY KEY ("id_asiento")
);

-- CreateTable
CREATE TABLE "bitacora" (
    "id_bitacora" SERIAL NOT NULL,
    "id_reserva" INTEGER,
    "accion" VARCHAR(100) NOT NULL,
    "fecha" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "descripcion" TEXT,

    CONSTRAINT "bitacora_pkey" PRIMARY KEY ("id_bitacora")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20),

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "evento" (
    "id_evento" SERIAL NOT NULL,
    "nombre_evento" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "fecha" DATE NOT NULL,
    "hora" TIME(6) NOT NULL,
    "id_recinto" INTEGER NOT NULL,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "recinto" (
    "id_recinto" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "ubicacion" VARCHAR(150) NOT NULL,
    "capacidad" INTEGER NOT NULL,

    CONSTRAINT "recinto_pkey" PRIMARY KEY ("id_recinto")
);

-- CreateTable
CREATE TABLE "reserva" (
    "id_reserva" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "fecha_reserva" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "estado_reserva" VARCHAR(50) NOT NULL,

    CONSTRAINT "reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateTable
CREATE TABLE "reserva_asiento" (
    "id_reserva_asiento" SERIAL NOT NULL,
    "id_reserva" INTEGER NOT NULL,
    "id_asiento" INTEGER NOT NULL,

    CONSTRAINT "reserva_asiento_pkey" PRIMARY KEY ("id_reserva_asiento")
);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_correo_key" ON "cliente"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "reserva_asiento_id_asiento_key" ON "reserva_asiento"("id_asiento");

-- AddForeignKey
ALTER TABLE "asiento" ADD CONSTRAINT "asiento_id_recinto_fkey" FOREIGN KEY ("id_recinto") REFERENCES "recinto"("id_recinto") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bitacora" ADD CONSTRAINT "bitacora_id_reserva_fkey" FOREIGN KEY ("id_reserva") REFERENCES "reserva"("id_reserva") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evento" ADD CONSTRAINT "evento_id_recinto_fkey" FOREIGN KEY ("id_recinto") REFERENCES "recinto"("id_recinto") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva" ADD CONSTRAINT "reserva_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "evento"("id_evento") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva_asiento" ADD CONSTRAINT "reserva_asiento_id_asiento_fkey" FOREIGN KEY ("id_asiento") REFERENCES "asiento"("id_asiento") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserva_asiento" ADD CONSTRAINT "reserva_asiento_id_reserva_fkey" FOREIGN KEY ("id_reserva") REFERENCES "reserva"("id_reserva") ON DELETE CASCADE ON UPDATE CASCADE;
