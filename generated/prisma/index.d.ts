
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model asiento
 * 
 */
export type asiento = $Result.DefaultSelection<Prisma.$asientoPayload>
/**
 * Model bitacora
 * 
 */
export type bitacora = $Result.DefaultSelection<Prisma.$bitacoraPayload>
/**
 * Model cliente
 * 
 */
export type cliente = $Result.DefaultSelection<Prisma.$clientePayload>
/**
 * Model evento
 * 
 */
export type evento = $Result.DefaultSelection<Prisma.$eventoPayload>
/**
 * Model recinto
 * 
 */
export type recinto = $Result.DefaultSelection<Prisma.$recintoPayload>
/**
 * Model reserva
 * 
 */
export type reserva = $Result.DefaultSelection<Prisma.$reservaPayload>
/**
 * Model reserva_asiento
 * 
 */
export type reserva_asiento = $Result.DefaultSelection<Prisma.$reserva_asientoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Asientos
 * const asientos = await prisma.asiento.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Asientos
   * const asientos = await prisma.asiento.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.asiento`: Exposes CRUD operations for the **asiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asientos
    * const asientos = await prisma.asiento.findMany()
    * ```
    */
  get asiento(): Prisma.asientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bitacora`: Exposes CRUD operations for the **bitacora** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bitacoras
    * const bitacoras = await prisma.bitacora.findMany()
    * ```
    */
  get bitacora(): Prisma.bitacoraDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.eventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recinto`: Exposes CRUD operations for the **recinto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recintos
    * const recintos = await prisma.recinto.findMany()
    * ```
    */
  get recinto(): Prisma.recintoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.reservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva_asiento`: Exposes CRUD operations for the **reserva_asiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reserva_asientos
    * const reserva_asientos = await prisma.reserva_asiento.findMany()
    * ```
    */
  get reserva_asiento(): Prisma.reserva_asientoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    asiento: 'asiento',
    bitacora: 'bitacora',
    cliente: 'cliente',
    evento: 'evento',
    recinto: 'recinto',
    reserva: 'reserva',
    reserva_asiento: 'reserva_asiento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "asiento" | "bitacora" | "cliente" | "evento" | "recinto" | "reserva" | "reserva_asiento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      asiento: {
        payload: Prisma.$asientoPayload<ExtArgs>
        fields: Prisma.asientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.asientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.asientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          findFirst: {
            args: Prisma.asientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.asientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          findMany: {
            args: Prisma.asientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>[]
          }
          create: {
            args: Prisma.asientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          createMany: {
            args: Prisma.asientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.asientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>[]
          }
          delete: {
            args: Prisma.asientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          update: {
            args: Prisma.asientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          deleteMany: {
            args: Prisma.asientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.asientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.asientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>[]
          }
          upsert: {
            args: Prisma.asientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$asientoPayload>
          }
          aggregate: {
            args: Prisma.AsientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsiento>
          }
          groupBy: {
            args: Prisma.asientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.asientoCountArgs<ExtArgs>
            result: $Utils.Optional<AsientoCountAggregateOutputType> | number
          }
        }
      }
      bitacora: {
        payload: Prisma.$bitacoraPayload<ExtArgs>
        fields: Prisma.bitacoraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bitacoraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bitacoraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          findFirst: {
            args: Prisma.bitacoraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bitacoraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          findMany: {
            args: Prisma.bitacoraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>[]
          }
          create: {
            args: Prisma.bitacoraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          createMany: {
            args: Prisma.bitacoraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bitacoraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>[]
          }
          delete: {
            args: Prisma.bitacoraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          update: {
            args: Prisma.bitacoraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          deleteMany: {
            args: Prisma.bitacoraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bitacoraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bitacoraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>[]
          }
          upsert: {
            args: Prisma.bitacoraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bitacoraPayload>
          }
          aggregate: {
            args: Prisma.BitacoraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBitacora>
          }
          groupBy: {
            args: Prisma.bitacoraGroupByArgs<ExtArgs>
            result: $Utils.Optional<BitacoraGroupByOutputType>[]
          }
          count: {
            args: Prisma.bitacoraCountArgs<ExtArgs>
            result: $Utils.Optional<BitacoraCountAggregateOutputType> | number
          }
        }
      }
      cliente: {
        payload: Prisma.$clientePayload<ExtArgs>
        fields: Prisma.clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findFirst: {
            args: Prisma.clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          findMany: {
            args: Prisma.clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          create: {
            args: Prisma.clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          createMany: {
            args: Prisma.clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          delete: {
            args: Prisma.clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          update: {
            args: Prisma.clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          deleteMany: {
            args: Prisma.clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>[]
          }
          upsert: {
            args: Prisma.clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.clienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      evento: {
        payload: Prisma.$eventoPayload<ExtArgs>
        fields: Prisma.eventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.eventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.eventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findFirst: {
            args: Prisma.eventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.eventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          findMany: {
            args: Prisma.eventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          create: {
            args: Prisma.eventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          createMany: {
            args: Prisma.eventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.eventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          delete: {
            args: Prisma.eventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          update: {
            args: Prisma.eventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          deleteMany: {
            args: Prisma.eventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.eventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.eventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>[]
          }
          upsert: {
            args: Prisma.eventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$eventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.eventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.eventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      recinto: {
        payload: Prisma.$recintoPayload<ExtArgs>
        fields: Prisma.recintoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recintoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recintoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          findFirst: {
            args: Prisma.recintoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recintoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          findMany: {
            args: Prisma.recintoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>[]
          }
          create: {
            args: Prisma.recintoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          createMany: {
            args: Prisma.recintoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recintoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>[]
          }
          delete: {
            args: Prisma.recintoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          update: {
            args: Prisma.recintoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          deleteMany: {
            args: Prisma.recintoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recintoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recintoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>[]
          }
          upsert: {
            args: Prisma.recintoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recintoPayload>
          }
          aggregate: {
            args: Prisma.RecintoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecinto>
          }
          groupBy: {
            args: Prisma.recintoGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecintoGroupByOutputType>[]
          }
          count: {
            args: Prisma.recintoCountArgs<ExtArgs>
            result: $Utils.Optional<RecintoCountAggregateOutputType> | number
          }
        }
      }
      reserva: {
        payload: Prisma.$reservaPayload<ExtArgs>
        fields: Prisma.reservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findFirst: {
            args: Prisma.reservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          findMany: {
            args: Prisma.reservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          create: {
            args: Prisma.reservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          createMany: {
            args: Prisma.reservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          delete: {
            args: Prisma.reservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          update: {
            args: Prisma.reservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          deleteMany: {
            args: Prisma.reservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>[]
          }
          upsert: {
            args: Prisma.reservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.reservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      reserva_asiento: {
        payload: Prisma.$reserva_asientoPayload<ExtArgs>
        fields: Prisma.reserva_asientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reserva_asientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reserva_asientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          findFirst: {
            args: Prisma.reserva_asientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reserva_asientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          findMany: {
            args: Prisma.reserva_asientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>[]
          }
          create: {
            args: Prisma.reserva_asientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          createMany: {
            args: Prisma.reserva_asientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reserva_asientoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>[]
          }
          delete: {
            args: Prisma.reserva_asientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          update: {
            args: Prisma.reserva_asientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          deleteMany: {
            args: Prisma.reserva_asientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reserva_asientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reserva_asientoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>[]
          }
          upsert: {
            args: Prisma.reserva_asientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reserva_asientoPayload>
          }
          aggregate: {
            args: Prisma.Reserva_asientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva_asiento>
          }
          groupBy: {
            args: Prisma.reserva_asientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Reserva_asientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.reserva_asientoCountArgs<ExtArgs>
            result: $Utils.Optional<Reserva_asientoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    asiento?: asientoOmit
    bitacora?: bitacoraOmit
    cliente?: clienteOmit
    evento?: eventoOmit
    recinto?: recintoOmit
    reserva?: reservaOmit
    reserva_asiento?: reserva_asientoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AsientoCountOutputType
   */

  export type AsientoCountOutputType = {
    reserva_asiento: number
  }

  export type AsientoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva_asiento?: boolean | AsientoCountOutputTypeCountReserva_asientoArgs
  }

  // Custom InputTypes
  /**
   * AsientoCountOutputType without action
   */
  export type AsientoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoCountOutputType
     */
    select?: AsientoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsientoCountOutputType without action
   */
  export type AsientoCountOutputTypeCountReserva_asientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_asientoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    reserva: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ClienteCountOutputTypeCountReservaArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountReservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    reserva: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | EventoCountOutputTypeCountReservaArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountReservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
  }


  /**
   * Count Type RecintoCountOutputType
   */

  export type RecintoCountOutputType = {
    asiento: number
    evento: number
  }

  export type RecintoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asiento?: boolean | RecintoCountOutputTypeCountAsientoArgs
    evento?: boolean | RecintoCountOutputTypeCountEventoArgs
  }

  // Custom InputTypes
  /**
   * RecintoCountOutputType without action
   */
  export type RecintoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecintoCountOutputType
     */
    select?: RecintoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecintoCountOutputType without action
   */
  export type RecintoCountOutputTypeCountAsientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asientoWhereInput
  }

  /**
   * RecintoCountOutputType without action
   */
  export type RecintoCountOutputTypeCountEventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
  }


  /**
   * Count Type ReservaCountOutputType
   */

  export type ReservaCountOutputType = {
    bitacora: number
    reserva_asiento: number
  }

  export type ReservaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacora?: boolean | ReservaCountOutputTypeCountBitacoraArgs
    reserva_asiento?: boolean | ReservaCountOutputTypeCountReserva_asientoArgs
  }

  // Custom InputTypes
  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaCountOutputType
     */
    select?: ReservaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountBitacoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacoraWhereInput
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountReserva_asientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_asientoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model asiento
   */

  export type AggregateAsiento = {
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  export type AsientoAvgAggregateOutputType = {
    id_asiento: number | null
    id_recinto: number | null
    fila: number | null
    numero: number | null
  }

  export type AsientoSumAggregateOutputType = {
    id_asiento: number | null
    id_recinto: number | null
    fila: number | null
    numero: number | null
  }

  export type AsientoMinAggregateOutputType = {
    id_asiento: number | null
    id_recinto: number | null
    fila: number | null
    numero: number | null
    tipo: string | null
  }

  export type AsientoMaxAggregateOutputType = {
    id_asiento: number | null
    id_recinto: number | null
    fila: number | null
    numero: number | null
    tipo: string | null
  }

  export type AsientoCountAggregateOutputType = {
    id_asiento: number
    id_recinto: number
    fila: number
    numero: number
    tipo: number
    _all: number
  }


  export type AsientoAvgAggregateInputType = {
    id_asiento?: true
    id_recinto?: true
    fila?: true
    numero?: true
  }

  export type AsientoSumAggregateInputType = {
    id_asiento?: true
    id_recinto?: true
    fila?: true
    numero?: true
  }

  export type AsientoMinAggregateInputType = {
    id_asiento?: true
    id_recinto?: true
    fila?: true
    numero?: true
    tipo?: true
  }

  export type AsientoMaxAggregateInputType = {
    id_asiento?: true
    id_recinto?: true
    fila?: true
    numero?: true
    tipo?: true
  }

  export type AsientoCountAggregateInputType = {
    id_asiento?: true
    id_recinto?: true
    fila?: true
    numero?: true
    tipo?: true
    _all?: true
  }

  export type AsientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asiento to aggregate.
     */
    where?: asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asientos to fetch.
     */
    orderBy?: asientoOrderByWithRelationInput | asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned asientos
    **/
    _count?: true | AsientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsientoMaxAggregateInputType
  }

  export type GetAsientoAggregateType<T extends AsientoAggregateArgs> = {
        [P in keyof T & keyof AggregateAsiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsiento[P]>
      : GetScalarType<T[P], AggregateAsiento[P]>
  }




  export type asientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: asientoWhereInput
    orderBy?: asientoOrderByWithAggregationInput | asientoOrderByWithAggregationInput[]
    by: AsientoScalarFieldEnum[] | AsientoScalarFieldEnum
    having?: asientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsientoCountAggregateInputType | true
    _avg?: AsientoAvgAggregateInputType
    _sum?: AsientoSumAggregateInputType
    _min?: AsientoMinAggregateInputType
    _max?: AsientoMaxAggregateInputType
  }

  export type AsientoGroupByOutputType = {
    id_asiento: number
    id_recinto: number
    fila: number
    numero: number
    tipo: string | null
    _count: AsientoCountAggregateOutputType | null
    _avg: AsientoAvgAggregateOutputType | null
    _sum: AsientoSumAggregateOutputType | null
    _min: AsientoMinAggregateOutputType | null
    _max: AsientoMaxAggregateOutputType | null
  }

  type GetAsientoGroupByPayload<T extends asientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsientoGroupByOutputType[P]>
            : GetScalarType<T[P], AsientoGroupByOutputType[P]>
        }
      >
    >


  export type asientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    id_recinto?: boolean
    fila?: boolean
    numero?: boolean
    tipo?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
    reserva_asiento?: boolean | asiento$reserva_asientoArgs<ExtArgs>
    _count?: boolean | AsientoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type asientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    id_recinto?: boolean
    fila?: boolean
    numero?: boolean
    tipo?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type asientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_asiento?: boolean
    id_recinto?: boolean
    fila?: boolean
    numero?: boolean
    tipo?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asiento"]>

  export type asientoSelectScalar = {
    id_asiento?: boolean
    id_recinto?: boolean
    fila?: boolean
    numero?: boolean
    tipo?: boolean
  }

  export type asientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_asiento" | "id_recinto" | "fila" | "numero" | "tipo", ExtArgs["result"]["asiento"]>
  export type asientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
    reserva_asiento?: boolean | asiento$reserva_asientoArgs<ExtArgs>
    _count?: boolean | AsientoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type asientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }
  export type asientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }

  export type $asientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "asiento"
    objects: {
      recinto: Prisma.$recintoPayload<ExtArgs>
      reserva_asiento: Prisma.$reserva_asientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_asiento: number
      id_recinto: number
      fila: number
      numero: number
      tipo: string | null
    }, ExtArgs["result"]["asiento"]>
    composites: {}
  }

  type asientoGetPayload<S extends boolean | null | undefined | asientoDefaultArgs> = $Result.GetResult<Prisma.$asientoPayload, S>

  type asientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<asientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsientoCountAggregateInputType | true
    }

  export interface asientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['asiento'], meta: { name: 'asiento' } }
    /**
     * Find zero or one Asiento that matches the filter.
     * @param {asientoFindUniqueArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asientoFindUniqueArgs>(args: SelectSubset<T, asientoFindUniqueArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Asiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asientoFindUniqueOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asientoFindUniqueOrThrowArgs>(args: SelectSubset<T, asientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindFirstArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asientoFindFirstArgs>(args?: SelectSubset<T, asientoFindFirstArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Asiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindFirstOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asientoFindFirstOrThrowArgs>(args?: SelectSubset<T, asientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asientos
     * const asientos = await prisma.asiento.findMany()
     * 
     * // Get first 10 Asientos
     * const asientos = await prisma.asiento.findMany({ take: 10 })
     * 
     * // Only select the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.findMany({ select: { id_asiento: true } })
     * 
     */
    findMany<T extends asientoFindManyArgs>(args?: SelectSubset<T, asientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Asiento.
     * @param {asientoCreateArgs} args - Arguments to create a Asiento.
     * @example
     * // Create one Asiento
     * const Asiento = await prisma.asiento.create({
     *   data: {
     *     // ... data to create a Asiento
     *   }
     * })
     * 
     */
    create<T extends asientoCreateArgs>(args: SelectSubset<T, asientoCreateArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asientos.
     * @param {asientoCreateManyArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends asientoCreateManyArgs>(args?: SelectSubset<T, asientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asientos and returns the data saved in the database.
     * @param {asientoCreateManyAndReturnArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asientos and only return the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.createManyAndReturn({
     *   select: { id_asiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends asientoCreateManyAndReturnArgs>(args?: SelectSubset<T, asientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Asiento.
     * @param {asientoDeleteArgs} args - Arguments to delete one Asiento.
     * @example
     * // Delete one Asiento
     * const Asiento = await prisma.asiento.delete({
     *   where: {
     *     // ... filter to delete one Asiento
     *   }
     * })
     * 
     */
    delete<T extends asientoDeleteArgs>(args: SelectSubset<T, asientoDeleteArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Asiento.
     * @param {asientoUpdateArgs} args - Arguments to update one Asiento.
     * @example
     * // Update one Asiento
     * const asiento = await prisma.asiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends asientoUpdateArgs>(args: SelectSubset<T, asientoUpdateArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asientos.
     * @param {asientoDeleteManyArgs} args - Arguments to filter Asientos to delete.
     * @example
     * // Delete a few Asientos
     * const { count } = await prisma.asiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends asientoDeleteManyArgs>(args?: SelectSubset<T, asientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends asientoUpdateManyArgs>(args: SelectSubset<T, asientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asientos and returns the data updated in the database.
     * @param {asientoUpdateManyAndReturnArgs} args - Arguments to update many Asientos.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asientos and only return the `id_asiento`
     * const asientoWithId_asientoOnly = await prisma.asiento.updateManyAndReturn({
     *   select: { id_asiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends asientoUpdateManyAndReturnArgs>(args: SelectSubset<T, asientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Asiento.
     * @param {asientoUpsertArgs} args - Arguments to update or create a Asiento.
     * @example
     * // Update or create a Asiento
     * const asiento = await prisma.asiento.upsert({
     *   create: {
     *     // ... data to create a Asiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asiento we want to update
     *   }
     * })
     */
    upsert<T extends asientoUpsertArgs>(args: SelectSubset<T, asientoUpsertArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoCountArgs} args - Arguments to filter Asientos to count.
     * @example
     * // Count the number of Asientos
     * const count = await prisma.asiento.count({
     *   where: {
     *     // ... the filter for the Asientos we want to count
     *   }
     * })
    **/
    count<T extends asientoCountArgs>(
      args?: Subset<T, asientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsientoAggregateArgs>(args: Subset<T, AsientoAggregateArgs>): Prisma.PrismaPromise<GetAsientoAggregateType<T>>

    /**
     * Group by Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends asientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: asientoGroupByArgs['orderBy'] }
        : { orderBy?: asientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, asientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the asiento model
   */
  readonly fields: asientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for asiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__asientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recinto<T extends recintoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recintoDefaultArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserva_asiento<T extends asiento$reserva_asientoArgs<ExtArgs> = {}>(args?: Subset<T, asiento$reserva_asientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the asiento model
   */
  interface asientoFieldRefs {
    readonly id_asiento: FieldRef<"asiento", 'Int'>
    readonly id_recinto: FieldRef<"asiento", 'Int'>
    readonly fila: FieldRef<"asiento", 'Int'>
    readonly numero: FieldRef<"asiento", 'Int'>
    readonly tipo: FieldRef<"asiento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * asiento findUnique
   */
  export type asientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter, which asiento to fetch.
     */
    where: asientoWhereUniqueInput
  }

  /**
   * asiento findUniqueOrThrow
   */
  export type asientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter, which asiento to fetch.
     */
    where: asientoWhereUniqueInput
  }

  /**
   * asiento findFirst
   */
  export type asientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter, which asiento to fetch.
     */
    where?: asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asientos to fetch.
     */
    orderBy?: asientoOrderByWithRelationInput | asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asientos.
     */
    cursor?: asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * asiento findFirstOrThrow
   */
  export type asientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter, which asiento to fetch.
     */
    where?: asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asientos to fetch.
     */
    orderBy?: asientoOrderByWithRelationInput | asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for asientos.
     */
    cursor?: asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of asientos.
     */
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * asiento findMany
   */
  export type asientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter, which asientos to fetch.
     */
    where?: asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of asientos to fetch.
     */
    orderBy?: asientoOrderByWithRelationInput | asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing asientos.
     */
    cursor?: asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` asientos.
     */
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * asiento create
   */
  export type asientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * The data needed to create a asiento.
     */
    data: XOR<asientoCreateInput, asientoUncheckedCreateInput>
  }

  /**
   * asiento createMany
   */
  export type asientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many asientos.
     */
    data: asientoCreateManyInput | asientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * asiento createManyAndReturn
   */
  export type asientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * The data used to create many asientos.
     */
    data: asientoCreateManyInput | asientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * asiento update
   */
  export type asientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * The data needed to update a asiento.
     */
    data: XOR<asientoUpdateInput, asientoUncheckedUpdateInput>
    /**
     * Choose, which asiento to update.
     */
    where: asientoWhereUniqueInput
  }

  /**
   * asiento updateMany
   */
  export type asientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update asientos.
     */
    data: XOR<asientoUpdateManyMutationInput, asientoUncheckedUpdateManyInput>
    /**
     * Filter which asientos to update
     */
    where?: asientoWhereInput
    /**
     * Limit how many asientos to update.
     */
    limit?: number
  }

  /**
   * asiento updateManyAndReturn
   */
  export type asientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * The data used to update asientos.
     */
    data: XOR<asientoUpdateManyMutationInput, asientoUncheckedUpdateManyInput>
    /**
     * Filter which asientos to update
     */
    where?: asientoWhereInput
    /**
     * Limit how many asientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * asiento upsert
   */
  export type asientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * The filter to search for the asiento to update in case it exists.
     */
    where: asientoWhereUniqueInput
    /**
     * In case the asiento found by the `where` argument doesn't exist, create a new asiento with this data.
     */
    create: XOR<asientoCreateInput, asientoUncheckedCreateInput>
    /**
     * In case the asiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<asientoUpdateInput, asientoUncheckedUpdateInput>
  }

  /**
   * asiento delete
   */
  export type asientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    /**
     * Filter which asiento to delete.
     */
    where: asientoWhereUniqueInput
  }

  /**
   * asiento deleteMany
   */
  export type asientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which asientos to delete
     */
    where?: asientoWhereInput
    /**
     * Limit how many asientos to delete.
     */
    limit?: number
  }

  /**
   * asiento.reserva_asiento
   */
  export type asiento$reserva_asientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    where?: reserva_asientoWhereInput
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    cursor?: reserva_asientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_asientoScalarFieldEnum | Reserva_asientoScalarFieldEnum[]
  }

  /**
   * asiento without action
   */
  export type asientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
  }


  /**
   * Model bitacora
   */

  export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  export type BitacoraAvgAggregateOutputType = {
    id_bitacora: number | null
    id_reserva: number | null
  }

  export type BitacoraSumAggregateOutputType = {
    id_bitacora: number | null
    id_reserva: number | null
  }

  export type BitacoraMinAggregateOutputType = {
    id_bitacora: number | null
    id_reserva: number | null
    accion: string | null
    fecha: Date | null
    descripcion: string | null
  }

  export type BitacoraMaxAggregateOutputType = {
    id_bitacora: number | null
    id_reserva: number | null
    accion: string | null
    fecha: Date | null
    descripcion: string | null
  }

  export type BitacoraCountAggregateOutputType = {
    id_bitacora: number
    id_reserva: number
    accion: number
    fecha: number
    descripcion: number
    _all: number
  }


  export type BitacoraAvgAggregateInputType = {
    id_bitacora?: true
    id_reserva?: true
  }

  export type BitacoraSumAggregateInputType = {
    id_bitacora?: true
    id_reserva?: true
  }

  export type BitacoraMinAggregateInputType = {
    id_bitacora?: true
    id_reserva?: true
    accion?: true
    fecha?: true
    descripcion?: true
  }

  export type BitacoraMaxAggregateInputType = {
    id_bitacora?: true
    id_reserva?: true
    accion?: true
    fecha?: true
    descripcion?: true
  }

  export type BitacoraCountAggregateInputType = {
    id_bitacora?: true
    id_reserva?: true
    accion?: true
    fecha?: true
    descripcion?: true
    _all?: true
  }

  export type BitacoraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacora to aggregate.
     */
    where?: bitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacoras to fetch.
     */
    orderBy?: bitacoraOrderByWithRelationInput | bitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bitacoras
    **/
    _count?: true | BitacoraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BitacoraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BitacoraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BitacoraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BitacoraMaxAggregateInputType
  }

  export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
        [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBitacora[P]>
      : GetScalarType<T[P], AggregateBitacora[P]>
  }




  export type bitacoraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bitacoraWhereInput
    orderBy?: bitacoraOrderByWithAggregationInput | bitacoraOrderByWithAggregationInput[]
    by: BitacoraScalarFieldEnum[] | BitacoraScalarFieldEnum
    having?: bitacoraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BitacoraCountAggregateInputType | true
    _avg?: BitacoraAvgAggregateInputType
    _sum?: BitacoraSumAggregateInputType
    _min?: BitacoraMinAggregateInputType
    _max?: BitacoraMaxAggregateInputType
  }

  export type BitacoraGroupByOutputType = {
    id_bitacora: number
    id_reserva: number | null
    accion: string
    fecha: Date | null
    descripcion: string | null
    _count: BitacoraCountAggregateOutputType | null
    _avg: BitacoraAvgAggregateOutputType | null
    _sum: BitacoraSumAggregateOutputType | null
    _min: BitacoraMinAggregateOutputType | null
    _max: BitacoraMaxAggregateOutputType | null
  }

  type GetBitacoraGroupByPayload<T extends bitacoraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BitacoraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
            : GetScalarType<T[P], BitacoraGroupByOutputType[P]>
        }
      >
    >


  export type bitacoraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    id_reserva?: boolean
    accion?: boolean
    fecha?: boolean
    descripcion?: boolean
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type bitacoraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    id_reserva?: boolean
    accion?: boolean
    fecha?: boolean
    descripcion?: boolean
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type bitacoraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_bitacora?: boolean
    id_reserva?: boolean
    accion?: boolean
    fecha?: boolean
    descripcion?: boolean
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }, ExtArgs["result"]["bitacora"]>

  export type bitacoraSelectScalar = {
    id_bitacora?: boolean
    id_reserva?: boolean
    accion?: boolean
    fecha?: boolean
    descripcion?: boolean
  }

  export type bitacoraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_bitacora" | "id_reserva" | "accion" | "fecha" | "descripcion", ExtArgs["result"]["bitacora"]>
  export type bitacoraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }
  export type bitacoraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }
  export type bitacoraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | bitacora$reservaArgs<ExtArgs>
  }

  export type $bitacoraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bitacora"
    objects: {
      reserva: Prisma.$reservaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_bitacora: number
      id_reserva: number | null
      accion: string
      fecha: Date | null
      descripcion: string | null
    }, ExtArgs["result"]["bitacora"]>
    composites: {}
  }

  type bitacoraGetPayload<S extends boolean | null | undefined | bitacoraDefaultArgs> = $Result.GetResult<Prisma.$bitacoraPayload, S>

  type bitacoraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BitacoraCountAggregateInputType | true
    }

  export interface bitacoraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bitacora'], meta: { name: 'bitacora' } }
    /**
     * Find zero or one Bitacora that matches the filter.
     * @param {bitacoraFindUniqueArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bitacoraFindUniqueArgs>(args: SelectSubset<T, bitacoraFindUniqueArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bitacora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bitacoraFindUniqueOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bitacoraFindUniqueOrThrowArgs>(args: SelectSubset<T, bitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraFindFirstArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bitacoraFindFirstArgs>(args?: SelectSubset<T, bitacoraFindFirstArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bitacora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraFindFirstOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bitacoraFindFirstOrThrowArgs>(args?: SelectSubset<T, bitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bitacoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacoras
     * const bitacoras = await prisma.bitacora.findMany()
     * 
     * // Get first 10 Bitacoras
     * const bitacoras = await prisma.bitacora.findMany({ take: 10 })
     * 
     * // Only select the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.findMany({ select: { id_bitacora: true } })
     * 
     */
    findMany<T extends bitacoraFindManyArgs>(args?: SelectSubset<T, bitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bitacora.
     * @param {bitacoraCreateArgs} args - Arguments to create a Bitacora.
     * @example
     * // Create one Bitacora
     * const Bitacora = await prisma.bitacora.create({
     *   data: {
     *     // ... data to create a Bitacora
     *   }
     * })
     * 
     */
    create<T extends bitacoraCreateArgs>(args: SelectSubset<T, bitacoraCreateArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bitacoras.
     * @param {bitacoraCreateManyArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bitacoraCreateManyArgs>(args?: SelectSubset<T, bitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bitacoras and returns the data saved in the database.
     * @param {bitacoraCreateManyAndReturnArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bitacoras and only return the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.createManyAndReturn({
     *   select: { id_bitacora: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bitacoraCreateManyAndReturnArgs>(args?: SelectSubset<T, bitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bitacora.
     * @param {bitacoraDeleteArgs} args - Arguments to delete one Bitacora.
     * @example
     * // Delete one Bitacora
     * const Bitacora = await prisma.bitacora.delete({
     *   where: {
     *     // ... filter to delete one Bitacora
     *   }
     * })
     * 
     */
    delete<T extends bitacoraDeleteArgs>(args: SelectSubset<T, bitacoraDeleteArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bitacora.
     * @param {bitacoraUpdateArgs} args - Arguments to update one Bitacora.
     * @example
     * // Update one Bitacora
     * const bitacora = await prisma.bitacora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bitacoraUpdateArgs>(args: SelectSubset<T, bitacoraUpdateArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bitacoras.
     * @param {bitacoraDeleteManyArgs} args - Arguments to filter Bitacoras to delete.
     * @example
     * // Delete a few Bitacoras
     * const { count } = await prisma.bitacora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bitacoraDeleteManyArgs>(args?: SelectSubset<T, bitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bitacoraUpdateManyArgs>(args: SelectSubset<T, bitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bitacoras and returns the data updated in the database.
     * @param {bitacoraUpdateManyAndReturnArgs} args - Arguments to update many Bitacoras.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bitacoras and only return the `id_bitacora`
     * const bitacoraWithId_bitacoraOnly = await prisma.bitacora.updateManyAndReturn({
     *   select: { id_bitacora: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bitacoraUpdateManyAndReturnArgs>(args: SelectSubset<T, bitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bitacora.
     * @param {bitacoraUpsertArgs} args - Arguments to update or create a Bitacora.
     * @example
     * // Update or create a Bitacora
     * const bitacora = await prisma.bitacora.upsert({
     *   create: {
     *     // ... data to create a Bitacora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora we want to update
     *   }
     * })
     */
    upsert<T extends bitacoraUpsertArgs>(args: SelectSubset<T, bitacoraUpsertArgs<ExtArgs>>): Prisma__bitacoraClient<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraCountArgs} args - Arguments to filter Bitacoras to count.
     * @example
     * // Count the number of Bitacoras
     * const count = await prisma.bitacora.count({
     *   where: {
     *     // ... the filter for the Bitacoras we want to count
     *   }
     * })
    **/
    count<T extends bitacoraCountArgs>(
      args?: Subset<T, bitacoraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BitacoraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BitacoraAggregateArgs>(args: Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>

    /**
     * Group by Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bitacoraGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bitacoraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bitacoraGroupByArgs['orderBy'] }
        : { orderBy?: bitacoraGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bitacora model
   */
  readonly fields: bitacoraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bitacora.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bitacoraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends bitacora$reservaArgs<ExtArgs> = {}>(args?: Subset<T, bitacora$reservaArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bitacora model
   */
  interface bitacoraFieldRefs {
    readonly id_bitacora: FieldRef<"bitacora", 'Int'>
    readonly id_reserva: FieldRef<"bitacora", 'Int'>
    readonly accion: FieldRef<"bitacora", 'String'>
    readonly fecha: FieldRef<"bitacora", 'DateTime'>
    readonly descripcion: FieldRef<"bitacora", 'String'>
  }
    

  // Custom InputTypes
  /**
   * bitacora findUnique
   */
  export type bitacoraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter, which bitacora to fetch.
     */
    where: bitacoraWhereUniqueInput
  }

  /**
   * bitacora findUniqueOrThrow
   */
  export type bitacoraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter, which bitacora to fetch.
     */
    where: bitacoraWhereUniqueInput
  }

  /**
   * bitacora findFirst
   */
  export type bitacoraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter, which bitacora to fetch.
     */
    where?: bitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacoras to fetch.
     */
    orderBy?: bitacoraOrderByWithRelationInput | bitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacoras.
     */
    cursor?: bitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * bitacora findFirstOrThrow
   */
  export type bitacoraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter, which bitacora to fetch.
     */
    where?: bitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacoras to fetch.
     */
    orderBy?: bitacoraOrderByWithRelationInput | bitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bitacoras.
     */
    cursor?: bitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bitacoras.
     */
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * bitacora findMany
   */
  export type bitacoraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter, which bitacoras to fetch.
     */
    where?: bitacoraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bitacoras to fetch.
     */
    orderBy?: bitacoraOrderByWithRelationInput | bitacoraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bitacoras.
     */
    cursor?: bitacoraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bitacoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bitacoras.
     */
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * bitacora create
   */
  export type bitacoraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * The data needed to create a bitacora.
     */
    data: XOR<bitacoraCreateInput, bitacoraUncheckedCreateInput>
  }

  /**
   * bitacora createMany
   */
  export type bitacoraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bitacoras.
     */
    data: bitacoraCreateManyInput | bitacoraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bitacora createManyAndReturn
   */
  export type bitacoraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * The data used to create many bitacoras.
     */
    data: bitacoraCreateManyInput | bitacoraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bitacora update
   */
  export type bitacoraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * The data needed to update a bitacora.
     */
    data: XOR<bitacoraUpdateInput, bitacoraUncheckedUpdateInput>
    /**
     * Choose, which bitacora to update.
     */
    where: bitacoraWhereUniqueInput
  }

  /**
   * bitacora updateMany
   */
  export type bitacoraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bitacoras.
     */
    data: XOR<bitacoraUpdateManyMutationInput, bitacoraUncheckedUpdateManyInput>
    /**
     * Filter which bitacoras to update
     */
    where?: bitacoraWhereInput
    /**
     * Limit how many bitacoras to update.
     */
    limit?: number
  }

  /**
   * bitacora updateManyAndReturn
   */
  export type bitacoraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * The data used to update bitacoras.
     */
    data: XOR<bitacoraUpdateManyMutationInput, bitacoraUncheckedUpdateManyInput>
    /**
     * Filter which bitacoras to update
     */
    where?: bitacoraWhereInput
    /**
     * Limit how many bitacoras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bitacora upsert
   */
  export type bitacoraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * The filter to search for the bitacora to update in case it exists.
     */
    where: bitacoraWhereUniqueInput
    /**
     * In case the bitacora found by the `where` argument doesn't exist, create a new bitacora with this data.
     */
    create: XOR<bitacoraCreateInput, bitacoraUncheckedCreateInput>
    /**
     * In case the bitacora was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bitacoraUpdateInput, bitacoraUncheckedUpdateInput>
  }

  /**
   * bitacora delete
   */
  export type bitacoraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    /**
     * Filter which bitacora to delete.
     */
    where: bitacoraWhereUniqueInput
  }

  /**
   * bitacora deleteMany
   */
  export type bitacoraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bitacoras to delete
     */
    where?: bitacoraWhereInput
    /**
     * Limit how many bitacoras to delete.
     */
    limit?: number
  }

  /**
   * bitacora.reserva
   */
  export type bitacora$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
  }

  /**
   * bitacora without action
   */
  export type bitacoraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
  }


  /**
   * Model cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    nombre: string | null
    correo: string | null
    telefono: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    nombre: number
    correo: number
    telefono: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    nombre?: true
    correo?: true
    telefono?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    nombre?: true
    correo?: true
    telefono?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    nombre?: true
    correo?: true
    telefono?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clienteWhereInput
    orderBy?: clienteOrderByWithAggregationInput | clienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    nombre: string
    correo: string
    telefono: string | null
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
    reserva?: boolean | cliente$reservaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type clienteSelectScalar = {
    id_cliente?: boolean
    nombre?: boolean
    correo?: boolean
    telefono?: boolean
  }

  export type clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "nombre" | "correo" | "telefono", ExtArgs["result"]["cliente"]>
  export type clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | cliente$reservaArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cliente"
    objects: {
      reserva: Prisma.$reservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      nombre: string
      correo: string
      telefono: string | null
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = $Result.GetResult<Prisma.$clientePayload, S>

  type clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cliente'], meta: { name: 'cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends clienteFindManyArgs>(args?: SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends clienteCreateArgs>(args: SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clienteCreateManyArgs>(args?: SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {clienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id_cliente: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clienteCreateManyAndReturnArgs>(args?: SelectSubset<T, clienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends clienteDeleteArgs>(args: SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clienteUpdateArgs>(args: SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clienteUpdateManyArgs>(args: SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {clienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id_cliente: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends clienteUpdateManyAndReturnArgs>(args: SelectSubset<T, clienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(
      args?: Subset<T, clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clienteGroupByArgs['orderBy'] }
        : { orderBy?: clienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cliente model
   */
  readonly fields: clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends cliente$reservaArgs<ExtArgs> = {}>(args?: Subset<T, cliente$reservaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cliente model
   */
  interface clienteFieldRefs {
    readonly id_cliente: FieldRef<"cliente", 'Int'>
    readonly nombre: FieldRef<"cliente", 'String'>
    readonly correo: FieldRef<"cliente", 'String'>
    readonly telefono: FieldRef<"cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cliente findUnique
   */
  export type clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findUniqueOrThrow
   */
  export type clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente findFirst
   */
  export type clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findFirstOrThrow
   */
  export type clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which cliente to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente findMany
   */
  export type clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter, which clientes to fetch.
     */
    where?: clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clientes to fetch.
     */
    orderBy?: clienteOrderByWithRelationInput | clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clientes.
     */
    cursor?: clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * cliente create
   */
  export type clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a cliente.
     */
    data: XOR<clienteCreateInput, clienteUncheckedCreateInput>
  }

  /**
   * cliente createMany
   */
  export type clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente createManyAndReturn
   */
  export type clienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to create many clientes.
     */
    data: clienteCreateManyInput | clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cliente update
   */
  export type clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a cliente.
     */
    data: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
    /**
     * Choose, which cliente to update.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente updateMany
   */
  export type clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente updateManyAndReturn
   */
  export type clienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * The data used to update clientes.
     */
    data: XOR<clienteUpdateManyMutationInput, clienteUncheckedUpdateManyInput>
    /**
     * Filter which clientes to update
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to update.
     */
    limit?: number
  }

  /**
   * cliente upsert
   */
  export type clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: clienteWhereUniqueInput
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: XOR<clienteCreateInput, clienteUncheckedCreateInput>
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clienteUpdateInput, clienteUncheckedUpdateInput>
  }

  /**
   * cliente delete
   */
  export type clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
    /**
     * Filter which cliente to delete.
     */
    where: clienteWhereUniqueInput
  }

  /**
   * cliente deleteMany
   */
  export type clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: clienteWhereInput
    /**
     * Limit how many clientes to delete.
     */
    limit?: number
  }

  /**
   * cliente.reserva
   */
  export type cliente$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    cursor?: reservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * cliente without action
   */
  export type clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cliente
     */
    omit?: clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clienteInclude<ExtArgs> | null
  }


  /**
   * Model evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id_evento: number | null
    id_recinto: number | null
  }

  export type EventoSumAggregateOutputType = {
    id_evento: number | null
    id_recinto: number | null
  }

  export type EventoMinAggregateOutputType = {
    id_evento: number | null
    nombre_evento: string | null
    descripcion: string | null
    fecha: Date | null
    hora: Date | null
    id_recinto: number | null
  }

  export type EventoMaxAggregateOutputType = {
    id_evento: number | null
    nombre_evento: string | null
    descripcion: string | null
    fecha: Date | null
    hora: Date | null
    id_recinto: number | null
  }

  export type EventoCountAggregateOutputType = {
    id_evento: number
    nombre_evento: number
    descripcion: number
    fecha: number
    hora: number
    id_recinto: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id_evento?: true
    id_recinto?: true
  }

  export type EventoSumAggregateInputType = {
    id_evento?: true
    id_recinto?: true
  }

  export type EventoMinAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    descripcion?: true
    fecha?: true
    hora?: true
    id_recinto?: true
  }

  export type EventoMaxAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    descripcion?: true
    fecha?: true
    hora?: true
    id_recinto?: true
  }

  export type EventoCountAggregateInputType = {
    id_evento?: true
    nombre_evento?: true
    descripcion?: true
    fecha?: true
    hora?: true
    id_recinto?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which evento to aggregate.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type eventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithAggregationInput | eventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: eventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id_evento: number
    nombre_evento: string
    descripcion: string | null
    fecha: Date
    hora: Date
    id_recinto: number
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends eventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type eventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    nombre_evento?: boolean
    descripcion?: boolean
    fecha?: boolean
    hora?: boolean
    id_recinto?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
    reserva?: boolean | evento$reservaArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type eventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    nombre_evento?: boolean
    descripcion?: boolean
    fecha?: boolean
    hora?: boolean
    id_recinto?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type eventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_evento?: boolean
    nombre_evento?: boolean
    descripcion?: boolean
    fecha?: boolean
    hora?: boolean
    id_recinto?: boolean
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type eventoSelectScalar = {
    id_evento?: boolean
    nombre_evento?: boolean
    descripcion?: boolean
    fecha?: boolean
    hora?: boolean
    id_recinto?: boolean
  }

  export type eventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_evento" | "nombre_evento" | "descripcion" | "fecha" | "hora" | "id_recinto", ExtArgs["result"]["evento"]>
  export type eventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
    reserva?: boolean | evento$reservaArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type eventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }
  export type eventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recinto?: boolean | recintoDefaultArgs<ExtArgs>
  }

  export type $eventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "evento"
    objects: {
      recinto: Prisma.$recintoPayload<ExtArgs>
      reserva: Prisma.$reservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_evento: number
      nombre_evento: string
      descripcion: string | null
      fecha: Date
      hora: Date
      id_recinto: number
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type eventoGetPayload<S extends boolean | null | undefined | eventoDefaultArgs> = $Result.GetResult<Prisma.$eventoPayload, S>

  type eventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<eventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface eventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['evento'], meta: { name: 'evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {eventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends eventoFindUniqueArgs>(args: SelectSubset<T, eventoFindUniqueArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {eventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends eventoFindUniqueOrThrowArgs>(args: SelectSubset<T, eventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends eventoFindFirstArgs>(args?: SelectSubset<T, eventoFindFirstArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends eventoFindFirstOrThrowArgs>(args?: SelectSubset<T, eventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.findMany({ select: { id_evento: true } })
     * 
     */
    findMany<T extends eventoFindManyArgs>(args?: SelectSubset<T, eventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {eventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends eventoCreateArgs>(args: SelectSubset<T, eventoCreateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {eventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends eventoCreateManyArgs>(args?: SelectSubset<T, eventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {eventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.createManyAndReturn({
     *   select: { id_evento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends eventoCreateManyAndReturnArgs>(args?: SelectSubset<T, eventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {eventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends eventoDeleteArgs>(args: SelectSubset<T, eventoDeleteArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {eventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends eventoUpdateArgs>(args: SelectSubset<T, eventoUpdateArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {eventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends eventoDeleteManyArgs>(args?: SelectSubset<T, eventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends eventoUpdateManyArgs>(args: SelectSubset<T, eventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {eventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `id_evento`
     * const eventoWithId_eventoOnly = await prisma.evento.updateManyAndReturn({
     *   select: { id_evento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends eventoUpdateManyAndReturnArgs>(args: SelectSubset<T, eventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {eventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends eventoUpsertArgs>(args: SelectSubset<T, eventoUpsertArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends eventoCountArgs>(
      args?: Subset<T, eventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends eventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: eventoGroupByArgs['orderBy'] }
        : { orderBy?: eventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, eventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the evento model
   */
  readonly fields: eventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__eventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recinto<T extends recintoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recintoDefaultArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserva<T extends evento$reservaArgs<ExtArgs> = {}>(args?: Subset<T, evento$reservaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the evento model
   */
  interface eventoFieldRefs {
    readonly id_evento: FieldRef<"evento", 'Int'>
    readonly nombre_evento: FieldRef<"evento", 'String'>
    readonly descripcion: FieldRef<"evento", 'String'>
    readonly fecha: FieldRef<"evento", 'DateTime'>
    readonly hora: FieldRef<"evento", 'DateTime'>
    readonly id_recinto: FieldRef<"evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * evento findUnique
   */
  export type eventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findUniqueOrThrow
   */
  export type eventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento findFirst
   */
  export type eventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findFirstOrThrow
   */
  export type eventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which evento to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento findMany
   */
  export type eventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter, which eventos to fetch.
     */
    where?: eventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eventos to fetch.
     */
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eventos.
     */
    cursor?: eventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * evento create
   */
  export type eventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to create a evento.
     */
    data: XOR<eventoCreateInput, eventoUncheckedCreateInput>
  }

  /**
   * evento createMany
   */
  export type eventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many eventos.
     */
    data: eventoCreateManyInput | eventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * evento createManyAndReturn
   */
  export type eventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * The data used to create many eventos.
     */
    data: eventoCreateManyInput | eventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * evento update
   */
  export type eventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The data needed to update a evento.
     */
    data: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
    /**
     * Choose, which evento to update.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento updateMany
   */
  export type eventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update eventos.
     */
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventoWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
  }

  /**
   * evento updateManyAndReturn
   */
  export type eventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * The data used to update eventos.
     */
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyInput>
    /**
     * Filter which eventos to update
     */
    where?: eventoWhereInput
    /**
     * Limit how many eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * evento upsert
   */
  export type eventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * The filter to search for the evento to update in case it exists.
     */
    where: eventoWhereUniqueInput
    /**
     * In case the evento found by the `where` argument doesn't exist, create a new evento with this data.
     */
    create: XOR<eventoCreateInput, eventoUncheckedCreateInput>
    /**
     * In case the evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eventoUpdateInput, eventoUncheckedUpdateInput>
  }

  /**
   * evento delete
   */
  export type eventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    /**
     * Filter which evento to delete.
     */
    where: eventoWhereUniqueInput
  }

  /**
   * evento deleteMany
   */
  export type eventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which eventos to delete
     */
    where?: eventoWhereInput
    /**
     * Limit how many eventos to delete.
     */
    limit?: number
  }

  /**
   * evento.reserva
   */
  export type evento$reservaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    cursor?: reservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * evento without action
   */
  export type eventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
  }


  /**
   * Model recinto
   */

  export type AggregateRecinto = {
    _count: RecintoCountAggregateOutputType | null
    _avg: RecintoAvgAggregateOutputType | null
    _sum: RecintoSumAggregateOutputType | null
    _min: RecintoMinAggregateOutputType | null
    _max: RecintoMaxAggregateOutputType | null
  }

  export type RecintoAvgAggregateOutputType = {
    id_recinto: number | null
    capacidad: number | null
  }

  export type RecintoSumAggregateOutputType = {
    id_recinto: number | null
    capacidad: number | null
  }

  export type RecintoMinAggregateOutputType = {
    id_recinto: number | null
    nombre: string | null
    ubicacion: string | null
    capacidad: number | null
  }

  export type RecintoMaxAggregateOutputType = {
    id_recinto: number | null
    nombre: string | null
    ubicacion: string | null
    capacidad: number | null
  }

  export type RecintoCountAggregateOutputType = {
    id_recinto: number
    nombre: number
    ubicacion: number
    capacidad: number
    _all: number
  }


  export type RecintoAvgAggregateInputType = {
    id_recinto?: true
    capacidad?: true
  }

  export type RecintoSumAggregateInputType = {
    id_recinto?: true
    capacidad?: true
  }

  export type RecintoMinAggregateInputType = {
    id_recinto?: true
    nombre?: true
    ubicacion?: true
    capacidad?: true
  }

  export type RecintoMaxAggregateInputType = {
    id_recinto?: true
    nombre?: true
    ubicacion?: true
    capacidad?: true
  }

  export type RecintoCountAggregateInputType = {
    id_recinto?: true
    nombre?: true
    ubicacion?: true
    capacidad?: true
    _all?: true
  }

  export type RecintoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recinto to aggregate.
     */
    where?: recintoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recintos to fetch.
     */
    orderBy?: recintoOrderByWithRelationInput | recintoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recintoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recintos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recintos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recintos
    **/
    _count?: true | RecintoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecintoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecintoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecintoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecintoMaxAggregateInputType
  }

  export type GetRecintoAggregateType<T extends RecintoAggregateArgs> = {
        [P in keyof T & keyof AggregateRecinto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecinto[P]>
      : GetScalarType<T[P], AggregateRecinto[P]>
  }




  export type recintoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recintoWhereInput
    orderBy?: recintoOrderByWithAggregationInput | recintoOrderByWithAggregationInput[]
    by: RecintoScalarFieldEnum[] | RecintoScalarFieldEnum
    having?: recintoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecintoCountAggregateInputType | true
    _avg?: RecintoAvgAggregateInputType
    _sum?: RecintoSumAggregateInputType
    _min?: RecintoMinAggregateInputType
    _max?: RecintoMaxAggregateInputType
  }

  export type RecintoGroupByOutputType = {
    id_recinto: number
    nombre: string
    ubicacion: string
    capacidad: number
    _count: RecintoCountAggregateOutputType | null
    _avg: RecintoAvgAggregateOutputType | null
    _sum: RecintoSumAggregateOutputType | null
    _min: RecintoMinAggregateOutputType | null
    _max: RecintoMaxAggregateOutputType | null
  }

  type GetRecintoGroupByPayload<T extends recintoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecintoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecintoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecintoGroupByOutputType[P]>
            : GetScalarType<T[P], RecintoGroupByOutputType[P]>
        }
      >
    >


  export type recintoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recinto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    capacidad?: boolean
    asiento?: boolean | recinto$asientoArgs<ExtArgs>
    evento?: boolean | recinto$eventoArgs<ExtArgs>
    _count?: boolean | RecintoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recinto"]>

  export type recintoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recinto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    capacidad?: boolean
  }, ExtArgs["result"]["recinto"]>

  export type recintoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_recinto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    capacidad?: boolean
  }, ExtArgs["result"]["recinto"]>

  export type recintoSelectScalar = {
    id_recinto?: boolean
    nombre?: boolean
    ubicacion?: boolean
    capacidad?: boolean
  }

  export type recintoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_recinto" | "nombre" | "ubicacion" | "capacidad", ExtArgs["result"]["recinto"]>
  export type recintoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asiento?: boolean | recinto$asientoArgs<ExtArgs>
    evento?: boolean | recinto$eventoArgs<ExtArgs>
    _count?: boolean | RecintoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recintoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type recintoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $recintoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recinto"
    objects: {
      asiento: Prisma.$asientoPayload<ExtArgs>[]
      evento: Prisma.$eventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_recinto: number
      nombre: string
      ubicacion: string
      capacidad: number
    }, ExtArgs["result"]["recinto"]>
    composites: {}
  }

  type recintoGetPayload<S extends boolean | null | undefined | recintoDefaultArgs> = $Result.GetResult<Prisma.$recintoPayload, S>

  type recintoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recintoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecintoCountAggregateInputType | true
    }

  export interface recintoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recinto'], meta: { name: 'recinto' } }
    /**
     * Find zero or one Recinto that matches the filter.
     * @param {recintoFindUniqueArgs} args - Arguments to find a Recinto
     * @example
     * // Get one Recinto
     * const recinto = await prisma.recinto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recintoFindUniqueArgs>(args: SelectSubset<T, recintoFindUniqueArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recinto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recintoFindUniqueOrThrowArgs} args - Arguments to find a Recinto
     * @example
     * // Get one Recinto
     * const recinto = await prisma.recinto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recintoFindUniqueOrThrowArgs>(args: SelectSubset<T, recintoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recinto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoFindFirstArgs} args - Arguments to find a Recinto
     * @example
     * // Get one Recinto
     * const recinto = await prisma.recinto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recintoFindFirstArgs>(args?: SelectSubset<T, recintoFindFirstArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recinto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoFindFirstOrThrowArgs} args - Arguments to find a Recinto
     * @example
     * // Get one Recinto
     * const recinto = await prisma.recinto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recintoFindFirstOrThrowArgs>(args?: SelectSubset<T, recintoFindFirstOrThrowArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recintos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recintos
     * const recintos = await prisma.recinto.findMany()
     * 
     * // Get first 10 Recintos
     * const recintos = await prisma.recinto.findMany({ take: 10 })
     * 
     * // Only select the `id_recinto`
     * const recintoWithId_recintoOnly = await prisma.recinto.findMany({ select: { id_recinto: true } })
     * 
     */
    findMany<T extends recintoFindManyArgs>(args?: SelectSubset<T, recintoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recinto.
     * @param {recintoCreateArgs} args - Arguments to create a Recinto.
     * @example
     * // Create one Recinto
     * const Recinto = await prisma.recinto.create({
     *   data: {
     *     // ... data to create a Recinto
     *   }
     * })
     * 
     */
    create<T extends recintoCreateArgs>(args: SelectSubset<T, recintoCreateArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recintos.
     * @param {recintoCreateManyArgs} args - Arguments to create many Recintos.
     * @example
     * // Create many Recintos
     * const recinto = await prisma.recinto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recintoCreateManyArgs>(args?: SelectSubset<T, recintoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recintos and returns the data saved in the database.
     * @param {recintoCreateManyAndReturnArgs} args - Arguments to create many Recintos.
     * @example
     * // Create many Recintos
     * const recinto = await prisma.recinto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recintos and only return the `id_recinto`
     * const recintoWithId_recintoOnly = await prisma.recinto.createManyAndReturn({
     *   select: { id_recinto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recintoCreateManyAndReturnArgs>(args?: SelectSubset<T, recintoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recinto.
     * @param {recintoDeleteArgs} args - Arguments to delete one Recinto.
     * @example
     * // Delete one Recinto
     * const Recinto = await prisma.recinto.delete({
     *   where: {
     *     // ... filter to delete one Recinto
     *   }
     * })
     * 
     */
    delete<T extends recintoDeleteArgs>(args: SelectSubset<T, recintoDeleteArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recinto.
     * @param {recintoUpdateArgs} args - Arguments to update one Recinto.
     * @example
     * // Update one Recinto
     * const recinto = await prisma.recinto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recintoUpdateArgs>(args: SelectSubset<T, recintoUpdateArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recintos.
     * @param {recintoDeleteManyArgs} args - Arguments to filter Recintos to delete.
     * @example
     * // Delete a few Recintos
     * const { count } = await prisma.recinto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recintoDeleteManyArgs>(args?: SelectSubset<T, recintoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recintos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recintos
     * const recinto = await prisma.recinto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recintoUpdateManyArgs>(args: SelectSubset<T, recintoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recintos and returns the data updated in the database.
     * @param {recintoUpdateManyAndReturnArgs} args - Arguments to update many Recintos.
     * @example
     * // Update many Recintos
     * const recinto = await prisma.recinto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recintos and only return the `id_recinto`
     * const recintoWithId_recintoOnly = await prisma.recinto.updateManyAndReturn({
     *   select: { id_recinto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recintoUpdateManyAndReturnArgs>(args: SelectSubset<T, recintoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recinto.
     * @param {recintoUpsertArgs} args - Arguments to update or create a Recinto.
     * @example
     * // Update or create a Recinto
     * const recinto = await prisma.recinto.upsert({
     *   create: {
     *     // ... data to create a Recinto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recinto we want to update
     *   }
     * })
     */
    upsert<T extends recintoUpsertArgs>(args: SelectSubset<T, recintoUpsertArgs<ExtArgs>>): Prisma__recintoClient<$Result.GetResult<Prisma.$recintoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recintos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoCountArgs} args - Arguments to filter Recintos to count.
     * @example
     * // Count the number of Recintos
     * const count = await prisma.recinto.count({
     *   where: {
     *     // ... the filter for the Recintos we want to count
     *   }
     * })
    **/
    count<T extends recintoCountArgs>(
      args?: Subset<T, recintoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecintoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recinto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecintoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecintoAggregateArgs>(args: Subset<T, RecintoAggregateArgs>): Prisma.PrismaPromise<GetRecintoAggregateType<T>>

    /**
     * Group by Recinto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recintoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recintoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recintoGroupByArgs['orderBy'] }
        : { orderBy?: recintoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recintoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecintoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recinto model
   */
  readonly fields: recintoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recinto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recintoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asiento<T extends recinto$asientoArgs<ExtArgs> = {}>(args?: Subset<T, recinto$asientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evento<T extends recinto$eventoArgs<ExtArgs> = {}>(args?: Subset<T, recinto$eventoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recinto model
   */
  interface recintoFieldRefs {
    readonly id_recinto: FieldRef<"recinto", 'Int'>
    readonly nombre: FieldRef<"recinto", 'String'>
    readonly ubicacion: FieldRef<"recinto", 'String'>
    readonly capacidad: FieldRef<"recinto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * recinto findUnique
   */
  export type recintoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter, which recinto to fetch.
     */
    where: recintoWhereUniqueInput
  }

  /**
   * recinto findUniqueOrThrow
   */
  export type recintoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter, which recinto to fetch.
     */
    where: recintoWhereUniqueInput
  }

  /**
   * recinto findFirst
   */
  export type recintoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter, which recinto to fetch.
     */
    where?: recintoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recintos to fetch.
     */
    orderBy?: recintoOrderByWithRelationInput | recintoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recintos.
     */
    cursor?: recintoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recintos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recintos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recintos.
     */
    distinct?: RecintoScalarFieldEnum | RecintoScalarFieldEnum[]
  }

  /**
   * recinto findFirstOrThrow
   */
  export type recintoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter, which recinto to fetch.
     */
    where?: recintoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recintos to fetch.
     */
    orderBy?: recintoOrderByWithRelationInput | recintoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recintos.
     */
    cursor?: recintoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recintos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recintos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recintos.
     */
    distinct?: RecintoScalarFieldEnum | RecintoScalarFieldEnum[]
  }

  /**
   * recinto findMany
   */
  export type recintoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter, which recintos to fetch.
     */
    where?: recintoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recintos to fetch.
     */
    orderBy?: recintoOrderByWithRelationInput | recintoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recintos.
     */
    cursor?: recintoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recintos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recintos.
     */
    skip?: number
    distinct?: RecintoScalarFieldEnum | RecintoScalarFieldEnum[]
  }

  /**
   * recinto create
   */
  export type recintoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * The data needed to create a recinto.
     */
    data: XOR<recintoCreateInput, recintoUncheckedCreateInput>
  }

  /**
   * recinto createMany
   */
  export type recintoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recintos.
     */
    data: recintoCreateManyInput | recintoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recinto createManyAndReturn
   */
  export type recintoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * The data used to create many recintos.
     */
    data: recintoCreateManyInput | recintoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recinto update
   */
  export type recintoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * The data needed to update a recinto.
     */
    data: XOR<recintoUpdateInput, recintoUncheckedUpdateInput>
    /**
     * Choose, which recinto to update.
     */
    where: recintoWhereUniqueInput
  }

  /**
   * recinto updateMany
   */
  export type recintoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recintos.
     */
    data: XOR<recintoUpdateManyMutationInput, recintoUncheckedUpdateManyInput>
    /**
     * Filter which recintos to update
     */
    where?: recintoWhereInput
    /**
     * Limit how many recintos to update.
     */
    limit?: number
  }

  /**
   * recinto updateManyAndReturn
   */
  export type recintoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * The data used to update recintos.
     */
    data: XOR<recintoUpdateManyMutationInput, recintoUncheckedUpdateManyInput>
    /**
     * Filter which recintos to update
     */
    where?: recintoWhereInput
    /**
     * Limit how many recintos to update.
     */
    limit?: number
  }

  /**
   * recinto upsert
   */
  export type recintoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * The filter to search for the recinto to update in case it exists.
     */
    where: recintoWhereUniqueInput
    /**
     * In case the recinto found by the `where` argument doesn't exist, create a new recinto with this data.
     */
    create: XOR<recintoCreateInput, recintoUncheckedCreateInput>
    /**
     * In case the recinto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recintoUpdateInput, recintoUncheckedUpdateInput>
  }

  /**
   * recinto delete
   */
  export type recintoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
    /**
     * Filter which recinto to delete.
     */
    where: recintoWhereUniqueInput
  }

  /**
   * recinto deleteMany
   */
  export type recintoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recintos to delete
     */
    where?: recintoWhereInput
    /**
     * Limit how many recintos to delete.
     */
    limit?: number
  }

  /**
   * recinto.asiento
   */
  export type recinto$asientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the asiento
     */
    omit?: asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: asientoInclude<ExtArgs> | null
    where?: asientoWhereInput
    orderBy?: asientoOrderByWithRelationInput | asientoOrderByWithRelationInput[]
    cursor?: asientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsientoScalarFieldEnum | AsientoScalarFieldEnum[]
  }

  /**
   * recinto.evento
   */
  export type recinto$eventoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the evento
     */
    select?: eventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the evento
     */
    omit?: eventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: eventoInclude<ExtArgs> | null
    where?: eventoWhereInput
    orderBy?: eventoOrderByWithRelationInput | eventoOrderByWithRelationInput[]
    cursor?: eventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * recinto without action
   */
  export type recintoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recinto
     */
    select?: recintoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recinto
     */
    omit?: recintoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recintoInclude<ExtArgs> | null
  }


  /**
   * Model reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id_reserva: number | null
    id_cliente: number | null
    id_evento: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id_reserva: number | null
    id_cliente: number | null
    id_evento: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id_reserva: number | null
    id_cliente: number | null
    id_evento: number | null
    fecha_reserva: Date | null
    estado_reserva: string | null
  }

  export type ReservaMaxAggregateOutputType = {
    id_reserva: number | null
    id_cliente: number | null
    id_evento: number | null
    fecha_reserva: Date | null
    estado_reserva: string | null
  }

  export type ReservaCountAggregateOutputType = {
    id_reserva: number
    id_cliente: number
    id_evento: number
    fecha_reserva: number
    estado_reserva: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id_reserva?: true
    id_cliente?: true
    id_evento?: true
  }

  export type ReservaSumAggregateInputType = {
    id_reserva?: true
    id_cliente?: true
    id_evento?: true
  }

  export type ReservaMinAggregateInputType = {
    id_reserva?: true
    id_cliente?: true
    id_evento?: true
    fecha_reserva?: true
    estado_reserva?: true
  }

  export type ReservaMaxAggregateInputType = {
    id_reserva?: true
    id_cliente?: true
    id_evento?: true
    fecha_reserva?: true
    estado_reserva?: true
  }

  export type ReservaCountAggregateInputType = {
    id_reserva?: true
    id_cliente?: true
    id_evento?: true
    fecha_reserva?: true
    estado_reserva?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva to aggregate.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type reservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservaWhereInput
    orderBy?: reservaOrderByWithAggregationInput | reservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: reservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id_reserva: number
    id_cliente: number
    id_evento: number
    fecha_reserva: Date | null
    estado_reserva: string
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends reservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type reservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_cliente?: boolean
    id_evento?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    bitacora?: boolean | reserva$bitacoraArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
    reserva_asiento?: boolean | reserva$reserva_asientoArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_cliente?: boolean
    id_evento?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_cliente?: boolean
    id_evento?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type reservaSelectScalar = {
    id_reserva?: boolean
    id_cliente?: boolean
    id_evento?: boolean
    fecha_reserva?: boolean
    estado_reserva?: boolean
  }

  export type reservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_cliente" | "id_evento" | "fecha_reserva" | "estado_reserva", ExtArgs["result"]["reserva"]>
  export type reservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bitacora?: boolean | reserva$bitacoraArgs<ExtArgs>
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
    reserva_asiento?: boolean | reserva$reserva_asientoArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type reservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
  }
  export type reservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | clienteDefaultArgs<ExtArgs>
    evento?: boolean | eventoDefaultArgs<ExtArgs>
  }

  export type $reservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva"
    objects: {
      bitacora: Prisma.$bitacoraPayload<ExtArgs>[]
      cliente: Prisma.$clientePayload<ExtArgs>
      evento: Prisma.$eventoPayload<ExtArgs>
      reserva_asiento: Prisma.$reserva_asientoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: number
      id_cliente: number
      id_evento: number
      fecha_reserva: Date | null
      estado_reserva: string
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type reservaGetPayload<S extends boolean | null | undefined | reservaDefaultArgs> = $Result.GetResult<Prisma.$reservaPayload, S>

  type reservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface reservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva'], meta: { name: 'reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {reservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservaFindUniqueArgs>(args: SelectSubset<T, reservaFindUniqueArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservaFindUniqueOrThrowArgs>(args: SelectSubset<T, reservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservaFindFirstArgs>(args?: SelectSubset<T, reservaFindFirstArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservaFindFirstOrThrowArgs>(args?: SelectSubset<T, reservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservaFindManyArgs>(args?: SelectSubset<T, reservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {reservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends reservaCreateArgs>(args: SelectSubset<T, reservaCreateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservaCreateManyArgs>(args?: SelectSubset<T, reservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservaCreateManyAndReturnArgs>(args?: SelectSubset<T, reservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {reservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends reservaDeleteArgs>(args: SelectSubset<T, reservaDeleteArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {reservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservaUpdateArgs>(args: SelectSubset<T, reservaUpdateArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservaDeleteManyArgs>(args?: SelectSubset<T, reservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservaUpdateManyArgs>(args: SelectSubset<T, reservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservaWithId_reservaOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id_reserva: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reservaUpdateManyAndReturnArgs>(args: SelectSubset<T, reservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {reservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends reservaUpsertArgs>(args: SelectSubset<T, reservaUpsertArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservaCountArgs>(
      args?: Subset<T, reservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservaGroupByArgs['orderBy'] }
        : { orderBy?: reservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva model
   */
  readonly fields: reservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bitacora<T extends reserva$bitacoraArgs<ExtArgs> = {}>(args?: Subset<T, reserva$bitacoraArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cliente<T extends clienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clienteDefaultArgs<ExtArgs>>): Prisma__clienteClient<$Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evento<T extends eventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, eventoDefaultArgs<ExtArgs>>): Prisma__eventoClient<$Result.GetResult<Prisma.$eventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserva_asiento<T extends reserva$reserva_asientoArgs<ExtArgs> = {}>(args?: Subset<T, reserva$reserva_asientoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserva model
   */
  interface reservaFieldRefs {
    readonly id_reserva: FieldRef<"reserva", 'Int'>
    readonly id_cliente: FieldRef<"reserva", 'Int'>
    readonly id_evento: FieldRef<"reserva", 'Int'>
    readonly fecha_reserva: FieldRef<"reserva", 'DateTime'>
    readonly estado_reserva: FieldRef<"reserva", 'String'>
  }
    

  // Custom InputTypes
  /**
   * reserva findUnique
   */
  export type reservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findUniqueOrThrow
   */
  export type reservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva findFirst
   */
  export type reservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findFirstOrThrow
   */
  export type reservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reserva to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva findMany
   */
  export type reservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservaOrderByWithRelationInput | reservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * reserva create
   */
  export type reservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva.
     */
    data: XOR<reservaCreateInput, reservaUncheckedCreateInput>
  }

  /**
   * reserva createMany
   */
  export type reservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva createManyAndReturn
   */
  export type reservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservaCreateManyInput | reservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva update
   */
  export type reservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva.
     */
    data: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
    /**
     * Choose, which reserva to update.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva updateMany
   */
  export type reservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reserva updateManyAndReturn
   */
  export type reservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva upsert
   */
  export type reservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva to update in case it exists.
     */
    where: reservaWhereUniqueInput
    /**
     * In case the reserva found by the `where` argument doesn't exist, create a new reserva with this data.
     */
    create: XOR<reservaCreateInput, reservaUncheckedCreateInput>
    /**
     * In case the reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservaUpdateInput, reservaUncheckedUpdateInput>
  }

  /**
   * reserva delete
   */
  export type reservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
    /**
     * Filter which reserva to delete.
     */
    where: reservaWhereUniqueInput
  }

  /**
   * reserva deleteMany
   */
  export type reservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservaWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reserva.bitacora
   */
  export type reserva$bitacoraArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bitacora
     */
    select?: bitacoraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bitacora
     */
    omit?: bitacoraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bitacoraInclude<ExtArgs> | null
    where?: bitacoraWhereInput
    orderBy?: bitacoraOrderByWithRelationInput | bitacoraOrderByWithRelationInput[]
    cursor?: bitacoraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BitacoraScalarFieldEnum | BitacoraScalarFieldEnum[]
  }

  /**
   * reserva.reserva_asiento
   */
  export type reserva$reserva_asientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    where?: reserva_asientoWhereInput
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    cursor?: reserva_asientoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Reserva_asientoScalarFieldEnum | Reserva_asientoScalarFieldEnum[]
  }

  /**
   * reserva without action
   */
  export type reservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva
     */
    select?: reservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva
     */
    omit?: reservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservaInclude<ExtArgs> | null
  }


  /**
   * Model reserva_asiento
   */

  export type AggregateReserva_asiento = {
    _count: Reserva_asientoCountAggregateOutputType | null
    _avg: Reserva_asientoAvgAggregateOutputType | null
    _sum: Reserva_asientoSumAggregateOutputType | null
    _min: Reserva_asientoMinAggregateOutputType | null
    _max: Reserva_asientoMaxAggregateOutputType | null
  }

  export type Reserva_asientoAvgAggregateOutputType = {
    id_reserva_asiento: number | null
    id_reserva: number | null
    id_asiento: number | null
  }

  export type Reserva_asientoSumAggregateOutputType = {
    id_reserva_asiento: number | null
    id_reserva: number | null
    id_asiento: number | null
  }

  export type Reserva_asientoMinAggregateOutputType = {
    id_reserva_asiento: number | null
    id_reserva: number | null
    id_asiento: number | null
  }

  export type Reserva_asientoMaxAggregateOutputType = {
    id_reserva_asiento: number | null
    id_reserva: number | null
    id_asiento: number | null
  }

  export type Reserva_asientoCountAggregateOutputType = {
    id_reserva_asiento: number
    id_reserva: number
    id_asiento: number
    _all: number
  }


  export type Reserva_asientoAvgAggregateInputType = {
    id_reserva_asiento?: true
    id_reserva?: true
    id_asiento?: true
  }

  export type Reserva_asientoSumAggregateInputType = {
    id_reserva_asiento?: true
    id_reserva?: true
    id_asiento?: true
  }

  export type Reserva_asientoMinAggregateInputType = {
    id_reserva_asiento?: true
    id_reserva?: true
    id_asiento?: true
  }

  export type Reserva_asientoMaxAggregateInputType = {
    id_reserva_asiento?: true
    id_reserva?: true
    id_asiento?: true
  }

  export type Reserva_asientoCountAggregateInputType = {
    id_reserva_asiento?: true
    id_reserva?: true
    id_asiento?: true
    _all?: true
  }

  export type Reserva_asientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_asiento to aggregate.
     */
    where?: reserva_asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_asientos to fetch.
     */
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reserva_asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reserva_asientos
    **/
    _count?: true | Reserva_asientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reserva_asientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reserva_asientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reserva_asientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reserva_asientoMaxAggregateInputType
  }

  export type GetReserva_asientoAggregateType<T extends Reserva_asientoAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva_asiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva_asiento[P]>
      : GetScalarType<T[P], AggregateReserva_asiento[P]>
  }




  export type reserva_asientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reserva_asientoWhereInput
    orderBy?: reserva_asientoOrderByWithAggregationInput | reserva_asientoOrderByWithAggregationInput[]
    by: Reserva_asientoScalarFieldEnum[] | Reserva_asientoScalarFieldEnum
    having?: reserva_asientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reserva_asientoCountAggregateInputType | true
    _avg?: Reserva_asientoAvgAggregateInputType
    _sum?: Reserva_asientoSumAggregateInputType
    _min?: Reserva_asientoMinAggregateInputType
    _max?: Reserva_asientoMaxAggregateInputType
  }

  export type Reserva_asientoGroupByOutputType = {
    id_reserva_asiento: number
    id_reserva: number
    id_asiento: number
    _count: Reserva_asientoCountAggregateOutputType | null
    _avg: Reserva_asientoAvgAggregateOutputType | null
    _sum: Reserva_asientoSumAggregateOutputType | null
    _min: Reserva_asientoMinAggregateOutputType | null
    _max: Reserva_asientoMaxAggregateOutputType | null
  }

  type GetReserva_asientoGroupByPayload<T extends reserva_asientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Reserva_asientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reserva_asientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reserva_asientoGroupByOutputType[P]>
            : GetScalarType<T[P], Reserva_asientoGroupByOutputType[P]>
        }
      >
    >


  export type reserva_asientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva_asiento?: boolean
    id_reserva?: boolean
    id_asiento?: boolean
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva_asiento"]>

  export type reserva_asientoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva_asiento?: boolean
    id_reserva?: boolean
    id_asiento?: boolean
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva_asiento"]>

  export type reserva_asientoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva_asiento?: boolean
    id_reserva?: boolean
    id_asiento?: boolean
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva_asiento"]>

  export type reserva_asientoSelectScalar = {
    id_reserva_asiento?: boolean
    id_reserva?: boolean
    id_asiento?: boolean
  }

  export type reserva_asientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva_asiento" | "id_reserva" | "id_asiento", ExtArgs["result"]["reserva_asiento"]>
  export type reserva_asientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }
  export type reserva_asientoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }
  export type reserva_asientoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asiento?: boolean | asientoDefaultArgs<ExtArgs>
    reserva?: boolean | reservaDefaultArgs<ExtArgs>
  }

  export type $reserva_asientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reserva_asiento"
    objects: {
      asiento: Prisma.$asientoPayload<ExtArgs>
      reserva: Prisma.$reservaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva_asiento: number
      id_reserva: number
      id_asiento: number
    }, ExtArgs["result"]["reserva_asiento"]>
    composites: {}
  }

  type reserva_asientoGetPayload<S extends boolean | null | undefined | reserva_asientoDefaultArgs> = $Result.GetResult<Prisma.$reserva_asientoPayload, S>

  type reserva_asientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reserva_asientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Reserva_asientoCountAggregateInputType | true
    }

  export interface reserva_asientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reserva_asiento'], meta: { name: 'reserva_asiento' } }
    /**
     * Find zero or one Reserva_asiento that matches the filter.
     * @param {reserva_asientoFindUniqueArgs} args - Arguments to find a Reserva_asiento
     * @example
     * // Get one Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reserva_asientoFindUniqueArgs>(args: SelectSubset<T, reserva_asientoFindUniqueArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva_asiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reserva_asientoFindUniqueOrThrowArgs} args - Arguments to find a Reserva_asiento
     * @example
     * // Get one Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reserva_asientoFindUniqueOrThrowArgs>(args: SelectSubset<T, reserva_asientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva_asiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoFindFirstArgs} args - Arguments to find a Reserva_asiento
     * @example
     * // Get one Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reserva_asientoFindFirstArgs>(args?: SelectSubset<T, reserva_asientoFindFirstArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva_asiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoFindFirstOrThrowArgs} args - Arguments to find a Reserva_asiento
     * @example
     * // Get one Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reserva_asientoFindFirstOrThrowArgs>(args?: SelectSubset<T, reserva_asientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reserva_asientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reserva_asientos
     * const reserva_asientos = await prisma.reserva_asiento.findMany()
     * 
     * // Get first 10 Reserva_asientos
     * const reserva_asientos = await prisma.reserva_asiento.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva_asiento`
     * const reserva_asientoWithId_reserva_asientoOnly = await prisma.reserva_asiento.findMany({ select: { id_reserva_asiento: true } })
     * 
     */
    findMany<T extends reserva_asientoFindManyArgs>(args?: SelectSubset<T, reserva_asientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva_asiento.
     * @param {reserva_asientoCreateArgs} args - Arguments to create a Reserva_asiento.
     * @example
     * // Create one Reserva_asiento
     * const Reserva_asiento = await prisma.reserva_asiento.create({
     *   data: {
     *     // ... data to create a Reserva_asiento
     *   }
     * })
     * 
     */
    create<T extends reserva_asientoCreateArgs>(args: SelectSubset<T, reserva_asientoCreateArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reserva_asientos.
     * @param {reserva_asientoCreateManyArgs} args - Arguments to create many Reserva_asientos.
     * @example
     * // Create many Reserva_asientos
     * const reserva_asiento = await prisma.reserva_asiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reserva_asientoCreateManyArgs>(args?: SelectSubset<T, reserva_asientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reserva_asientos and returns the data saved in the database.
     * @param {reserva_asientoCreateManyAndReturnArgs} args - Arguments to create many Reserva_asientos.
     * @example
     * // Create many Reserva_asientos
     * const reserva_asiento = await prisma.reserva_asiento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reserva_asientos and only return the `id_reserva_asiento`
     * const reserva_asientoWithId_reserva_asientoOnly = await prisma.reserva_asiento.createManyAndReturn({
     *   select: { id_reserva_asiento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reserva_asientoCreateManyAndReturnArgs>(args?: SelectSubset<T, reserva_asientoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva_asiento.
     * @param {reserva_asientoDeleteArgs} args - Arguments to delete one Reserva_asiento.
     * @example
     * // Delete one Reserva_asiento
     * const Reserva_asiento = await prisma.reserva_asiento.delete({
     *   where: {
     *     // ... filter to delete one Reserva_asiento
     *   }
     * })
     * 
     */
    delete<T extends reserva_asientoDeleteArgs>(args: SelectSubset<T, reserva_asientoDeleteArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva_asiento.
     * @param {reserva_asientoUpdateArgs} args - Arguments to update one Reserva_asiento.
     * @example
     * // Update one Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reserva_asientoUpdateArgs>(args: SelectSubset<T, reserva_asientoUpdateArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reserva_asientos.
     * @param {reserva_asientoDeleteManyArgs} args - Arguments to filter Reserva_asientos to delete.
     * @example
     * // Delete a few Reserva_asientos
     * const { count } = await prisma.reserva_asiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reserva_asientoDeleteManyArgs>(args?: SelectSubset<T, reserva_asientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserva_asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reserva_asientos
     * const reserva_asiento = await prisma.reserva_asiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reserva_asientoUpdateManyArgs>(args: SelectSubset<T, reserva_asientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reserva_asientos and returns the data updated in the database.
     * @param {reserva_asientoUpdateManyAndReturnArgs} args - Arguments to update many Reserva_asientos.
     * @example
     * // Update many Reserva_asientos
     * const reserva_asiento = await prisma.reserva_asiento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reserva_asientos and only return the `id_reserva_asiento`
     * const reserva_asientoWithId_reserva_asientoOnly = await prisma.reserva_asiento.updateManyAndReturn({
     *   select: { id_reserva_asiento: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reserva_asientoUpdateManyAndReturnArgs>(args: SelectSubset<T, reserva_asientoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva_asiento.
     * @param {reserva_asientoUpsertArgs} args - Arguments to update or create a Reserva_asiento.
     * @example
     * // Update or create a Reserva_asiento
     * const reserva_asiento = await prisma.reserva_asiento.upsert({
     *   create: {
     *     // ... data to create a Reserva_asiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva_asiento we want to update
     *   }
     * })
     */
    upsert<T extends reserva_asientoUpsertArgs>(args: SelectSubset<T, reserva_asientoUpsertArgs<ExtArgs>>): Prisma__reserva_asientoClient<$Result.GetResult<Prisma.$reserva_asientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reserva_asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoCountArgs} args - Arguments to filter Reserva_asientos to count.
     * @example
     * // Count the number of Reserva_asientos
     * const count = await prisma.reserva_asiento.count({
     *   where: {
     *     // ... the filter for the Reserva_asientos we want to count
     *   }
     * })
    **/
    count<T extends reserva_asientoCountArgs>(
      args?: Subset<T, reserva_asientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reserva_asientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva_asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reserva_asientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Reserva_asientoAggregateArgs>(args: Subset<T, Reserva_asientoAggregateArgs>): Prisma.PrismaPromise<GetReserva_asientoAggregateType<T>>

    /**
     * Group by Reserva_asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reserva_asientoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reserva_asientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reserva_asientoGroupByArgs['orderBy'] }
        : { orderBy?: reserva_asientoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reserva_asientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReserva_asientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reserva_asiento model
   */
  readonly fields: reserva_asientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reserva_asiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reserva_asientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asiento<T extends asientoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, asientoDefaultArgs<ExtArgs>>): Prisma__asientoClient<$Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reserva<T extends reservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, reservaDefaultArgs<ExtArgs>>): Prisma__reservaClient<$Result.GetResult<Prisma.$reservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reserva_asiento model
   */
  interface reserva_asientoFieldRefs {
    readonly id_reserva_asiento: FieldRef<"reserva_asiento", 'Int'>
    readonly id_reserva: FieldRef<"reserva_asiento", 'Int'>
    readonly id_asiento: FieldRef<"reserva_asiento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * reserva_asiento findUnique
   */
  export type reserva_asientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter, which reserva_asiento to fetch.
     */
    where: reserva_asientoWhereUniqueInput
  }

  /**
   * reserva_asiento findUniqueOrThrow
   */
  export type reserva_asientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter, which reserva_asiento to fetch.
     */
    where: reserva_asientoWhereUniqueInput
  }

  /**
   * reserva_asiento findFirst
   */
  export type reserva_asientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter, which reserva_asiento to fetch.
     */
    where?: reserva_asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_asientos to fetch.
     */
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_asientos.
     */
    cursor?: reserva_asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_asientos.
     */
    distinct?: Reserva_asientoScalarFieldEnum | Reserva_asientoScalarFieldEnum[]
  }

  /**
   * reserva_asiento findFirstOrThrow
   */
  export type reserva_asientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter, which reserva_asiento to fetch.
     */
    where?: reserva_asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_asientos to fetch.
     */
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reserva_asientos.
     */
    cursor?: reserva_asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_asientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reserva_asientos.
     */
    distinct?: Reserva_asientoScalarFieldEnum | Reserva_asientoScalarFieldEnum[]
  }

  /**
   * reserva_asiento findMany
   */
  export type reserva_asientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter, which reserva_asientos to fetch.
     */
    where?: reserva_asientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reserva_asientos to fetch.
     */
    orderBy?: reserva_asientoOrderByWithRelationInput | reserva_asientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reserva_asientos.
     */
    cursor?: reserva_asientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reserva_asientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reserva_asientos.
     */
    skip?: number
    distinct?: Reserva_asientoScalarFieldEnum | Reserva_asientoScalarFieldEnum[]
  }

  /**
   * reserva_asiento create
   */
  export type reserva_asientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * The data needed to create a reserva_asiento.
     */
    data: XOR<reserva_asientoCreateInput, reserva_asientoUncheckedCreateInput>
  }

  /**
   * reserva_asiento createMany
   */
  export type reserva_asientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reserva_asientos.
     */
    data: reserva_asientoCreateManyInput | reserva_asientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reserva_asiento createManyAndReturn
   */
  export type reserva_asientoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * The data used to create many reserva_asientos.
     */
    data: reserva_asientoCreateManyInput | reserva_asientoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva_asiento update
   */
  export type reserva_asientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * The data needed to update a reserva_asiento.
     */
    data: XOR<reserva_asientoUpdateInput, reserva_asientoUncheckedUpdateInput>
    /**
     * Choose, which reserva_asiento to update.
     */
    where: reserva_asientoWhereUniqueInput
  }

  /**
   * reserva_asiento updateMany
   */
  export type reserva_asientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reserva_asientos.
     */
    data: XOR<reserva_asientoUpdateManyMutationInput, reserva_asientoUncheckedUpdateManyInput>
    /**
     * Filter which reserva_asientos to update
     */
    where?: reserva_asientoWhereInput
    /**
     * Limit how many reserva_asientos to update.
     */
    limit?: number
  }

  /**
   * reserva_asiento updateManyAndReturn
   */
  export type reserva_asientoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * The data used to update reserva_asientos.
     */
    data: XOR<reserva_asientoUpdateManyMutationInput, reserva_asientoUncheckedUpdateManyInput>
    /**
     * Filter which reserva_asientos to update
     */
    where?: reserva_asientoWhereInput
    /**
     * Limit how many reserva_asientos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reserva_asiento upsert
   */
  export type reserva_asientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * The filter to search for the reserva_asiento to update in case it exists.
     */
    where: reserva_asientoWhereUniqueInput
    /**
     * In case the reserva_asiento found by the `where` argument doesn't exist, create a new reserva_asiento with this data.
     */
    create: XOR<reserva_asientoCreateInput, reserva_asientoUncheckedCreateInput>
    /**
     * In case the reserva_asiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reserva_asientoUpdateInput, reserva_asientoUncheckedUpdateInput>
  }

  /**
   * reserva_asiento delete
   */
  export type reserva_asientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
    /**
     * Filter which reserva_asiento to delete.
     */
    where: reserva_asientoWhereUniqueInput
  }

  /**
   * reserva_asiento deleteMany
   */
  export type reserva_asientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reserva_asientos to delete
     */
    where?: reserva_asientoWhereInput
    /**
     * Limit how many reserva_asientos to delete.
     */
    limit?: number
  }

  /**
   * reserva_asiento without action
   */
  export type reserva_asientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reserva_asiento
     */
    select?: reserva_asientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reserva_asiento
     */
    omit?: reserva_asientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reserva_asientoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AsientoScalarFieldEnum: {
    id_asiento: 'id_asiento',
    id_recinto: 'id_recinto',
    fila: 'fila',
    numero: 'numero',
    tipo: 'tipo'
  };

  export type AsientoScalarFieldEnum = (typeof AsientoScalarFieldEnum)[keyof typeof AsientoScalarFieldEnum]


  export const BitacoraScalarFieldEnum: {
    id_bitacora: 'id_bitacora',
    id_reserva: 'id_reserva',
    accion: 'accion',
    fecha: 'fecha',
    descripcion: 'descripcion'
  };

  export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id_cliente: 'id_cliente',
    nombre: 'nombre',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id_evento: 'id_evento',
    nombre_evento: 'nombre_evento',
    descripcion: 'descripcion',
    fecha: 'fecha',
    hora: 'hora',
    id_recinto: 'id_recinto'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const RecintoScalarFieldEnum: {
    id_recinto: 'id_recinto',
    nombre: 'nombre',
    ubicacion: 'ubicacion',
    capacidad: 'capacidad'
  };

  export type RecintoScalarFieldEnum = (typeof RecintoScalarFieldEnum)[keyof typeof RecintoScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_cliente: 'id_cliente',
    id_evento: 'id_evento',
    fecha_reserva: 'fecha_reserva',
    estado_reserva: 'estado_reserva'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const Reserva_asientoScalarFieldEnum: {
    id_reserva_asiento: 'id_reserva_asiento',
    id_reserva: 'id_reserva',
    id_asiento: 'id_asiento'
  };

  export type Reserva_asientoScalarFieldEnum = (typeof Reserva_asientoScalarFieldEnum)[keyof typeof Reserva_asientoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type asientoWhereInput = {
    AND?: asientoWhereInput | asientoWhereInput[]
    OR?: asientoWhereInput[]
    NOT?: asientoWhereInput | asientoWhereInput[]
    id_asiento?: IntFilter<"asiento"> | number
    id_recinto?: IntFilter<"asiento"> | number
    fila?: IntFilter<"asiento"> | number
    numero?: IntFilter<"asiento"> | number
    tipo?: StringNullableFilter<"asiento"> | string | null
    recinto?: XOR<RecintoScalarRelationFilter, recintoWhereInput>
    reserva_asiento?: Reserva_asientoListRelationFilter
  }

  export type asientoOrderByWithRelationInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
    tipo?: SortOrderInput | SortOrder
    recinto?: recintoOrderByWithRelationInput
    reserva_asiento?: reserva_asientoOrderByRelationAggregateInput
  }

  export type asientoWhereUniqueInput = Prisma.AtLeast<{
    id_asiento?: number
    AND?: asientoWhereInput | asientoWhereInput[]
    OR?: asientoWhereInput[]
    NOT?: asientoWhereInput | asientoWhereInput[]
    id_recinto?: IntFilter<"asiento"> | number
    fila?: IntFilter<"asiento"> | number
    numero?: IntFilter<"asiento"> | number
    tipo?: StringNullableFilter<"asiento"> | string | null
    recinto?: XOR<RecintoScalarRelationFilter, recintoWhereInput>
    reserva_asiento?: Reserva_asientoListRelationFilter
  }, "id_asiento">

  export type asientoOrderByWithAggregationInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
    tipo?: SortOrderInput | SortOrder
    _count?: asientoCountOrderByAggregateInput
    _avg?: asientoAvgOrderByAggregateInput
    _max?: asientoMaxOrderByAggregateInput
    _min?: asientoMinOrderByAggregateInput
    _sum?: asientoSumOrderByAggregateInput
  }

  export type asientoScalarWhereWithAggregatesInput = {
    AND?: asientoScalarWhereWithAggregatesInput | asientoScalarWhereWithAggregatesInput[]
    OR?: asientoScalarWhereWithAggregatesInput[]
    NOT?: asientoScalarWhereWithAggregatesInput | asientoScalarWhereWithAggregatesInput[]
    id_asiento?: IntWithAggregatesFilter<"asiento"> | number
    id_recinto?: IntWithAggregatesFilter<"asiento"> | number
    fila?: IntWithAggregatesFilter<"asiento"> | number
    numero?: IntWithAggregatesFilter<"asiento"> | number
    tipo?: StringNullableWithAggregatesFilter<"asiento"> | string | null
  }

  export type bitacoraWhereInput = {
    AND?: bitacoraWhereInput | bitacoraWhereInput[]
    OR?: bitacoraWhereInput[]
    NOT?: bitacoraWhereInput | bitacoraWhereInput[]
    id_bitacora?: IntFilter<"bitacora"> | number
    id_reserva?: IntNullableFilter<"bitacora"> | number | null
    accion?: StringFilter<"bitacora"> | string
    fecha?: DateTimeNullableFilter<"bitacora"> | Date | string | null
    descripcion?: StringNullableFilter<"bitacora"> | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, reservaWhereInput> | null
  }

  export type bitacoraOrderByWithRelationInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    reserva?: reservaOrderByWithRelationInput
  }

  export type bitacoraWhereUniqueInput = Prisma.AtLeast<{
    id_bitacora?: number
    AND?: bitacoraWhereInput | bitacoraWhereInput[]
    OR?: bitacoraWhereInput[]
    NOT?: bitacoraWhereInput | bitacoraWhereInput[]
    id_reserva?: IntNullableFilter<"bitacora"> | number | null
    accion?: StringFilter<"bitacora"> | string
    fecha?: DateTimeNullableFilter<"bitacora"> | Date | string | null
    descripcion?: StringNullableFilter<"bitacora"> | string | null
    reserva?: XOR<ReservaNullableScalarRelationFilter, reservaWhereInput> | null
  }, "id_bitacora">

  export type bitacoraOrderByWithAggregationInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrderInput | SortOrder
    accion?: SortOrder
    fecha?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: bitacoraCountOrderByAggregateInput
    _avg?: bitacoraAvgOrderByAggregateInput
    _max?: bitacoraMaxOrderByAggregateInput
    _min?: bitacoraMinOrderByAggregateInput
    _sum?: bitacoraSumOrderByAggregateInput
  }

  export type bitacoraScalarWhereWithAggregatesInput = {
    AND?: bitacoraScalarWhereWithAggregatesInput | bitacoraScalarWhereWithAggregatesInput[]
    OR?: bitacoraScalarWhereWithAggregatesInput[]
    NOT?: bitacoraScalarWhereWithAggregatesInput | bitacoraScalarWhereWithAggregatesInput[]
    id_bitacora?: IntWithAggregatesFilter<"bitacora"> | number
    id_reserva?: IntNullableWithAggregatesFilter<"bitacora"> | number | null
    accion?: StringWithAggregatesFilter<"bitacora"> | string
    fecha?: DateTimeNullableWithAggregatesFilter<"bitacora"> | Date | string | null
    descripcion?: StringNullableWithAggregatesFilter<"bitacora"> | string | null
  }

  export type clienteWhereInput = {
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    id_cliente?: IntFilter<"cliente"> | number
    nombre?: StringFilter<"cliente"> | string
    correo?: StringFilter<"cliente"> | string
    telefono?: StringNullableFilter<"cliente"> | string | null
    reserva?: ReservaListRelationFilter
  }

  export type clienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    reserva?: reservaOrderByRelationAggregateInput
  }

  export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    correo?: string
    AND?: clienteWhereInput | clienteWhereInput[]
    OR?: clienteWhereInput[]
    NOT?: clienteWhereInput | clienteWhereInput[]
    nombre?: StringFilter<"cliente"> | string
    telefono?: StringNullableFilter<"cliente"> | string | null
    reserva?: ReservaListRelationFilter
  }, "id_cliente" | "correo">

  export type clienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    _count?: clienteCountOrderByAggregateInput
    _avg?: clienteAvgOrderByAggregateInput
    _max?: clienteMaxOrderByAggregateInput
    _min?: clienteMinOrderByAggregateInput
    _sum?: clienteSumOrderByAggregateInput
  }

  export type clienteScalarWhereWithAggregatesInput = {
    AND?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    OR?: clienteScalarWhereWithAggregatesInput[]
    NOT?: clienteScalarWhereWithAggregatesInput | clienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"cliente"> | number
    nombre?: StringWithAggregatesFilter<"cliente"> | string
    correo?: StringWithAggregatesFilter<"cliente"> | string
    telefono?: StringNullableWithAggregatesFilter<"cliente"> | string | null
  }

  export type eventoWhereInput = {
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    id_evento?: IntFilter<"evento"> | number
    nombre_evento?: StringFilter<"evento"> | string
    descripcion?: StringNullableFilter<"evento"> | string | null
    fecha?: DateTimeFilter<"evento"> | Date | string
    hora?: DateTimeFilter<"evento"> | Date | string
    id_recinto?: IntFilter<"evento"> | number
    recinto?: XOR<RecintoScalarRelationFilter, recintoWhereInput>
    reserva?: ReservaListRelationFilter
  }

  export type eventoOrderByWithRelationInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    id_recinto?: SortOrder
    recinto?: recintoOrderByWithRelationInput
    reserva?: reservaOrderByRelationAggregateInput
  }

  export type eventoWhereUniqueInput = Prisma.AtLeast<{
    id_evento?: number
    AND?: eventoWhereInput | eventoWhereInput[]
    OR?: eventoWhereInput[]
    NOT?: eventoWhereInput | eventoWhereInput[]
    nombre_evento?: StringFilter<"evento"> | string
    descripcion?: StringNullableFilter<"evento"> | string | null
    fecha?: DateTimeFilter<"evento"> | Date | string
    hora?: DateTimeFilter<"evento"> | Date | string
    id_recinto?: IntFilter<"evento"> | number
    recinto?: XOR<RecintoScalarRelationFilter, recintoWhereInput>
    reserva?: ReservaListRelationFilter
  }, "id_evento">

  export type eventoOrderByWithAggregationInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    id_recinto?: SortOrder
    _count?: eventoCountOrderByAggregateInput
    _avg?: eventoAvgOrderByAggregateInput
    _max?: eventoMaxOrderByAggregateInput
    _min?: eventoMinOrderByAggregateInput
    _sum?: eventoSumOrderByAggregateInput
  }

  export type eventoScalarWhereWithAggregatesInput = {
    AND?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    OR?: eventoScalarWhereWithAggregatesInput[]
    NOT?: eventoScalarWhereWithAggregatesInput | eventoScalarWhereWithAggregatesInput[]
    id_evento?: IntWithAggregatesFilter<"evento"> | number
    nombre_evento?: StringWithAggregatesFilter<"evento"> | string
    descripcion?: StringNullableWithAggregatesFilter<"evento"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    hora?: DateTimeWithAggregatesFilter<"evento"> | Date | string
    id_recinto?: IntWithAggregatesFilter<"evento"> | number
  }

  export type recintoWhereInput = {
    AND?: recintoWhereInput | recintoWhereInput[]
    OR?: recintoWhereInput[]
    NOT?: recintoWhereInput | recintoWhereInput[]
    id_recinto?: IntFilter<"recinto"> | number
    nombre?: StringFilter<"recinto"> | string
    ubicacion?: StringFilter<"recinto"> | string
    capacidad?: IntFilter<"recinto"> | number
    asiento?: AsientoListRelationFilter
    evento?: EventoListRelationFilter
  }

  export type recintoOrderByWithRelationInput = {
    id_recinto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    asiento?: asientoOrderByRelationAggregateInput
    evento?: eventoOrderByRelationAggregateInput
  }

  export type recintoWhereUniqueInput = Prisma.AtLeast<{
    id_recinto?: number
    AND?: recintoWhereInput | recintoWhereInput[]
    OR?: recintoWhereInput[]
    NOT?: recintoWhereInput | recintoWhereInput[]
    nombre?: StringFilter<"recinto"> | string
    ubicacion?: StringFilter<"recinto"> | string
    capacidad?: IntFilter<"recinto"> | number
    asiento?: AsientoListRelationFilter
    evento?: EventoListRelationFilter
  }, "id_recinto">

  export type recintoOrderByWithAggregationInput = {
    id_recinto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
    _count?: recintoCountOrderByAggregateInput
    _avg?: recintoAvgOrderByAggregateInput
    _max?: recintoMaxOrderByAggregateInput
    _min?: recintoMinOrderByAggregateInput
    _sum?: recintoSumOrderByAggregateInput
  }

  export type recintoScalarWhereWithAggregatesInput = {
    AND?: recintoScalarWhereWithAggregatesInput | recintoScalarWhereWithAggregatesInput[]
    OR?: recintoScalarWhereWithAggregatesInput[]
    NOT?: recintoScalarWhereWithAggregatesInput | recintoScalarWhereWithAggregatesInput[]
    id_recinto?: IntWithAggregatesFilter<"recinto"> | number
    nombre?: StringWithAggregatesFilter<"recinto"> | string
    ubicacion?: StringWithAggregatesFilter<"recinto"> | string
    capacidad?: IntWithAggregatesFilter<"recinto"> | number
  }

  export type reservaWhereInput = {
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    id_reserva?: IntFilter<"reserva"> | number
    id_cliente?: IntFilter<"reserva"> | number
    id_evento?: IntFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
    bitacora?: BitacoraListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    evento?: XOR<EventoScalarRelationFilter, eventoWhereInput>
    reserva_asiento?: Reserva_asientoListRelationFilter
  }

  export type reservaOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
    fecha_reserva?: SortOrderInput | SortOrder
    estado_reserva?: SortOrder
    bitacora?: bitacoraOrderByRelationAggregateInput
    cliente?: clienteOrderByWithRelationInput
    evento?: eventoOrderByWithRelationInput
    reserva_asiento?: reserva_asientoOrderByRelationAggregateInput
  }

  export type reservaWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: number
    AND?: reservaWhereInput | reservaWhereInput[]
    OR?: reservaWhereInput[]
    NOT?: reservaWhereInput | reservaWhereInput[]
    id_cliente?: IntFilter<"reserva"> | number
    id_evento?: IntFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
    bitacora?: BitacoraListRelationFilter
    cliente?: XOR<ClienteScalarRelationFilter, clienteWhereInput>
    evento?: XOR<EventoScalarRelationFilter, eventoWhereInput>
    reserva_asiento?: Reserva_asientoListRelationFilter
  }, "id_reserva">

  export type reservaOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
    fecha_reserva?: SortOrderInput | SortOrder
    estado_reserva?: SortOrder
    _count?: reservaCountOrderByAggregateInput
    _avg?: reservaAvgOrderByAggregateInput
    _max?: reservaMaxOrderByAggregateInput
    _min?: reservaMinOrderByAggregateInput
    _sum?: reservaSumOrderByAggregateInput
  }

  export type reservaScalarWhereWithAggregatesInput = {
    AND?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    OR?: reservaScalarWhereWithAggregatesInput[]
    NOT?: reservaScalarWhereWithAggregatesInput | reservaScalarWhereWithAggregatesInput[]
    id_reserva?: IntWithAggregatesFilter<"reserva"> | number
    id_cliente?: IntWithAggregatesFilter<"reserva"> | number
    id_evento?: IntWithAggregatesFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableWithAggregatesFilter<"reserva"> | Date | string | null
    estado_reserva?: StringWithAggregatesFilter<"reserva"> | string
  }

  export type reserva_asientoWhereInput = {
    AND?: reserva_asientoWhereInput | reserva_asientoWhereInput[]
    OR?: reserva_asientoWhereInput[]
    NOT?: reserva_asientoWhereInput | reserva_asientoWhereInput[]
    id_reserva_asiento?: IntFilter<"reserva_asiento"> | number
    id_reserva?: IntFilter<"reserva_asiento"> | number
    id_asiento?: IntFilter<"reserva_asiento"> | number
    asiento?: XOR<AsientoScalarRelationFilter, asientoWhereInput>
    reserva?: XOR<ReservaScalarRelationFilter, reservaWhereInput>
  }

  export type reserva_asientoOrderByWithRelationInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
    asiento?: asientoOrderByWithRelationInput
    reserva?: reservaOrderByWithRelationInput
  }

  export type reserva_asientoWhereUniqueInput = Prisma.AtLeast<{
    id_reserva_asiento?: number
    id_reserva_id_asiento?: reserva_asientoId_reservaId_asientoCompoundUniqueInput
    AND?: reserva_asientoWhereInput | reserva_asientoWhereInput[]
    OR?: reserva_asientoWhereInput[]
    NOT?: reserva_asientoWhereInput | reserva_asientoWhereInput[]
    id_reserva?: IntFilter<"reserva_asiento"> | number
    id_asiento?: IntFilter<"reserva_asiento"> | number
    asiento?: XOR<AsientoScalarRelationFilter, asientoWhereInput>
    reserva?: XOR<ReservaScalarRelationFilter, reservaWhereInput>
  }, "id_reserva_asiento" | "id_reserva_id_asiento">

  export type reserva_asientoOrderByWithAggregationInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
    _count?: reserva_asientoCountOrderByAggregateInput
    _avg?: reserva_asientoAvgOrderByAggregateInput
    _max?: reserva_asientoMaxOrderByAggregateInput
    _min?: reserva_asientoMinOrderByAggregateInput
    _sum?: reserva_asientoSumOrderByAggregateInput
  }

  export type reserva_asientoScalarWhereWithAggregatesInput = {
    AND?: reserva_asientoScalarWhereWithAggregatesInput | reserva_asientoScalarWhereWithAggregatesInput[]
    OR?: reserva_asientoScalarWhereWithAggregatesInput[]
    NOT?: reserva_asientoScalarWhereWithAggregatesInput | reserva_asientoScalarWhereWithAggregatesInput[]
    id_reserva_asiento?: IntWithAggregatesFilter<"reserva_asiento"> | number
    id_reserva?: IntWithAggregatesFilter<"reserva_asiento"> | number
    id_asiento?: IntWithAggregatesFilter<"reserva_asiento"> | number
  }

  export type asientoCreateInput = {
    fila: number
    numero: number
    tipo?: string | null
    recinto: recintoCreateNestedOneWithoutAsientoInput
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutAsientoInput
  }

  export type asientoUncheckedCreateInput = {
    id_asiento?: number
    id_recinto: number
    fila: number
    numero: number
    tipo?: string | null
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutAsientoInput
  }

  export type asientoUpdateInput = {
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    recinto?: recintoUpdateOneRequiredWithoutAsientoNestedInput
    reserva_asiento?: reserva_asientoUpdateManyWithoutAsientoNestedInput
  }

  export type asientoUncheckedUpdateInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    id_recinto?: IntFieldUpdateOperationsInput | number
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutAsientoNestedInput
  }

  export type asientoCreateManyInput = {
    id_asiento?: number
    id_recinto: number
    fila: number
    numero: number
    tipo?: string | null
  }

  export type asientoUpdateManyMutationInput = {
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type asientoUncheckedUpdateManyInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    id_recinto?: IntFieldUpdateOperationsInput | number
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bitacoraCreateInput = {
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
    reserva?: reservaCreateNestedOneWithoutBitacoraInput
  }

  export type bitacoraUncheckedCreateInput = {
    id_bitacora?: number
    id_reserva?: number | null
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
  }

  export type bitacoraUpdateInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    reserva?: reservaUpdateOneWithoutBitacoraNestedInput
  }

  export type bitacoraUncheckedUpdateInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    id_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bitacoraCreateManyInput = {
    id_bitacora?: number
    id_reserva?: number | null
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
  }

  export type bitacoraUpdateManyMutationInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bitacoraUncheckedUpdateManyInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    id_reserva?: NullableIntFieldUpdateOperationsInput | number | null
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteCreateInput = {
    nombre: string
    correo: string
    telefono?: string | null
    reserva?: reservaCreateNestedManyWithoutClienteInput
  }

  export type clienteUncheckedCreateInput = {
    id_cliente?: number
    nombre: string
    correo: string
    telefono?: string | null
    reserva?: reservaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type clienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    reserva?: reservaUpdateManyWithoutClienteNestedInput
  }

  export type clienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    reserva?: reservaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type clienteCreateManyInput = {
    id_cliente?: number
    nombre: string
    correo: string
    telefono?: string | null
  }

  export type clienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoCreateInput = {
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    recinto: recintoCreateNestedOneWithoutEventoInput
    reserva?: reservaCreateNestedManyWithoutEventoInput
  }

  export type eventoUncheckedCreateInput = {
    id_evento?: number
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    id_recinto: number
    reserva?: reservaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventoUpdateInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    recinto?: recintoUpdateOneRequiredWithoutEventoNestedInput
    reserva?: reservaUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_recinto?: IntFieldUpdateOperationsInput | number
    reserva?: reservaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type eventoCreateManyInput = {
    id_evento?: number
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    id_recinto: number
  }

  export type eventoUpdateManyMutationInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type eventoUncheckedUpdateManyInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_recinto?: IntFieldUpdateOperationsInput | number
  }

  export type recintoCreateInput = {
    nombre: string
    ubicacion: string
    capacidad: number
    asiento?: asientoCreateNestedManyWithoutRecintoInput
    evento?: eventoCreateNestedManyWithoutRecintoInput
  }

  export type recintoUncheckedCreateInput = {
    id_recinto?: number
    nombre: string
    ubicacion: string
    capacidad: number
    asiento?: asientoUncheckedCreateNestedManyWithoutRecintoInput
    evento?: eventoUncheckedCreateNestedManyWithoutRecintoInput
  }

  export type recintoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    asiento?: asientoUpdateManyWithoutRecintoNestedInput
    evento?: eventoUpdateManyWithoutRecintoNestedInput
  }

  export type recintoUncheckedUpdateInput = {
    id_recinto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    asiento?: asientoUncheckedUpdateManyWithoutRecintoNestedInput
    evento?: eventoUncheckedUpdateManyWithoutRecintoNestedInput
  }

  export type recintoCreateManyInput = {
    id_recinto?: number
    nombre: string
    ubicacion: string
    capacidad: number
  }

  export type recintoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
  }

  export type recintoUncheckedUpdateManyInput = {
    id_recinto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
  }

  export type reservaCreateInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraCreateNestedManyWithoutReservaInput
    cliente: clienteCreateNestedOneWithoutReservaInput
    evento: eventoCreateNestedOneWithoutReservaInput
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutReservaInput
  }

  export type reservaUncheckedCreateInput = {
    id_reserva?: number
    id_cliente: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraUncheckedCreateNestedManyWithoutReservaInput
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaUpdateInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUpdateManyWithoutReservaNestedInput
    cliente?: clienteUpdateOneRequiredWithoutReservaNestedInput
    evento?: eventoUpdateOneRequiredWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUncheckedUpdateManyWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaCreateManyInput = {
    id_reserva?: number
    id_cliente: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
  }

  export type reservaUpdateManyMutationInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
  }

  export type reservaUncheckedUpdateManyInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
  }

  export type reserva_asientoCreateInput = {
    asiento: asientoCreateNestedOneWithoutReserva_asientoInput
    reserva: reservaCreateNestedOneWithoutReserva_asientoInput
  }

  export type reserva_asientoUncheckedCreateInput = {
    id_reserva_asiento?: number
    id_reserva: number
    id_asiento: number
  }

  export type reserva_asientoUpdateInput = {
    asiento?: asientoUpdateOneRequiredWithoutReserva_asientoNestedInput
    reserva?: reservaUpdateOneRequiredWithoutReserva_asientoNestedInput
  }

  export type reserva_asientoUncheckedUpdateInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_asiento?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_asientoCreateManyInput = {
    id_reserva_asiento?: number
    id_reserva: number
    id_asiento: number
  }

  export type reserva_asientoUpdateManyMutationInput = {

  }

  export type reserva_asientoUncheckedUpdateManyInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_asiento?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RecintoScalarRelationFilter = {
    is?: recintoWhereInput
    isNot?: recintoWhereInput
  }

  export type Reserva_asientoListRelationFilter = {
    every?: reserva_asientoWhereInput
    some?: reserva_asientoWhereInput
    none?: reserva_asientoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reserva_asientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type asientoCountOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type asientoAvgOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
  }

  export type asientoMaxOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type asientoMinOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type asientoSumOrderByAggregateInput = {
    id_asiento?: SortOrder
    id_recinto?: SortOrder
    fila?: SortOrder
    numero?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReservaNullableScalarRelationFilter = {
    is?: reservaWhereInput | null
    isNot?: reservaWhereInput | null
  }

  export type bitacoraCountOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type bitacoraAvgOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrder
  }

  export type bitacoraMaxOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type bitacoraMinOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrder
    accion?: SortOrder
    fecha?: SortOrder
    descripcion?: SortOrder
  }

  export type bitacoraSumOrderByAggregateInput = {
    id_bitacora?: SortOrder
    id_reserva?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReservaListRelationFilter = {
    every?: reservaWhereInput
    some?: reservaWhereInput
    none?: reservaWhereInput
  }

  export type reservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type clienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    nombre?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
  }

  export type clienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type eventoCountOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    id_recinto?: SortOrder
  }

  export type eventoAvgOrderByAggregateInput = {
    id_evento?: SortOrder
    id_recinto?: SortOrder
  }

  export type eventoMaxOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    id_recinto?: SortOrder
  }

  export type eventoMinOrderByAggregateInput = {
    id_evento?: SortOrder
    nombre_evento?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    id_recinto?: SortOrder
  }

  export type eventoSumOrderByAggregateInput = {
    id_evento?: SortOrder
    id_recinto?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AsientoListRelationFilter = {
    every?: asientoWhereInput
    some?: asientoWhereInput
    none?: asientoWhereInput
  }

  export type EventoListRelationFilter = {
    every?: eventoWhereInput
    some?: eventoWhereInput
    none?: eventoWhereInput
  }

  export type asientoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type eventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recintoCountOrderByAggregateInput = {
    id_recinto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
  }

  export type recintoAvgOrderByAggregateInput = {
    id_recinto?: SortOrder
    capacidad?: SortOrder
  }

  export type recintoMaxOrderByAggregateInput = {
    id_recinto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
  }

  export type recintoMinOrderByAggregateInput = {
    id_recinto?: SortOrder
    nombre?: SortOrder
    ubicacion?: SortOrder
    capacidad?: SortOrder
  }

  export type recintoSumOrderByAggregateInput = {
    id_recinto?: SortOrder
    capacidad?: SortOrder
  }

  export type BitacoraListRelationFilter = {
    every?: bitacoraWhereInput
    some?: bitacoraWhereInput
    none?: bitacoraWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: clienteWhereInput
    isNot?: clienteWhereInput
  }

  export type EventoScalarRelationFilter = {
    is?: eventoWhereInput
    isNot?: eventoWhereInput
  }

  export type bitacoraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type reservaCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
  }

  export type reservaAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
  }

  export type reservaMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
  }

  export type reservaMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
    fecha_reserva?: SortOrder
    estado_reserva?: SortOrder
  }

  export type reservaSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_cliente?: SortOrder
    id_evento?: SortOrder
  }

  export type AsientoScalarRelationFilter = {
    is?: asientoWhereInput
    isNot?: asientoWhereInput
  }

  export type ReservaScalarRelationFilter = {
    is?: reservaWhereInput
    isNot?: reservaWhereInput
  }

  export type reserva_asientoId_reservaId_asientoCompoundUniqueInput = {
    id_reserva: number
    id_asiento: number
  }

  export type reserva_asientoCountOrderByAggregateInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
  }

  export type reserva_asientoAvgOrderByAggregateInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
  }

  export type reserva_asientoMaxOrderByAggregateInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
  }

  export type reserva_asientoMinOrderByAggregateInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
  }

  export type reserva_asientoSumOrderByAggregateInput = {
    id_reserva_asiento?: SortOrder
    id_reserva?: SortOrder
    id_asiento?: SortOrder
  }

  export type recintoCreateNestedOneWithoutAsientoInput = {
    create?: XOR<recintoCreateWithoutAsientoInput, recintoUncheckedCreateWithoutAsientoInput>
    connectOrCreate?: recintoCreateOrConnectWithoutAsientoInput
    connect?: recintoWhereUniqueInput
  }

  export type reserva_asientoCreateNestedManyWithoutAsientoInput = {
    create?: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput> | reserva_asientoCreateWithoutAsientoInput[] | reserva_asientoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutAsientoInput | reserva_asientoCreateOrConnectWithoutAsientoInput[]
    createMany?: reserva_asientoCreateManyAsientoInputEnvelope
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
  }

  export type reserva_asientoUncheckedCreateNestedManyWithoutAsientoInput = {
    create?: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput> | reserva_asientoCreateWithoutAsientoInput[] | reserva_asientoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutAsientoInput | reserva_asientoCreateOrConnectWithoutAsientoInput[]
    createMany?: reserva_asientoCreateManyAsientoInputEnvelope
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type recintoUpdateOneRequiredWithoutAsientoNestedInput = {
    create?: XOR<recintoCreateWithoutAsientoInput, recintoUncheckedCreateWithoutAsientoInput>
    connectOrCreate?: recintoCreateOrConnectWithoutAsientoInput
    upsert?: recintoUpsertWithoutAsientoInput
    connect?: recintoWhereUniqueInput
    update?: XOR<XOR<recintoUpdateToOneWithWhereWithoutAsientoInput, recintoUpdateWithoutAsientoInput>, recintoUncheckedUpdateWithoutAsientoInput>
  }

  export type reserva_asientoUpdateManyWithoutAsientoNestedInput = {
    create?: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput> | reserva_asientoCreateWithoutAsientoInput[] | reserva_asientoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutAsientoInput | reserva_asientoCreateOrConnectWithoutAsientoInput[]
    upsert?: reserva_asientoUpsertWithWhereUniqueWithoutAsientoInput | reserva_asientoUpsertWithWhereUniqueWithoutAsientoInput[]
    createMany?: reserva_asientoCreateManyAsientoInputEnvelope
    set?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    disconnect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    delete?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    update?: reserva_asientoUpdateWithWhereUniqueWithoutAsientoInput | reserva_asientoUpdateWithWhereUniqueWithoutAsientoInput[]
    updateMany?: reserva_asientoUpdateManyWithWhereWithoutAsientoInput | reserva_asientoUpdateManyWithWhereWithoutAsientoInput[]
    deleteMany?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
  }

  export type reserva_asientoUncheckedUpdateManyWithoutAsientoNestedInput = {
    create?: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput> | reserva_asientoCreateWithoutAsientoInput[] | reserva_asientoUncheckedCreateWithoutAsientoInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutAsientoInput | reserva_asientoCreateOrConnectWithoutAsientoInput[]
    upsert?: reserva_asientoUpsertWithWhereUniqueWithoutAsientoInput | reserva_asientoUpsertWithWhereUniqueWithoutAsientoInput[]
    createMany?: reserva_asientoCreateManyAsientoInputEnvelope
    set?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    disconnect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    delete?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    update?: reserva_asientoUpdateWithWhereUniqueWithoutAsientoInput | reserva_asientoUpdateWithWhereUniqueWithoutAsientoInput[]
    updateMany?: reserva_asientoUpdateManyWithWhereWithoutAsientoInput | reserva_asientoUpdateManyWithWhereWithoutAsientoInput[]
    deleteMany?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
  }

  export type reservaCreateNestedOneWithoutBitacoraInput = {
    create?: XOR<reservaCreateWithoutBitacoraInput, reservaUncheckedCreateWithoutBitacoraInput>
    connectOrCreate?: reservaCreateOrConnectWithoutBitacoraInput
    connect?: reservaWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type reservaUpdateOneWithoutBitacoraNestedInput = {
    create?: XOR<reservaCreateWithoutBitacoraInput, reservaUncheckedCreateWithoutBitacoraInput>
    connectOrCreate?: reservaCreateOrConnectWithoutBitacoraInput
    upsert?: reservaUpsertWithoutBitacoraInput
    disconnect?: reservaWhereInput | boolean
    delete?: reservaWhereInput | boolean
    connect?: reservaWhereUniqueInput
    update?: XOR<XOR<reservaUpdateToOneWithWhereWithoutBitacoraInput, reservaUpdateWithoutBitacoraInput>, reservaUncheckedUpdateWithoutBitacoraInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reservaCreateNestedManyWithoutClienteInput = {
    create?: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput> | reservaCreateWithoutClienteInput[] | reservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutClienteInput | reservaCreateOrConnectWithoutClienteInput[]
    createMany?: reservaCreateManyClienteInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type reservaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput> | reservaCreateWithoutClienteInput[] | reservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutClienteInput | reservaCreateOrConnectWithoutClienteInput[]
    createMany?: reservaCreateManyClienteInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type reservaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput> | reservaCreateWithoutClienteInput[] | reservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutClienteInput | reservaCreateOrConnectWithoutClienteInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutClienteInput | reservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: reservaCreateManyClienteInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutClienteInput | reservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutClienteInput | reservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type reservaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput> | reservaCreateWithoutClienteInput[] | reservaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutClienteInput | reservaCreateOrConnectWithoutClienteInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutClienteInput | reservaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: reservaCreateManyClienteInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutClienteInput | reservaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutClienteInput | reservaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type recintoCreateNestedOneWithoutEventoInput = {
    create?: XOR<recintoCreateWithoutEventoInput, recintoUncheckedCreateWithoutEventoInput>
    connectOrCreate?: recintoCreateOrConnectWithoutEventoInput
    connect?: recintoWhereUniqueInput
  }

  export type reservaCreateNestedManyWithoutEventoInput = {
    create?: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput> | reservaCreateWithoutEventoInput[] | reservaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutEventoInput | reservaCreateOrConnectWithoutEventoInput[]
    createMany?: reservaCreateManyEventoInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type reservaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput> | reservaCreateWithoutEventoInput[] | reservaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutEventoInput | reservaCreateOrConnectWithoutEventoInput[]
    createMany?: reservaCreateManyEventoInputEnvelope
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type recintoUpdateOneRequiredWithoutEventoNestedInput = {
    create?: XOR<recintoCreateWithoutEventoInput, recintoUncheckedCreateWithoutEventoInput>
    connectOrCreate?: recintoCreateOrConnectWithoutEventoInput
    upsert?: recintoUpsertWithoutEventoInput
    connect?: recintoWhereUniqueInput
    update?: XOR<XOR<recintoUpdateToOneWithWhereWithoutEventoInput, recintoUpdateWithoutEventoInput>, recintoUncheckedUpdateWithoutEventoInput>
  }

  export type reservaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput> | reservaCreateWithoutEventoInput[] | reservaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutEventoInput | reservaCreateOrConnectWithoutEventoInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutEventoInput | reservaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: reservaCreateManyEventoInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutEventoInput | reservaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutEventoInput | reservaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type reservaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput> | reservaCreateWithoutEventoInput[] | reservaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: reservaCreateOrConnectWithoutEventoInput | reservaCreateOrConnectWithoutEventoInput[]
    upsert?: reservaUpsertWithWhereUniqueWithoutEventoInput | reservaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: reservaCreateManyEventoInputEnvelope
    set?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    disconnect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    delete?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    connect?: reservaWhereUniqueInput | reservaWhereUniqueInput[]
    update?: reservaUpdateWithWhereUniqueWithoutEventoInput | reservaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: reservaUpdateManyWithWhereWithoutEventoInput | reservaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: reservaScalarWhereInput | reservaScalarWhereInput[]
  }

  export type asientoCreateNestedManyWithoutRecintoInput = {
    create?: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput> | asientoCreateWithoutRecintoInput[] | asientoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: asientoCreateOrConnectWithoutRecintoInput | asientoCreateOrConnectWithoutRecintoInput[]
    createMany?: asientoCreateManyRecintoInputEnvelope
    connect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
  }

  export type eventoCreateNestedManyWithoutRecintoInput = {
    create?: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput> | eventoCreateWithoutRecintoInput[] | eventoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutRecintoInput | eventoCreateOrConnectWithoutRecintoInput[]
    createMany?: eventoCreateManyRecintoInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type asientoUncheckedCreateNestedManyWithoutRecintoInput = {
    create?: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput> | asientoCreateWithoutRecintoInput[] | asientoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: asientoCreateOrConnectWithoutRecintoInput | asientoCreateOrConnectWithoutRecintoInput[]
    createMany?: asientoCreateManyRecintoInputEnvelope
    connect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
  }

  export type eventoUncheckedCreateNestedManyWithoutRecintoInput = {
    create?: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput> | eventoCreateWithoutRecintoInput[] | eventoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutRecintoInput | eventoCreateOrConnectWithoutRecintoInput[]
    createMany?: eventoCreateManyRecintoInputEnvelope
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
  }

  export type asientoUpdateManyWithoutRecintoNestedInput = {
    create?: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput> | asientoCreateWithoutRecintoInput[] | asientoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: asientoCreateOrConnectWithoutRecintoInput | asientoCreateOrConnectWithoutRecintoInput[]
    upsert?: asientoUpsertWithWhereUniqueWithoutRecintoInput | asientoUpsertWithWhereUniqueWithoutRecintoInput[]
    createMany?: asientoCreateManyRecintoInputEnvelope
    set?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    disconnect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    delete?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    connect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    update?: asientoUpdateWithWhereUniqueWithoutRecintoInput | asientoUpdateWithWhereUniqueWithoutRecintoInput[]
    updateMany?: asientoUpdateManyWithWhereWithoutRecintoInput | asientoUpdateManyWithWhereWithoutRecintoInput[]
    deleteMany?: asientoScalarWhereInput | asientoScalarWhereInput[]
  }

  export type eventoUpdateManyWithoutRecintoNestedInput = {
    create?: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput> | eventoCreateWithoutRecintoInput[] | eventoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutRecintoInput | eventoCreateOrConnectWithoutRecintoInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutRecintoInput | eventoUpsertWithWhereUniqueWithoutRecintoInput[]
    createMany?: eventoCreateManyRecintoInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutRecintoInput | eventoUpdateWithWhereUniqueWithoutRecintoInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutRecintoInput | eventoUpdateManyWithWhereWithoutRecintoInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type asientoUncheckedUpdateManyWithoutRecintoNestedInput = {
    create?: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput> | asientoCreateWithoutRecintoInput[] | asientoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: asientoCreateOrConnectWithoutRecintoInput | asientoCreateOrConnectWithoutRecintoInput[]
    upsert?: asientoUpsertWithWhereUniqueWithoutRecintoInput | asientoUpsertWithWhereUniqueWithoutRecintoInput[]
    createMany?: asientoCreateManyRecintoInputEnvelope
    set?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    disconnect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    delete?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    connect?: asientoWhereUniqueInput | asientoWhereUniqueInput[]
    update?: asientoUpdateWithWhereUniqueWithoutRecintoInput | asientoUpdateWithWhereUniqueWithoutRecintoInput[]
    updateMany?: asientoUpdateManyWithWhereWithoutRecintoInput | asientoUpdateManyWithWhereWithoutRecintoInput[]
    deleteMany?: asientoScalarWhereInput | asientoScalarWhereInput[]
  }

  export type eventoUncheckedUpdateManyWithoutRecintoNestedInput = {
    create?: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput> | eventoCreateWithoutRecintoInput[] | eventoUncheckedCreateWithoutRecintoInput[]
    connectOrCreate?: eventoCreateOrConnectWithoutRecintoInput | eventoCreateOrConnectWithoutRecintoInput[]
    upsert?: eventoUpsertWithWhereUniqueWithoutRecintoInput | eventoUpsertWithWhereUniqueWithoutRecintoInput[]
    createMany?: eventoCreateManyRecintoInputEnvelope
    set?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    disconnect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    delete?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    connect?: eventoWhereUniqueInput | eventoWhereUniqueInput[]
    update?: eventoUpdateWithWhereUniqueWithoutRecintoInput | eventoUpdateWithWhereUniqueWithoutRecintoInput[]
    updateMany?: eventoUpdateManyWithWhereWithoutRecintoInput | eventoUpdateManyWithWhereWithoutRecintoInput[]
    deleteMany?: eventoScalarWhereInput | eventoScalarWhereInput[]
  }

  export type bitacoraCreateNestedManyWithoutReservaInput = {
    create?: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput> | bitacoraCreateWithoutReservaInput[] | bitacoraUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: bitacoraCreateOrConnectWithoutReservaInput | bitacoraCreateOrConnectWithoutReservaInput[]
    createMany?: bitacoraCreateManyReservaInputEnvelope
    connect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
  }

  export type clienteCreateNestedOneWithoutReservaInput = {
    create?: XOR<clienteCreateWithoutReservaInput, clienteUncheckedCreateWithoutReservaInput>
    connectOrCreate?: clienteCreateOrConnectWithoutReservaInput
    connect?: clienteWhereUniqueInput
  }

  export type eventoCreateNestedOneWithoutReservaInput = {
    create?: XOR<eventoCreateWithoutReservaInput, eventoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: eventoCreateOrConnectWithoutReservaInput
    connect?: eventoWhereUniqueInput
  }

  export type reserva_asientoCreateNestedManyWithoutReservaInput = {
    create?: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput> | reserva_asientoCreateWithoutReservaInput[] | reserva_asientoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutReservaInput | reserva_asientoCreateOrConnectWithoutReservaInput[]
    createMany?: reserva_asientoCreateManyReservaInputEnvelope
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
  }

  export type bitacoraUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput> | bitacoraCreateWithoutReservaInput[] | bitacoraUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: bitacoraCreateOrConnectWithoutReservaInput | bitacoraCreateOrConnectWithoutReservaInput[]
    createMany?: bitacoraCreateManyReservaInputEnvelope
    connect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
  }

  export type reserva_asientoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput> | reserva_asientoCreateWithoutReservaInput[] | reserva_asientoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutReservaInput | reserva_asientoCreateOrConnectWithoutReservaInput[]
    createMany?: reserva_asientoCreateManyReservaInputEnvelope
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
  }

  export type bitacoraUpdateManyWithoutReservaNestedInput = {
    create?: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput> | bitacoraCreateWithoutReservaInput[] | bitacoraUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: bitacoraCreateOrConnectWithoutReservaInput | bitacoraCreateOrConnectWithoutReservaInput[]
    upsert?: bitacoraUpsertWithWhereUniqueWithoutReservaInput | bitacoraUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: bitacoraCreateManyReservaInputEnvelope
    set?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    disconnect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    delete?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    connect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    update?: bitacoraUpdateWithWhereUniqueWithoutReservaInput | bitacoraUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: bitacoraUpdateManyWithWhereWithoutReservaInput | bitacoraUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: bitacoraScalarWhereInput | bitacoraScalarWhereInput[]
  }

  export type clienteUpdateOneRequiredWithoutReservaNestedInput = {
    create?: XOR<clienteCreateWithoutReservaInput, clienteUncheckedCreateWithoutReservaInput>
    connectOrCreate?: clienteCreateOrConnectWithoutReservaInput
    upsert?: clienteUpsertWithoutReservaInput
    connect?: clienteWhereUniqueInput
    update?: XOR<XOR<clienteUpdateToOneWithWhereWithoutReservaInput, clienteUpdateWithoutReservaInput>, clienteUncheckedUpdateWithoutReservaInput>
  }

  export type eventoUpdateOneRequiredWithoutReservaNestedInput = {
    create?: XOR<eventoCreateWithoutReservaInput, eventoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: eventoCreateOrConnectWithoutReservaInput
    upsert?: eventoUpsertWithoutReservaInput
    connect?: eventoWhereUniqueInput
    update?: XOR<XOR<eventoUpdateToOneWithWhereWithoutReservaInput, eventoUpdateWithoutReservaInput>, eventoUncheckedUpdateWithoutReservaInput>
  }

  export type reserva_asientoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput> | reserva_asientoCreateWithoutReservaInput[] | reserva_asientoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutReservaInput | reserva_asientoCreateOrConnectWithoutReservaInput[]
    upsert?: reserva_asientoUpsertWithWhereUniqueWithoutReservaInput | reserva_asientoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: reserva_asientoCreateManyReservaInputEnvelope
    set?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    disconnect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    delete?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    update?: reserva_asientoUpdateWithWhereUniqueWithoutReservaInput | reserva_asientoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: reserva_asientoUpdateManyWithWhereWithoutReservaInput | reserva_asientoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
  }

  export type bitacoraUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput> | bitacoraCreateWithoutReservaInput[] | bitacoraUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: bitacoraCreateOrConnectWithoutReservaInput | bitacoraCreateOrConnectWithoutReservaInput[]
    upsert?: bitacoraUpsertWithWhereUniqueWithoutReservaInput | bitacoraUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: bitacoraCreateManyReservaInputEnvelope
    set?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    disconnect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    delete?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    connect?: bitacoraWhereUniqueInput | bitacoraWhereUniqueInput[]
    update?: bitacoraUpdateWithWhereUniqueWithoutReservaInput | bitacoraUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: bitacoraUpdateManyWithWhereWithoutReservaInput | bitacoraUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: bitacoraScalarWhereInput | bitacoraScalarWhereInput[]
  }

  export type reserva_asientoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput> | reserva_asientoCreateWithoutReservaInput[] | reserva_asientoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: reserva_asientoCreateOrConnectWithoutReservaInput | reserva_asientoCreateOrConnectWithoutReservaInput[]
    upsert?: reserva_asientoUpsertWithWhereUniqueWithoutReservaInput | reserva_asientoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: reserva_asientoCreateManyReservaInputEnvelope
    set?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    disconnect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    delete?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    connect?: reserva_asientoWhereUniqueInput | reserva_asientoWhereUniqueInput[]
    update?: reserva_asientoUpdateWithWhereUniqueWithoutReservaInput | reserva_asientoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: reserva_asientoUpdateManyWithWhereWithoutReservaInput | reserva_asientoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
  }

  export type asientoCreateNestedOneWithoutReserva_asientoInput = {
    create?: XOR<asientoCreateWithoutReserva_asientoInput, asientoUncheckedCreateWithoutReserva_asientoInput>
    connectOrCreate?: asientoCreateOrConnectWithoutReserva_asientoInput
    connect?: asientoWhereUniqueInput
  }

  export type reservaCreateNestedOneWithoutReserva_asientoInput = {
    create?: XOR<reservaCreateWithoutReserva_asientoInput, reservaUncheckedCreateWithoutReserva_asientoInput>
    connectOrCreate?: reservaCreateOrConnectWithoutReserva_asientoInput
    connect?: reservaWhereUniqueInput
  }

  export type asientoUpdateOneRequiredWithoutReserva_asientoNestedInput = {
    create?: XOR<asientoCreateWithoutReserva_asientoInput, asientoUncheckedCreateWithoutReserva_asientoInput>
    connectOrCreate?: asientoCreateOrConnectWithoutReserva_asientoInput
    upsert?: asientoUpsertWithoutReserva_asientoInput
    connect?: asientoWhereUniqueInput
    update?: XOR<XOR<asientoUpdateToOneWithWhereWithoutReserva_asientoInput, asientoUpdateWithoutReserva_asientoInput>, asientoUncheckedUpdateWithoutReserva_asientoInput>
  }

  export type reservaUpdateOneRequiredWithoutReserva_asientoNestedInput = {
    create?: XOR<reservaCreateWithoutReserva_asientoInput, reservaUncheckedCreateWithoutReserva_asientoInput>
    connectOrCreate?: reservaCreateOrConnectWithoutReserva_asientoInput
    upsert?: reservaUpsertWithoutReserva_asientoInput
    connect?: reservaWhereUniqueInput
    update?: XOR<XOR<reservaUpdateToOneWithWhereWithoutReserva_asientoInput, reservaUpdateWithoutReserva_asientoInput>, reservaUncheckedUpdateWithoutReserva_asientoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type recintoCreateWithoutAsientoInput = {
    nombre: string
    ubicacion: string
    capacidad: number
    evento?: eventoCreateNestedManyWithoutRecintoInput
  }

  export type recintoUncheckedCreateWithoutAsientoInput = {
    id_recinto?: number
    nombre: string
    ubicacion: string
    capacidad: number
    evento?: eventoUncheckedCreateNestedManyWithoutRecintoInput
  }

  export type recintoCreateOrConnectWithoutAsientoInput = {
    where: recintoWhereUniqueInput
    create: XOR<recintoCreateWithoutAsientoInput, recintoUncheckedCreateWithoutAsientoInput>
  }

  export type reserva_asientoCreateWithoutAsientoInput = {
    reserva: reservaCreateNestedOneWithoutReserva_asientoInput
  }

  export type reserva_asientoUncheckedCreateWithoutAsientoInput = {
    id_reserva_asiento?: number
    id_reserva: number
  }

  export type reserva_asientoCreateOrConnectWithoutAsientoInput = {
    where: reserva_asientoWhereUniqueInput
    create: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput>
  }

  export type reserva_asientoCreateManyAsientoInputEnvelope = {
    data: reserva_asientoCreateManyAsientoInput | reserva_asientoCreateManyAsientoInput[]
    skipDuplicates?: boolean
  }

  export type recintoUpsertWithoutAsientoInput = {
    update: XOR<recintoUpdateWithoutAsientoInput, recintoUncheckedUpdateWithoutAsientoInput>
    create: XOR<recintoCreateWithoutAsientoInput, recintoUncheckedCreateWithoutAsientoInput>
    where?: recintoWhereInput
  }

  export type recintoUpdateToOneWithWhereWithoutAsientoInput = {
    where?: recintoWhereInput
    data: XOR<recintoUpdateWithoutAsientoInput, recintoUncheckedUpdateWithoutAsientoInput>
  }

  export type recintoUpdateWithoutAsientoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    evento?: eventoUpdateManyWithoutRecintoNestedInput
  }

  export type recintoUncheckedUpdateWithoutAsientoInput = {
    id_recinto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    evento?: eventoUncheckedUpdateManyWithoutRecintoNestedInput
  }

  export type reserva_asientoUpsertWithWhereUniqueWithoutAsientoInput = {
    where: reserva_asientoWhereUniqueInput
    update: XOR<reserva_asientoUpdateWithoutAsientoInput, reserva_asientoUncheckedUpdateWithoutAsientoInput>
    create: XOR<reserva_asientoCreateWithoutAsientoInput, reserva_asientoUncheckedCreateWithoutAsientoInput>
  }

  export type reserva_asientoUpdateWithWhereUniqueWithoutAsientoInput = {
    where: reserva_asientoWhereUniqueInput
    data: XOR<reserva_asientoUpdateWithoutAsientoInput, reserva_asientoUncheckedUpdateWithoutAsientoInput>
  }

  export type reserva_asientoUpdateManyWithWhereWithoutAsientoInput = {
    where: reserva_asientoScalarWhereInput
    data: XOR<reserva_asientoUpdateManyMutationInput, reserva_asientoUncheckedUpdateManyWithoutAsientoInput>
  }

  export type reserva_asientoScalarWhereInput = {
    AND?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
    OR?: reserva_asientoScalarWhereInput[]
    NOT?: reserva_asientoScalarWhereInput | reserva_asientoScalarWhereInput[]
    id_reserva_asiento?: IntFilter<"reserva_asiento"> | number
    id_reserva?: IntFilter<"reserva_asiento"> | number
    id_asiento?: IntFilter<"reserva_asiento"> | number
  }

  export type reservaCreateWithoutBitacoraInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    cliente: clienteCreateNestedOneWithoutReservaInput
    evento: eventoCreateNestedOneWithoutReservaInput
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutBitacoraInput = {
    id_reserva?: number
    id_cliente: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaCreateOrConnectWithoutBitacoraInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutBitacoraInput, reservaUncheckedCreateWithoutBitacoraInput>
  }

  export type reservaUpsertWithoutBitacoraInput = {
    update: XOR<reservaUpdateWithoutBitacoraInput, reservaUncheckedUpdateWithoutBitacoraInput>
    create: XOR<reservaCreateWithoutBitacoraInput, reservaUncheckedCreateWithoutBitacoraInput>
    where?: reservaWhereInput
  }

  export type reservaUpdateToOneWithWhereWithoutBitacoraInput = {
    where?: reservaWhereInput
    data: XOR<reservaUpdateWithoutBitacoraInput, reservaUncheckedUpdateWithoutBitacoraInput>
  }

  export type reservaUpdateWithoutBitacoraInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    cliente?: clienteUpdateOneRequiredWithoutReservaNestedInput
    evento?: eventoUpdateOneRequiredWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutBitacoraInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaCreateWithoutClienteInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraCreateNestedManyWithoutReservaInput
    evento: eventoCreateNestedOneWithoutReservaInput
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutClienteInput = {
    id_reserva?: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraUncheckedCreateNestedManyWithoutReservaInput
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaCreateOrConnectWithoutClienteInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput>
  }

  export type reservaCreateManyClienteInputEnvelope = {
    data: reservaCreateManyClienteInput | reservaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type reservaUpsertWithWhereUniqueWithoutClienteInput = {
    where: reservaWhereUniqueInput
    update: XOR<reservaUpdateWithoutClienteInput, reservaUncheckedUpdateWithoutClienteInput>
    create: XOR<reservaCreateWithoutClienteInput, reservaUncheckedCreateWithoutClienteInput>
  }

  export type reservaUpdateWithWhereUniqueWithoutClienteInput = {
    where: reservaWhereUniqueInput
    data: XOR<reservaUpdateWithoutClienteInput, reservaUncheckedUpdateWithoutClienteInput>
  }

  export type reservaUpdateManyWithWhereWithoutClienteInput = {
    where: reservaScalarWhereInput
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyWithoutClienteInput>
  }

  export type reservaScalarWhereInput = {
    AND?: reservaScalarWhereInput | reservaScalarWhereInput[]
    OR?: reservaScalarWhereInput[]
    NOT?: reservaScalarWhereInput | reservaScalarWhereInput[]
    id_reserva?: IntFilter<"reserva"> | number
    id_cliente?: IntFilter<"reserva"> | number
    id_evento?: IntFilter<"reserva"> | number
    fecha_reserva?: DateTimeNullableFilter<"reserva"> | Date | string | null
    estado_reserva?: StringFilter<"reserva"> | string
  }

  export type recintoCreateWithoutEventoInput = {
    nombre: string
    ubicacion: string
    capacidad: number
    asiento?: asientoCreateNestedManyWithoutRecintoInput
  }

  export type recintoUncheckedCreateWithoutEventoInput = {
    id_recinto?: number
    nombre: string
    ubicacion: string
    capacidad: number
    asiento?: asientoUncheckedCreateNestedManyWithoutRecintoInput
  }

  export type recintoCreateOrConnectWithoutEventoInput = {
    where: recintoWhereUniqueInput
    create: XOR<recintoCreateWithoutEventoInput, recintoUncheckedCreateWithoutEventoInput>
  }

  export type reservaCreateWithoutEventoInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraCreateNestedManyWithoutReservaInput
    cliente: clienteCreateNestedOneWithoutReservaInput
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutEventoInput = {
    id_reserva?: number
    id_cliente: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraUncheckedCreateNestedManyWithoutReservaInput
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaCreateOrConnectWithoutEventoInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput>
  }

  export type reservaCreateManyEventoInputEnvelope = {
    data: reservaCreateManyEventoInput | reservaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type recintoUpsertWithoutEventoInput = {
    update: XOR<recintoUpdateWithoutEventoInput, recintoUncheckedUpdateWithoutEventoInput>
    create: XOR<recintoCreateWithoutEventoInput, recintoUncheckedCreateWithoutEventoInput>
    where?: recintoWhereInput
  }

  export type recintoUpdateToOneWithWhereWithoutEventoInput = {
    where?: recintoWhereInput
    data: XOR<recintoUpdateWithoutEventoInput, recintoUncheckedUpdateWithoutEventoInput>
  }

  export type recintoUpdateWithoutEventoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    asiento?: asientoUpdateManyWithoutRecintoNestedInput
  }

  export type recintoUncheckedUpdateWithoutEventoInput = {
    id_recinto?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    ubicacion?: StringFieldUpdateOperationsInput | string
    capacidad?: IntFieldUpdateOperationsInput | number
    asiento?: asientoUncheckedUpdateManyWithoutRecintoNestedInput
  }

  export type reservaUpsertWithWhereUniqueWithoutEventoInput = {
    where: reservaWhereUniqueInput
    update: XOR<reservaUpdateWithoutEventoInput, reservaUncheckedUpdateWithoutEventoInput>
    create: XOR<reservaCreateWithoutEventoInput, reservaUncheckedCreateWithoutEventoInput>
  }

  export type reservaUpdateWithWhereUniqueWithoutEventoInput = {
    where: reservaWhereUniqueInput
    data: XOR<reservaUpdateWithoutEventoInput, reservaUncheckedUpdateWithoutEventoInput>
  }

  export type reservaUpdateManyWithWhereWithoutEventoInput = {
    where: reservaScalarWhereInput
    data: XOR<reservaUpdateManyMutationInput, reservaUncheckedUpdateManyWithoutEventoInput>
  }

  export type asientoCreateWithoutRecintoInput = {
    fila: number
    numero: number
    tipo?: string | null
    reserva_asiento?: reserva_asientoCreateNestedManyWithoutAsientoInput
  }

  export type asientoUncheckedCreateWithoutRecintoInput = {
    id_asiento?: number
    fila: number
    numero: number
    tipo?: string | null
    reserva_asiento?: reserva_asientoUncheckedCreateNestedManyWithoutAsientoInput
  }

  export type asientoCreateOrConnectWithoutRecintoInput = {
    where: asientoWhereUniqueInput
    create: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput>
  }

  export type asientoCreateManyRecintoInputEnvelope = {
    data: asientoCreateManyRecintoInput | asientoCreateManyRecintoInput[]
    skipDuplicates?: boolean
  }

  export type eventoCreateWithoutRecintoInput = {
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    reserva?: reservaCreateNestedManyWithoutEventoInput
  }

  export type eventoUncheckedCreateWithoutRecintoInput = {
    id_evento?: number
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    reserva?: reservaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type eventoCreateOrConnectWithoutRecintoInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput>
  }

  export type eventoCreateManyRecintoInputEnvelope = {
    data: eventoCreateManyRecintoInput | eventoCreateManyRecintoInput[]
    skipDuplicates?: boolean
  }

  export type asientoUpsertWithWhereUniqueWithoutRecintoInput = {
    where: asientoWhereUniqueInput
    update: XOR<asientoUpdateWithoutRecintoInput, asientoUncheckedUpdateWithoutRecintoInput>
    create: XOR<asientoCreateWithoutRecintoInput, asientoUncheckedCreateWithoutRecintoInput>
  }

  export type asientoUpdateWithWhereUniqueWithoutRecintoInput = {
    where: asientoWhereUniqueInput
    data: XOR<asientoUpdateWithoutRecintoInput, asientoUncheckedUpdateWithoutRecintoInput>
  }

  export type asientoUpdateManyWithWhereWithoutRecintoInput = {
    where: asientoScalarWhereInput
    data: XOR<asientoUpdateManyMutationInput, asientoUncheckedUpdateManyWithoutRecintoInput>
  }

  export type asientoScalarWhereInput = {
    AND?: asientoScalarWhereInput | asientoScalarWhereInput[]
    OR?: asientoScalarWhereInput[]
    NOT?: asientoScalarWhereInput | asientoScalarWhereInput[]
    id_asiento?: IntFilter<"asiento"> | number
    id_recinto?: IntFilter<"asiento"> | number
    fila?: IntFilter<"asiento"> | number
    numero?: IntFilter<"asiento"> | number
    tipo?: StringNullableFilter<"asiento"> | string | null
  }

  export type eventoUpsertWithWhereUniqueWithoutRecintoInput = {
    where: eventoWhereUniqueInput
    update: XOR<eventoUpdateWithoutRecintoInput, eventoUncheckedUpdateWithoutRecintoInput>
    create: XOR<eventoCreateWithoutRecintoInput, eventoUncheckedCreateWithoutRecintoInput>
  }

  export type eventoUpdateWithWhereUniqueWithoutRecintoInput = {
    where: eventoWhereUniqueInput
    data: XOR<eventoUpdateWithoutRecintoInput, eventoUncheckedUpdateWithoutRecintoInput>
  }

  export type eventoUpdateManyWithWhereWithoutRecintoInput = {
    where: eventoScalarWhereInput
    data: XOR<eventoUpdateManyMutationInput, eventoUncheckedUpdateManyWithoutRecintoInput>
  }

  export type eventoScalarWhereInput = {
    AND?: eventoScalarWhereInput | eventoScalarWhereInput[]
    OR?: eventoScalarWhereInput[]
    NOT?: eventoScalarWhereInput | eventoScalarWhereInput[]
    id_evento?: IntFilter<"evento"> | number
    nombre_evento?: StringFilter<"evento"> | string
    descripcion?: StringNullableFilter<"evento"> | string | null
    fecha?: DateTimeFilter<"evento"> | Date | string
    hora?: DateTimeFilter<"evento"> | Date | string
    id_recinto?: IntFilter<"evento"> | number
  }

  export type bitacoraCreateWithoutReservaInput = {
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
  }

  export type bitacoraUncheckedCreateWithoutReservaInput = {
    id_bitacora?: number
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
  }

  export type bitacoraCreateOrConnectWithoutReservaInput = {
    where: bitacoraWhereUniqueInput
    create: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput>
  }

  export type bitacoraCreateManyReservaInputEnvelope = {
    data: bitacoraCreateManyReservaInput | bitacoraCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type clienteCreateWithoutReservaInput = {
    nombre: string
    correo: string
    telefono?: string | null
  }

  export type clienteUncheckedCreateWithoutReservaInput = {
    id_cliente?: number
    nombre: string
    correo: string
    telefono?: string | null
  }

  export type clienteCreateOrConnectWithoutReservaInput = {
    where: clienteWhereUniqueInput
    create: XOR<clienteCreateWithoutReservaInput, clienteUncheckedCreateWithoutReservaInput>
  }

  export type eventoCreateWithoutReservaInput = {
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    recinto: recintoCreateNestedOneWithoutEventoInput
  }

  export type eventoUncheckedCreateWithoutReservaInput = {
    id_evento?: number
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
    id_recinto: number
  }

  export type eventoCreateOrConnectWithoutReservaInput = {
    where: eventoWhereUniqueInput
    create: XOR<eventoCreateWithoutReservaInput, eventoUncheckedCreateWithoutReservaInput>
  }

  export type reserva_asientoCreateWithoutReservaInput = {
    asiento: asientoCreateNestedOneWithoutReserva_asientoInput
  }

  export type reserva_asientoUncheckedCreateWithoutReservaInput = {
    id_reserva_asiento?: number
    id_asiento: number
  }

  export type reserva_asientoCreateOrConnectWithoutReservaInput = {
    where: reserva_asientoWhereUniqueInput
    create: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput>
  }

  export type reserva_asientoCreateManyReservaInputEnvelope = {
    data: reserva_asientoCreateManyReservaInput | reserva_asientoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type bitacoraUpsertWithWhereUniqueWithoutReservaInput = {
    where: bitacoraWhereUniqueInput
    update: XOR<bitacoraUpdateWithoutReservaInput, bitacoraUncheckedUpdateWithoutReservaInput>
    create: XOR<bitacoraCreateWithoutReservaInput, bitacoraUncheckedCreateWithoutReservaInput>
  }

  export type bitacoraUpdateWithWhereUniqueWithoutReservaInput = {
    where: bitacoraWhereUniqueInput
    data: XOR<bitacoraUpdateWithoutReservaInput, bitacoraUncheckedUpdateWithoutReservaInput>
  }

  export type bitacoraUpdateManyWithWhereWithoutReservaInput = {
    where: bitacoraScalarWhereInput
    data: XOR<bitacoraUpdateManyMutationInput, bitacoraUncheckedUpdateManyWithoutReservaInput>
  }

  export type bitacoraScalarWhereInput = {
    AND?: bitacoraScalarWhereInput | bitacoraScalarWhereInput[]
    OR?: bitacoraScalarWhereInput[]
    NOT?: bitacoraScalarWhereInput | bitacoraScalarWhereInput[]
    id_bitacora?: IntFilter<"bitacora"> | number
    id_reserva?: IntNullableFilter<"bitacora"> | number | null
    accion?: StringFilter<"bitacora"> | string
    fecha?: DateTimeNullableFilter<"bitacora"> | Date | string | null
    descripcion?: StringNullableFilter<"bitacora"> | string | null
  }

  export type clienteUpsertWithoutReservaInput = {
    update: XOR<clienteUpdateWithoutReservaInput, clienteUncheckedUpdateWithoutReservaInput>
    create: XOR<clienteCreateWithoutReservaInput, clienteUncheckedCreateWithoutReservaInput>
    where?: clienteWhereInput
  }

  export type clienteUpdateToOneWithWhereWithoutReservaInput = {
    where?: clienteWhereInput
    data: XOR<clienteUpdateWithoutReservaInput, clienteUncheckedUpdateWithoutReservaInput>
  }

  export type clienteUpdateWithoutReservaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clienteUncheckedUpdateWithoutReservaInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoUpsertWithoutReservaInput = {
    update: XOR<eventoUpdateWithoutReservaInput, eventoUncheckedUpdateWithoutReservaInput>
    create: XOR<eventoCreateWithoutReservaInput, eventoUncheckedCreateWithoutReservaInput>
    where?: eventoWhereInput
  }

  export type eventoUpdateToOneWithWhereWithoutReservaInput = {
    where?: eventoWhereInput
    data: XOR<eventoUpdateWithoutReservaInput, eventoUncheckedUpdateWithoutReservaInput>
  }

  export type eventoUpdateWithoutReservaInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    recinto?: recintoUpdateOneRequiredWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateWithoutReservaInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    id_recinto?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_asientoUpsertWithWhereUniqueWithoutReservaInput = {
    where: reserva_asientoWhereUniqueInput
    update: XOR<reserva_asientoUpdateWithoutReservaInput, reserva_asientoUncheckedUpdateWithoutReservaInput>
    create: XOR<reserva_asientoCreateWithoutReservaInput, reserva_asientoUncheckedCreateWithoutReservaInput>
  }

  export type reserva_asientoUpdateWithWhereUniqueWithoutReservaInput = {
    where: reserva_asientoWhereUniqueInput
    data: XOR<reserva_asientoUpdateWithoutReservaInput, reserva_asientoUncheckedUpdateWithoutReservaInput>
  }

  export type reserva_asientoUpdateManyWithWhereWithoutReservaInput = {
    where: reserva_asientoScalarWhereInput
    data: XOR<reserva_asientoUpdateManyMutationInput, reserva_asientoUncheckedUpdateManyWithoutReservaInput>
  }

  export type asientoCreateWithoutReserva_asientoInput = {
    fila: number
    numero: number
    tipo?: string | null
    recinto: recintoCreateNestedOneWithoutAsientoInput
  }

  export type asientoUncheckedCreateWithoutReserva_asientoInput = {
    id_asiento?: number
    id_recinto: number
    fila: number
    numero: number
    tipo?: string | null
  }

  export type asientoCreateOrConnectWithoutReserva_asientoInput = {
    where: asientoWhereUniqueInput
    create: XOR<asientoCreateWithoutReserva_asientoInput, asientoUncheckedCreateWithoutReserva_asientoInput>
  }

  export type reservaCreateWithoutReserva_asientoInput = {
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraCreateNestedManyWithoutReservaInput
    cliente: clienteCreateNestedOneWithoutReservaInput
    evento: eventoCreateNestedOneWithoutReservaInput
  }

  export type reservaUncheckedCreateWithoutReserva_asientoInput = {
    id_reserva?: number
    id_cliente: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
    bitacora?: bitacoraUncheckedCreateNestedManyWithoutReservaInput
  }

  export type reservaCreateOrConnectWithoutReserva_asientoInput = {
    where: reservaWhereUniqueInput
    create: XOR<reservaCreateWithoutReserva_asientoInput, reservaUncheckedCreateWithoutReserva_asientoInput>
  }

  export type asientoUpsertWithoutReserva_asientoInput = {
    update: XOR<asientoUpdateWithoutReserva_asientoInput, asientoUncheckedUpdateWithoutReserva_asientoInput>
    create: XOR<asientoCreateWithoutReserva_asientoInput, asientoUncheckedCreateWithoutReserva_asientoInput>
    where?: asientoWhereInput
  }

  export type asientoUpdateToOneWithWhereWithoutReserva_asientoInput = {
    where?: asientoWhereInput
    data: XOR<asientoUpdateWithoutReserva_asientoInput, asientoUncheckedUpdateWithoutReserva_asientoInput>
  }

  export type asientoUpdateWithoutReserva_asientoInput = {
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    recinto?: recintoUpdateOneRequiredWithoutAsientoNestedInput
  }

  export type asientoUncheckedUpdateWithoutReserva_asientoInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    id_recinto?: IntFieldUpdateOperationsInput | number
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reservaUpsertWithoutReserva_asientoInput = {
    update: XOR<reservaUpdateWithoutReserva_asientoInput, reservaUncheckedUpdateWithoutReserva_asientoInput>
    create: XOR<reservaCreateWithoutReserva_asientoInput, reservaUncheckedCreateWithoutReserva_asientoInput>
    where?: reservaWhereInput
  }

  export type reservaUpdateToOneWithWhereWithoutReserva_asientoInput = {
    where?: reservaWhereInput
    data: XOR<reservaUpdateWithoutReserva_asientoInput, reservaUncheckedUpdateWithoutReserva_asientoInput>
  }

  export type reservaUpdateWithoutReserva_asientoInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUpdateManyWithoutReservaNestedInput
    cliente?: clienteUpdateOneRequiredWithoutReservaNestedInput
    evento?: eventoUpdateOneRequiredWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutReserva_asientoInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reserva_asientoCreateManyAsientoInput = {
    id_reserva_asiento?: number
    id_reserva: number
  }

  export type reserva_asientoUpdateWithoutAsientoInput = {
    reserva?: reservaUpdateOneRequiredWithoutReserva_asientoNestedInput
  }

  export type reserva_asientoUncheckedUpdateWithoutAsientoInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_asientoUncheckedUpdateManyWithoutAsientoInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_reserva?: IntFieldUpdateOperationsInput | number
  }

  export type reservaCreateManyClienteInput = {
    id_reserva?: number
    id_evento: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
  }

  export type reservaUpdateWithoutClienteInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUpdateManyWithoutReservaNestedInput
    evento?: eventoUpdateOneRequiredWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutClienteInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUncheckedUpdateManyWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateManyWithoutClienteInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_evento?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
  }

  export type reservaCreateManyEventoInput = {
    id_reserva?: number
    id_cliente: number
    fecha_reserva?: Date | string | null
    estado_reserva: string
  }

  export type reservaUpdateWithoutEventoInput = {
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUpdateManyWithoutReservaNestedInput
    cliente?: clienteUpdateOneRequiredWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateWithoutEventoInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
    bitacora?: bitacoraUncheckedUpdateManyWithoutReservaNestedInput
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type reservaUncheckedUpdateManyWithoutEventoInput = {
    id_reserva?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
    fecha_reserva?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado_reserva?: StringFieldUpdateOperationsInput | string
  }

  export type asientoCreateManyRecintoInput = {
    id_asiento?: number
    fila: number
    numero: number
    tipo?: string | null
  }

  export type eventoCreateManyRecintoInput = {
    id_evento?: number
    nombre_evento: string
    descripcion?: string | null
    fecha: Date | string
    hora: Date | string
  }

  export type asientoUpdateWithoutRecintoInput = {
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reserva_asiento?: reserva_asientoUpdateManyWithoutAsientoNestedInput
  }

  export type asientoUncheckedUpdateWithoutRecintoInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    reserva_asiento?: reserva_asientoUncheckedUpdateManyWithoutAsientoNestedInput
  }

  export type asientoUncheckedUpdateManyWithoutRecintoInput = {
    id_asiento?: IntFieldUpdateOperationsInput | number
    fila?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type eventoUpdateWithoutRecintoInput = {
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: reservaUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateWithoutRecintoInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    reserva?: reservaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type eventoUncheckedUpdateManyWithoutRecintoInput = {
    id_evento?: IntFieldUpdateOperationsInput | number
    nombre_evento?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bitacoraCreateManyReservaInput = {
    id_bitacora?: number
    accion: string
    fecha?: Date | string | null
    descripcion?: string | null
  }

  export type reserva_asientoCreateManyReservaInput = {
    id_reserva_asiento?: number
    id_asiento: number
  }

  export type bitacoraUpdateWithoutReservaInput = {
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bitacoraUncheckedUpdateWithoutReservaInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bitacoraUncheckedUpdateManyWithoutReservaInput = {
    id_bitacora?: IntFieldUpdateOperationsInput | number
    accion?: StringFieldUpdateOperationsInput | string
    fecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type reserva_asientoUpdateWithoutReservaInput = {
    asiento?: asientoUpdateOneRequiredWithoutReserva_asientoNestedInput
  }

  export type reserva_asientoUncheckedUpdateWithoutReservaInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_asiento?: IntFieldUpdateOperationsInput | number
  }

  export type reserva_asientoUncheckedUpdateManyWithoutReservaInput = {
    id_reserva_asiento?: IntFieldUpdateOperationsInput | number
    id_asiento?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}