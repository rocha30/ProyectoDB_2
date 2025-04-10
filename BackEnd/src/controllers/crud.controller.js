import prisma from "../prisma.js";

//funcion para obtener todos los clientes

export async function obtenerClientes(req, res) {
    try {
        const clientes = await prisma.cliente.findMany();
        res.status(200).json(clientes);
    }catch (error) {
        console.error("Error fetching clients:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//funcion para obtener los asientos disponibles

export async function obtenerAsientosDisponibles(req, res) {
    try {
        const asientosReservados = await prisma.reserva_asiento.findMany({
            select: {
                id_asiento: true,
            },
        });
        const idsReservados = asientosReservados.map(a => a.id_asiento);
        const AsientosDisponibles = await prisma.asiento.findMany({
            where: {
                id_asiento: {
                    notIn: idsReservados,
                },
            },
        });

        res.status(200).json(AsientosDisponibles);

    } catch (error){
        console.error("Error obteniendo asientos:", error);
        res.status(500).json({ error: "Error al obtener asientos disponibles" });
    }
}


//funcion para obtener todas las reservas 

export async function ObtenerReservas(req, res) {
    try {
        const reservas = await prisma.reserva.findMany({
            include: {
                cliente: true,
                evento: true,
                reserva_asiento:true,
            },
        });
        res.status(200).json(reservas);

    } catch (error) {
        console.error("Error obteniendo reservas:", error);
        res.status(500).json({ error: "Error al obtener reservas" });
    }
}


/**
 * Función para simular una reserva dentro de una transacción 
 * especificamos el nivel de aislamiento como parámetro 
 * simulamos la concurrencia externamente llamando múltiples veces a esta función
 */

export async function reservarAsiento(req, res) {
    const { idAsiento, idCliente, idEvento, isolationLevel } = req.body;
  
    try {
      let reservaExitosa = false;
      let nuevaReservaId = null;
  
      await prisma.$transaction(async (tx) => {
        const asientoReservado = await tx.reserva_asiento.findFirst({
          where: { id_asiento: idAsiento }
        });
  
        if (asientoReservado) {
          console.log(`🛑 Asiento ${idAsiento} ya está reservado`);
          throw new Error('Asiento ya reservado');
        }
  
        const nuevaReserva = await tx.reserva.create({
          data: {
            id_cliente: idCliente,
            id_evento: idEvento,
            fecha_reserva: new Date(),
            estado_reserva: 'pendiente'
          },
        });
  
        await tx.reserva_asiento.create({
          data: {
            id_reserva: nuevaReserva.id_reserva,
            id_asiento: idAsiento,
          },
        });
  
        reservaExitosa = true;
        nuevaReservaId = nuevaReserva.id_reserva;
      }, {
        isolationLevel: isolationLevel || 'ReadCommitted',
      });
  
      // ✅ Registrar en bitácora después de la transacción
      await prisma.bitacora.create({
        data: {
          id_reserva: nuevaReservaId,
          accion: 'Reserva exitosa',
          descripcion: `Cliente ${idCliente} reservó el asiento ${idAsiento}`
        },
      });
  
      return res.status(200).json({ mensaje: 'Reserva completada' });
  
    } catch (error) {
      console.error('Error en la reserva:', error.message);
  
      // ✅ Registrar error en bitácora
      await prisma.bitacora.create({
        data: {
          id_reserva: null,
          accion: 'Error en reserva',
          descripcion: `Cliente ${idCliente} falló al reservar el asiento ${idAsiento}: ${error.message}`
        },
      });
  
      if (!res.headersSent) {
        return res.status(400).json({ error: error.message });
      }
    }
  }
  

  



//



