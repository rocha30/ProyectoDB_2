import "../asignacion.css";
import { useNavigate } from "react-router-dom";

export default function Asignacion() {
  const navigate = useNavigate();
  return (
    <div className="background-asignacion">
      <h1 className="titulo-principal">ENTRADAS</h1>

      {/* Evento */}
      <div className="evento-card">
        <div className="fecha-box">
          <p>ABR</p>
          <p>15</p>
        </div>

        <div className="evento-detalles">
          <h2>ULTRA MIAMI</h2>
          <p>Abril 15, 2025 </p>
          <p> Un lugar genial</p>

          <div className="recintos">
            <div className="recinto">
              <p>Recinto A</p>
              <button className="btn-obtener1">Obtener</button>
            </div>
            <p className="precio">Q250</p>

            <div className="recinto">
              <p>Recinto B</p>
              <button className="btn-obtener2">Obtener</button>
            </div>
            <p className="precio">Q150</p>

          </div>
        </div>
      </div>

      {/* Asientos */}
      <div className="asientos-card">
        <h3>Asientos</h3>
        <div className="selectores-asientos">
          <select>
            <option>Fila 1</option>
            <option>Fila 2</option>
            <option>Fila 3</option>
          </select>
          <select>
            <option>Número 1</option>
            <option>Número 2</option>
            <option>Número 3</option>
          </select>
          <select>
            <option>General</option>
            <option>VIP</option>
          </select>
        </div>
      </div>

      {/* Total y Reservar */}
      <div className="total-reserva">
        <p><strong>Total</strong><br />0.00 GTQ</p>
        <button className="btn-reservar" onClick={() => navigate("/reservas")}>Reservar &gt;</button>
      </div>
    </div>
  );
}
