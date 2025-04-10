import { exec } from 'child_process';

const simulaciones = [5, 10, 20, 30];
const isolationLevel = 'ReadCommitted'; // Puedes cambiar aquí si quieres probar SERIALIZABLE también

function correrSimulacion(usuarios) {
  return new Promise((resolve) => {
    console.log(`\n🚀 Simulación con ${usuarios} usuarios iniciando...`);
    exec(`node src/simulador.js ${usuarios} ${isolationLevel}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error en simulación de ${usuarios} usuarios:`, error);
      }
      console.log(stdout);
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
