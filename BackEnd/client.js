// client.js

import express from 'express';
import pkg from 'pg';

const { Client } = pkg;

// ✅ Declaramos una sola vez client
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'ProyectoBD2',
  password: 'roc23501',
  port: 5432,
});

const app = express();
const port = 3010;

// ✅ Nos conectamos a la base de datos
client.connect()
  .then(() => {
    console.log('Conexión exitosa a PostgreSQL 🚀');


    // ✅ Arrancamos el servidor
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  })
  .catch(err => {
    console.error('Error de conexión a PostgreSQL ❌', err.stack);
  });


