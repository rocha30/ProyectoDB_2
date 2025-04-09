// src/test-connection.js

import prisma from './prisma.js';

async function main() {
  try {
    // Intentamos conectar a la base de datos
    await prisma.$connect();
    console.log('✅ Conexión exitosa a la base de datos');

    // Opcional: hacemos una pequeña consulta para verificar
    const clientes = await prisma.cliente.findMany();
    console.log('📋 Clientes encontrados:', clientes);

  } catch (error) {
    console.error('❌ Error conectando a la base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
