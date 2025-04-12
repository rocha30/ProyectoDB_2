# Proyecto de Simulación de Reservas Concurrentes

Este proyecto consiste en la simulación de un sistema de reservas concurrentes para eventos, desarrollado como parte de la clase de **Base de Datos 1**.  
La aplicación utiliza **Node.js**, **PostgreSQL**, y **Prisma** para realizar operaciones sobre una base de datos de reservas de asientos.

---

## 📂 Estructura del proyecto

ProyectoDB_2/ ├── BackEnd/ # Backend Node.js con Express y Prisma │ ├── src/ │ │ ├── controllers/ # Lógica de operaciones CRUD │ │ ├── routes/ # Definición de rutas API │ │ ├── app.js # Configuración y arranque de la app │ │ └── prisma.js # Configuración de conexión a PostgreSQL ├── ddl.sql # Script de creación de tablas ├── data.sql # Script de inserción de datos iniciales ├── init.sql # Script para inicializar la base de datos completa ├── reset.sql # Script para limpiar la base de datos ├── package.json # Dependencias de Node.js └── README.md # Documentación del proyecto


---

## ⚙️ Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL**

---

## 🗃️ Descripción de archivos SQL

- **ddl.sql**:  
  Crea todas las tablas necesarias (`clientes`, `asientos`, `reservas`, `bitácora`).

- **data.sql**:  
  Inserta datos de prueba para simular clientes, asientos disponibles y reservas iniciales.

- **reset.sql**:  
  Limpia la base de datos eliminando todos los registros existentes.

- **init.sql**:  
  Ejecuta `ddl.sql` + `data.sql` para inicializar la base de datos desde cero.

---

## 🚀 Instalación y ejecución

### Requisitos previos

- Node.js instalado
- PostgreSQL instalado y configurado

### Pasos para ejecutar:

1. **Clona el repositorio:**

```bash
git clone https://github.com/rocha30/ProyectoDB_2.git
cd ProyectoDB_2
Instala las dependencias de Node.js:
npm install
Configura la base de datos:
Crea una base de datos PostgreSQL vacía.
Actualiza la conexión en el archivo BackEnd/src/prisma.js si es necesario.
Inicializa la base de datos ejecutando:
psql -U tu_usuario -d tu_base_de_datos -f init.sql
Ejecuta la aplicación Node.js:
node BackEnd/src/app.js
La API estará disponible en:
http://localhost:3010
🧩 Funcionalidades del proyecto

CRUD para:
Clientes
Asientos
Reservas
Bitácora de operaciones
Simulación de concurrencia mediante múltiples solicitudes simultáneas (puedes probar usando herramientas como Postman o mediante scripts de prueba).
```
