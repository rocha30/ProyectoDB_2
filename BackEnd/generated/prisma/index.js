
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AsientoScalarFieldEnum = {
  id_asiento: 'id_asiento',
  id_recinto: 'id_recinto',
  fila: 'fila',
  numero: 'numero',
  tipo: 'tipo'
};

exports.Prisma.BitacoraScalarFieldEnum = {
  id_bitacora: 'id_bitacora',
  id_reserva: 'id_reserva',
  accion: 'accion',
  fecha: 'fecha',
  descripcion: 'descripcion'
};

exports.Prisma.ClienteScalarFieldEnum = {
  id_cliente: 'id_cliente',
  nombre: 'nombre',
  correo: 'correo',
  telefono: 'telefono'
};

exports.Prisma.EventoScalarFieldEnum = {
  id_evento: 'id_evento',
  nombre_evento: 'nombre_evento',
  descripcion: 'descripcion',
  fecha: 'fecha',
  hora: 'hora',
  id_recinto: 'id_recinto'
};

exports.Prisma.RecintoScalarFieldEnum = {
  id_recinto: 'id_recinto',
  nombre: 'nombre',
  ubicacion: 'ubicacion',
  capacidad: 'capacidad'
};

exports.Prisma.ReservaScalarFieldEnum = {
  id_reserva: 'id_reserva',
  id_cliente: 'id_cliente',
  id_evento: 'id_evento',
  fecha_reserva: 'fecha_reserva',
  estado_reserva: 'estado_reserva'
};

exports.Prisma.Reserva_asientoScalarFieldEnum = {
  id_reserva_asiento: 'id_reserva_asiento',
  id_reserva: 'id_reserva',
  id_asiento: 'id_asiento'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  asiento: 'asiento',
  bitacora: 'bitacora',
  cliente: 'cliente',
  evento: 'evento',
  recinto: 'recinto',
  reserva: 'reserva',
  reserva_asiento: 'reserva_asiento'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/mariorocha/Documents/Programacion/Base_datos/Proyecto_2/BackEnd/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/mariorocha/Documents/Programacion/Base_datos/Proyecto_2/BackEnd/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel asiento {\n  id_asiento      Int               @id @default(autoincrement())\n  id_recinto      Int\n  fila            Int\n  numero          Int\n  tipo            String?           @db.VarChar(50)\n  recinto         recinto           @relation(fields: [id_recinto], references: [id_recinto], onDelete: Cascade)\n  reserva_asiento reserva_asiento[]\n}\n\nmodel bitacora {\n  id_bitacora Int       @id @default(autoincrement())\n  id_reserva  Int?\n  accion      String    @db.VarChar(100)\n  fecha       DateTime? @default(now()) @db.Timestamp(6)\n  descripcion String?\n  reserva     reserva?  @relation(fields: [id_reserva], references: [id_reserva])\n}\n\nmodel cliente {\n  id_cliente Int       @id @default(autoincrement())\n  nombre     String    @db.VarChar(100)\n  correo     String    @unique @db.VarChar(100)\n  telefono   String?   @db.VarChar(20)\n  reserva    reserva[]\n}\n\nmodel evento {\n  id_evento     Int       @id @default(autoincrement())\n  nombre_evento String    @db.VarChar(100)\n  descripcion   String?\n  fecha         DateTime  @db.Date\n  hora          DateTime  @db.Time(6)\n  id_recinto    Int\n  recinto       recinto   @relation(fields: [id_recinto], references: [id_recinto], onDelete: Cascade)\n  reserva       reserva[]\n}\n\nmodel recinto {\n  id_recinto Int       @id @default(autoincrement())\n  nombre     String    @db.VarChar(100)\n  ubicacion  String    @db.VarChar(150)\n  capacidad  Int\n  asiento    asiento[]\n  evento     evento[]\n}\n\nmodel reserva {\n  id_reserva      Int               @id @default(autoincrement())\n  id_cliente      Int\n  id_evento       Int\n  fecha_reserva   DateTime?         @default(now()) @db.Timestamp(6)\n  estado_reserva  String            @db.VarChar(50)\n  bitacora        bitacora[]\n  cliente         cliente           @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)\n  evento          evento            @relation(fields: [id_evento], references: [id_evento], onDelete: Cascade)\n  reserva_asiento reserva_asiento[]\n}\n\nmodel reserva_asiento {\n  id_reserva_asiento Int     @id @default(autoincrement())\n  id_reserva         Int\n  id_asiento         Int\n  asiento            asiento @relation(fields: [id_asiento], references: [id_asiento], onDelete: Cascade)\n  reserva            reserva @relation(fields: [id_reserva], references: [id_reserva], onDelete: Cascade)\n\n  @@unique([id_reserva, id_asiento])\n}\n",
  "inlineSchemaHash": "d0c7c18eba3b08a34544d868338575247f9ea06b4daffc324e29b332299b44c5",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"asiento\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_asiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_recinto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fila\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tipo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recinto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recinto\",\"nativeType\":null,\"relationName\":\"asientoTorecinto\",\"relationFromFields\":[\"id_recinto\"],\"relationToFields\":[\"id_recinto\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_asiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_asiento\",\"nativeType\":null,\"relationName\":\"asientoToreserva_asiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bitacora\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_bitacora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva\",\"nativeType\":null,\"relationName\":\"bitacoraToreserva\",\"relationFromFields\":[\"id_reserva\"],\"relationToFields\":[\"id_reserva\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cliente\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"correo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefono\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva\",\"nativeType\":null,\"relationName\":\"clienteToreserva\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"evento\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_evento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre_evento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hora\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Time\",[\"6\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_recinto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recinto\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recinto\",\"nativeType\":null,\"relationName\":\"eventoTorecinto\",\"relationFromFields\":[\"id_recinto\"],\"relationToFields\":[\"id_recinto\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva\",\"nativeType\":null,\"relationName\":\"eventoToreserva\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recinto\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_recinto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nombre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ubicacion\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"150\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacidad\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"asiento\",\"nativeType\":null,\"relationName\":\"asientoTorecinto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evento\",\"nativeType\":null,\"relationName\":\"eventoTorecinto\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserva\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_cliente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_evento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fecha_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"estado_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bitacora\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bitacora\",\"nativeType\":null,\"relationName\":\"bitacoraToreserva\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cliente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cliente\",\"nativeType\":null,\"relationName\":\"clienteToreserva\",\"relationFromFields\":[\"id_cliente\"],\"relationToFields\":[\"id_cliente\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evento\",\"nativeType\":null,\"relationName\":\"eventoToreserva\",\"relationFromFields\":[\"id_evento\"],\"relationToFields\":[\"id_evento\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva_asiento\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva_asiento\",\"nativeType\":null,\"relationName\":\"reservaToreserva_asiento\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reserva_asiento\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id_reserva_asiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_reserva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id_asiento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"asiento\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"asiento\",\"nativeType\":null,\"relationName\":\"asientoToreserva_asiento\",\"relationFromFields\":[\"id_asiento\"],\"relationToFields\":[\"id_asiento\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reserva\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reserva\",\"nativeType\":null,\"relationName\":\"reservaToreserva_asiento\",\"relationFromFields\":[\"id_reserva\"],\"relationToFields\":[\"id_reserva\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"id_reserva\",\"id_asiento\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"id_reserva\",\"id_asiento\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "generated/prisma/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
