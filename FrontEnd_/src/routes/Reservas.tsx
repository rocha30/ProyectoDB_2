import "../reservas.css";

export default function Reservas() {
  return (
    <div className="background-proyecto">
      <header className="header-proyecto">
        <h1>ENTRADAS</h1>
      </header>

      <section className="section-proyecto">
        <h2>Reserva</h2>
        <form id="createMatchForm">
          <label>
            Nombre:
            <input type="text" id="nombre" required />
          </label>
          <label>
            Correo:
            <input type="email" id="correo" required />
          </label>
          <label>
            Teléfono:
            <input type="tel" id="telefono" required />
          </label>
          <button className = "button-proyecto" type="submit">Reservar</button>
        </form>
      </section>

    </div>
  );
}
