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
    const {idAsiento, idCliente, idEvento, isolationLevel} = req.body;

    try {
        await prisma.$transaction(async (tx)=>{
            const asientosReservado = await tx.reserva_asiento.findFirst({
                where:{id_asiento: idAsiento},

        });
        
        if (asientosReservado) {
            console.log('Asiento ${idAsiento} ya reservado');
            throw new Error('Asiento ya reservado');
        }

        //crear la reserva 
        const nuevaReserva = await tx.reserva.create({
            data: {
                id_cliente: idCliente,
                id_evento: idEvento,
                fecha_reserva: new Date(),
                estado_reserva: 'pendiente',
            },
        });

        await tx.reserva_asiento.create({
            data: {
                id_asiento: idAsiento,
                id_reserva: nuevaReserva.id_reserva,
            },
        });

        console.log('Reserva exitosa - Cliente ${idCliente} - Evento ${idEvento} - Asiento ${idAsiento}');
    },{
        isolationLevel: isolationLevel || 'ReadCommitted', //valor por defecto por si no se especifica
    });

    res.status(200).json({ message: 'Reserva exitosa' });

    }catch (error) {
        console.error('Error reservando asiento:', error);
        res.status(500).json({ error: 'Error reservando asiento' });
    }


}




