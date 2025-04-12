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
    e.preventDefault(); // Evitar recarga
  
    // 🔢 Convertir "Número 1" a 1
    const idAsiento = parseInt(state.numero.replace("Asiento ", ""));
  
    const reserva = {
      idAsiento,
      idCliente: state.idUsuario,
      idEvento: state.idEvento,
      isolationLevel: "ReadCommitted"
    };
  
    try {
      const res = await fetch("http://localhost:3010/api/reservar-asiento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
      });

      if (!res.ok) {
        throw new Error("Error al procesar la reserva");
      }

      const data = await res.json();
      alert(data.mensaje || "Reserva completada 🎉");
    } catch (err) {
      console.error("Error al reservar", err);
      alert("Ocurrió un error al reservar 😢");
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
          <button className = "button-proyecto" type="submit">Reservar</button> {/**onClick={handleReservar} */}
        </form>
      </section>

    </div>
  );
}
