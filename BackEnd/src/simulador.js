 // Importamos Axios para hacer las peticiones HTTP
 import axios from 'axios';

async function simularReservasConcurrencia(usuariosSimultaneos, isolationLevel) {
  const url = 'http://localhost:3010/api/reservar-asiento';
  let exitosas = 0;
  let fallidas = 0;

  const reservas = Array.from({ length: usuariosSimultaneos }).map(async (_, index) => {
    try {
      const response = await axios.post(url, {
        idAsiento: 7 + Math.floor(Math.random() * 10),
        idCliente: index + 1,
        idEvento: 1,
        isolationLevel: isolationLevel,
        estado_reserva: 'pendiente'
      });

      exitosas++;
      console.log(`🟢 Usuario ${index + 1}: ${response.data.mensaje}`);
    } catch (error) {
      fallidas++;
      const errorMsg = error.response?.data?.error || error.message || 'Error desconocido';
      console.error(`🔴 Usuario ${index + 1}: ${errorMsg}`);
    }
  });

  await Promise.all(reservas);

  console.log(`\n🚀 Simulación completada con ${usuariosSimultaneos} usuarios y aislamiento: ${isolationLevel}`);

  // Resumen al final en formato JSON (lo leerá el script principal)
  console.log(JSON.stringify({ exitosas, fallidas }));
}

 
 // Leer parámetros desde la terminal
 const [,, usuarios, isolationLevel] = process.argv;
 
 // Validar que los parámetros estén bien
 if (!usuarios || !isolationLevel) {
   console.error('❌ Uso correcto: node src/simulador.js <numero_usuarios> <nivel_aislamiento>');
   console.error('Ejemplo: node src/simulador.js 10 Serializable');
   process.exit(1);
 }
 
 // Ejecutamos la simulación
 simularReservasConcurrencia(parseInt(usuarios), isolationLevel);