# Proyecto de Simulación de Reservas Concurrentes

Este proyecto implementa un sistema robusto de reservas concurrentes para eventos, desarrollado como parte de la clase de **Base de Datos 1**. La aplicación está diseñada para manejar múltiples solicitudes simultáneas manteniendo la integridad de los datos, utilizando **Node.js**, **Express**, **PostgreSQL**, **Prisma ORM** en el backend y **React**, **TypeScript**, **Vite** en el frontend.

## 📚 Descripción

El sistema gestiona las siguientes entidades:

- **Eventos**: Conciertos, conferencias y otros tipos de reuniones programadas
- **Recintos**: Lugares físicos donde se realizan los eventos
- **Asientos**: Ubicaciones específicas dentro de los recintos
- **Clientes**: Usuarios que realizan las reservas
- **Reservas**: Asignaciones de asientos a clientes para eventos específicos
- **Bitácora**: Registro detallado de todas las operaciones realizadas en el sistema

La arquitectura está optimizada para realizar pruebas de concurrencia y verificar el correcto manejo de transacciones simultáneas.

---

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** con Express
- **Prisma ORM**
- **PostgreSQL**

### Frontend
- **React 18**
- **TypeScript**
- **Vite** (Herramienta de desarrollo rápido)
- **ESLint** para calidad de código

---

## 📂 Estructura del Proyecto

```
ProyectoDB_2/
├── BackEnd/                           # Backend Node.js con Express y Prisma
│   ├── src/
│   │   ├── controllers/               # Lógica de operaciones CRUD
│   │   ├── routes/                    # Definición de rutas API
│   │   ├── app.js                     # Configuración y arranque de la app
│   │   └── prisma.js                  # Configuración de conexión a PostgreSQL
├── FrontEnd_/                         # Frontend React con TypeScript + Vite
│   ├── public/                        # Archivos estáticos
│   ├── src/                           # Código fuente del frontend
│   │   ├── assets/                    # Recursos visuales
│   │   │   ├── concierto_playa.jpg    # Imagen de concierto en playa
│   │   │   ├── concierto.jpg          # Imagen de concierto
│   │   │   └── react.svg              # Logo de React
│   │   ├── fonts/                     # Fuentes tipográficas
│   │   │   └── FolioBQ-BoldExtended.otf # Fuente personalizada
│   │   ├── layout/                    # Componentes de layout
│   │   │   └── DefaultLayout.tsx      # Layout principal
│   │   ├── routes/                    # Páginas y rutas 
│   │   │   ├── asignacion.tsx         # Página de asignación
│   │   │   ├── Home.tsx               # Página principal
│   │   │   └── Reservas.tsx           # Página de reservas
│   │   ├── App.css                    # Estilos del componente App
│   │   ├── App.tsx                    # Componente App principal
│   │   ├── asignacion.css             # Estilos para la página de asignación
│   │   ├── index.css                  # Estilos globales
│   │   ├── main.tsx                   # Punto de entrada principal
│   │   ├── reservas.css               # Estilos para la página de reservas
│   │   └── vite-env.d.ts              # Declaraciones de tipos para Vite
│   ├── eslint.config.js               # Configuración de ESLint
│   ├── index.html                     # HTML principal
│   ├── package-lock.json              # Lock file de dependencias
│   ├── package.json                   # Definición de dependencias
│   ├── README.md                      # Documentación específica del frontend
│   ├── tsconfig.app.json              # Configuración de TypeScript para la app
│   ├── tsconfig.json                  # Configuración general de TypeScript
│   ├── tsconfig.node.json             # Configuración de TypeScript para Node
│   └── vite.config.ts                 # Configuración de Vite
├── ddl.sql                            # Script de creación de tablas
├── data.sql                           # Script de inserción de datos iniciales
├── init.sql                           # Script para inicializar la base de datos completa
├── reset.sql                          # Script para limpiar la base de datos
├── package.json                       # Dependencias de Node.js
└── README.md                          # Documentación del proyecto
```

---

## 🗃️ Scripts de Base de Datos

