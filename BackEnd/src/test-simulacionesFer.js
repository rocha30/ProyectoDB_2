import { exec } from 'child_process';
import { performance } from 'perf_hooks';

const simulaciones = [5, 10, 20, 30];
const isolationLevel = 'ReadCommitted'; // Puedes cambiar a 'Serializable' si quieres

function correrSimulacion(usuarios) {
  return new Promise((resolve) => {
    console.log(`\n🚀 Simulación con ${usuarios} usuarios iniciando...`);
    const startTime = performance.now();

    exec(`node simulador.js ${usuarios} ${isolationLevel}`, (error, stdout, stderr) => {
      const endTime = performance.now();
      const duracionSegundos = ((endTime - startTime) / 1000).toFixed(2);

      if (error) {
        console.error(`Error en simulación de ${usuarios} usuarios:`, error);
        return resolve();
      }

      // Contar éxitos y fallos en base al output del simulador
      const exitos = (stdout.match(/🟢 Usuario/g) || []).length;
      const fallos = (stdout.match(/🔴 Usuario/g) || []).length;

      console.log(stdout);
      console.log(`✅ Reservas exitosas: ${exitos}`);
      console.log(`❌ Reservas fallidas: ${fallos}`);
      console.log(`⏱️ Tiempo de ejecución: ${duracionSegundos} segundos`);

      resolve();
    });
  });
}

async function correrTodasSimulaciones() {
  for (const usuarios of simulaciones) {
    await correrSimulacion(usuarios);
  }
  console.log('\n🎉 Todas las simulaciones completadas.');
}

correrTodasSimulaciones();
