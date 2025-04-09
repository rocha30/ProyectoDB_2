// src/prisma.js

import { PrismaClient } from '@prisma/client';

// Creamos una sola instancia de PrismaClient
const prisma = new PrismaClient();

// Exportamos la instancia para usarla en otros archivos
export default prisma;




