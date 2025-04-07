# Proyecto 2 — Simulación de Reservas Concurrentes

## 📚 Descripción

Este proyecto simula un sistema de reservas concurrentes para eventos.  
La base de datos está diseñada para gestionar:

- Eventos
- Recintos
- Asientos
- Clientes
- Reservas
- Registro de actividad mediante la Bitácora

La estructura está preparada para realizar pruebas de concurrencia utilizando Node.js, PostgreSQL y múltiples hilos o procesos simulados.

---

## 🗂️ Estructura de la carpeta `/database`

| Archivo | Descripción |
|---------|-------------|
| `ddl.sql` | Script de creación de las tablas y relaciones de la base de datos. |
| `data.sql` | Script de carga de datos iniciales: recintos, evento ULTRA MIAMI, asientos, clientes, reservas iniciales y registros manuales en la bitácora. |
| `reset.sql` | Limpia la base de datos eliminando todas las tablas para reiniciar desde cero. |
| `init.sql` | Automatiza el flujo: ejecuta `reset.sql`, luego `ddl.sql` y finalmente `data.sql`. Te deja la base lista para hacer pruebas. |

---

## 🚀 Cómo usar los archivos SQL

### 1️⃣ Paso 1: Inicializar base de datos limpia

Desde la terminal, estando dentro de la carpeta `/database`, ejecuta:

```bash
psql -U tu_usuario -d tu_basededatos -f init.sql


verificar las entidades creadas se puede ejecutar
psql -U tu_usuario -d tu_basededatos
\dt

