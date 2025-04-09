import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
const port = 3010;

// Middleware para parsear JSON
app.use(express.json());


//Endpoint para obtener datos. 
app.get()