| Archivo | Descripción |
|---------|-------------|
| `ddl.sql` | Crea todas las tablas necesarias (`clientes`, `recintos`, `eventos`, `asientos`, `reservas`, `bitácora`) con sus relaciones y restricciones. |
| `data.sql` | Inserta datos de prueba: recintos, evento ULTRA MIAMI, asientos, clientes, reservas iniciales y registros en la bitácora. |
| `reset.sql` | Limpia la base de datos eliminando todas las tablas para reiniciar desde cero. |
| `init.sql` | Script maestro que ejecuta secuencialmente `reset.sql`, `ddl.sql` y `data.sql` para preparar rápidamente el entorno. |

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js (v14.0 o superior)
- PostgreSQL (v12.0 o superior)
- npm o yarn

### Configuración del Backend

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/rocha30/ProyectoDB_2.git
   cd ProyectoDB_2
   ```

2. **Instala las dependencias de Node.js:**
   ```bash
   npm install
   ```

3. **Configura la base de datos:**
   - Crea una base de datos PostgreSQL vacía:
     ```bash
     createdb tu_basededatos
     ```
   - Actualiza la conexión en el archivo `BackEnd/src/prisma.js` si es necesario
   - Inicializa la base de datos:
     ```bash
     psql -U tu_usuario -d tu_basededatos -f init.sql
     ```
   - Verifica que las entidades se hayan creado correctamente:
     ```bash
     psql -U tu_usuario -d tu_basededatos
     \dt
     ```

4. **Configura las variables de entorno** creando un archivo `.env` con:
   ```
   DATABASE_URL="postgresql://tu_usuario:tu_contraseña@localhost:5432/tu_basededatos"
   PORT=3000
   ```

5. **Ejecuta la aplicación Node.js:**
   ```bash
   node BackEnd/src/app.js
   ```

### Configuración del Frontend

1. **Navega al directorio de frontend:**
   ```bash
   cd FrontEnd_
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **La aplicación web estará disponible en:**
   ```
   http://localhost:5173
   ```

---

## 🧩 Funcionalidades del Proyecto

- **Operaciones CRUD completas para:**
  - Clientes
  - Recintos
  - Eventos
  - Asientos
  - Reservas
  - Bitácora de operaciones

- **Simulación de concurrencia** mediante múltiples solicitudes simultáneas
  - Puedes probar usando herramientas como Postman o scripts de prueba
  - El sistema maneja adecuadamente los conflictos de concurrencia usando transacciones

- **Interfaz de usuario intuitiva** desarrollada con React para:
  - Visualizar eventos disponibles
  - Seleccionar asientos en un mapa interactivo
  - Gestionar reservas de manera sencilla
  - Visualizar registros de actividad

---

## 🧪 Pruebas de Concurrencia

Para ejecutar pruebas de concurrencia y verificar el correcto funcionamiento del sistema:

1. Asegúrate de que el servidor backend esté en funcionamiento
2. Ejecuta el script de pruebas:
   ```bash
   npm run test:concurrency
   ```

Este proceso simulará múltiples usuarios intentando reservar asientos simultáneamente.

---

## 📋 Modelo de Datos

El sistema se basa en el siguiente modelo relacional:

- **Eventos**: Almacena información de eventos programados
- **Recintos**: Contiene detalles de los lugares donde se realizan los eventos
- **Asientos**: Registra las ubicaciones disponibles en cada recinto
- **Clientes**: Guarda datos de los usuarios que realizan reservas
- **Reservas**: Vincula clientes con asientos específicos para eventos
- **Bitácora**: Registra todas las operaciones realizadas en el sistema

---

## ⚙️ Configuración de ESLint (Frontend)

Si estás desarrollando una aplicación para producción, recomendamos actualizar la configuración para habilitar reglas de lint con verificación de tipos:

```js
export default tseslint.config({
  extends: [
    // Reemplazar ...tseslint.configs.recommended con esto
    ...tseslint.configs.recommendedTypeChecked,
    // Alternativamente, usar esto para reglas más estrictas
    ...tseslint.configs.strictTypeChecked,
    // Opcionalmente, añadir esto para reglas estilísticas
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // otras opciones...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

También puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas de lint específicas de React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Añadir los plugins react-x y react-dom
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // otras reglas...
    // Habilitar sus reglas recomendadas para typescript
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

---

## 👥 Contribuciones

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Realiza tus cambios y commits (`git commit -m 'Añade nueva característica'`)
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

## 📝 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
