const express = require ('express');
const { PrismaClient } = require('@prisma/client');


const prisma = new PrismaClient();
const crud = express.crud();



//Endpoint para obtener datos. 
app.get()
