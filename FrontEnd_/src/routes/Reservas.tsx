import { useState } from "react";
import "../reservas.css";
import { useLocation } from "react-router-dom";

export default function Reservas() {
  const { state } = useLocation();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");


  // Por si querés ver en consola qué viene
  console.log("Datos recibidos:", state);

  // Función para manejar el envío de la reserva
  const handleReservar = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevenir el reload por el submit del form

  const reserva = {
    idUsuario: state.idUsuario,
    idEvento: state.idEvento,
    fila: state.fila,
    numero: state.numero,
    tipo: state.tipo,
    total: state.total,
    nombre,
    correo,
    telefono,
  };  

  try {
    const res = await fetch("http://localhost:3010/reservar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    });

    const data = await res.json();
    alert(data.mensaje);
  } catch (err) {
    console.error("Error al reservar", err);
    alert("Ocurrió un error 😢");
  }
};


  return (
    <div className="background-proyecto">
      <header className="header-proyecto">
        <h1>ENTRADAS</h1>
      </header>

      <section className="section-proyecto">
        <h2>Reserva</h2>
        <form id="createMatchForm" onSubmit={handleReservar}>
          <label>
            Nombre:
            <input type="text" id="nombre" required value={nombre} onChange={e => setNombre(e.target.value)} />
          </label>
          <label>
            Correo:
            <input type="email" id="correo" required value={correo} onChange={e => setCorreo(e.target.value)} />
          </label>
          <label>
            Teléfono:
            <input type="tel" id="telefono" required value={telefono} onChange={e => setTelefono(e.target.value)} />
          </label>
          <button className = "button-proyecto" type="submit" onClick={handleReservar}>Reservar</button>
        </form>
      </section>

    </div>
  );
}
