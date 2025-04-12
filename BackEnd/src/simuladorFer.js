 // Importamos Axios para hacer las peticiones HTTP
 import axios from 'axios';

 // Función que simula múltiples usuarios tratando de reservar el mismo asiento
 async function simularReservasConcurrencia(usuariosSimultaneos, isolationLevel) {
   const url = 'http://localhost:3010/api/reservar-asiento';
 
   const reservas = Array.from({ length: usuariosSimultaneos }).map(async (_, index) => {
     try {
       const response = await axios.post(url, {
         idAsiento: 20, // Todos intentan reservar el asiento 1
         idCliente: index + 1, // Simulamos un cliente distinto para cada intento
         idEvento: 1,
         isolationLevel: isolationLevel,
         estado_reserva: 'pendiente'
       });
 
       console.log(`🟢 Usuario ${index + 1}: ${response.data.mensaje}`);
     } catch (error) {
       const errorMsg = error.response?.data?.error || error.message || 'Error desconocido';
       console.error(`🔴 Usuario ${index + 1}: ${errorMsg}`);
     }
   });
 
   await Promise.all(reservas);
 
   console.log(`\n🚀 Simulación completada con ${usuariosSimultaneos} usuarios y aislamiento: ${isolationLevel}`);
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