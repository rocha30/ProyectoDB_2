import "../asignacion.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Asignacion() {
  const navigate = useNavigate();

  // Estado para los datos de la reserva
  const [recintoSeleccionado, setRecintoSeleccionado] = useState<string | null>(null);
  const [fila, setFila] = useState("1");
  const [numero, setNumero] = useState("Número 1");
  const [tipo, setTipo] = useState("General");
  const [total, setTotal] = useState(0); // Total de la reserva

  
  // Precio por defecto
  const precioRecintos: Record<string, number> = {
    A: 250,
    B: 150,
    C: 75,
  };

  // Función para asignar el precio del recinto al presionar el botón 'Obtener'
  const asignarRecinto = (recinto: string) => {
    setRecintoSeleccionado(recinto);
    calcularTotal(recinto);
  };

  const calcularTotal = (recinto: string) => {
    let precio = 0;
  
    if (!recinto) return;
  
    // Sumar precio base del recinto
    precio += precioRecintos[recinto];
  
    // Sumar adicional por tipo
    if (tipo === "VIP") {
      precio += 50;
    }
  
    // Sumar adicional por fila
    if (fila === "Fila 1") {
      precio += 30;
    } else if (fila === "Fila 2") {
      precio += 20;
    } else if (fila === "Fila 3") {
      precio += 10;
    }
  
    setTotal(precio);
  };  

  useEffect(() => {
    if (recintoSeleccionado) {
      calcularTotal(recintoSeleccionado);
    }
  }, [fila, numero, tipo, recintoSeleccionado]);

  return (
    <div className="background-asignacion">
      <h1 className="titulo-principal">ENTRADAS</h1>

      {/* Evento */}
      <div className="evento-card">
        <div className="fecha-box">
          <p>MAR</p>
          <p>28</p>
        </div>

        <div className="evento-detalles">
          <h2>ULTRA MIAMI</h2>
          <p>Marzo 28, 2025 </p>
          <p> Un lugar genial</p>

          <div className="recintos">
            <div className="recinto">
              <p>Recinto A</p>
              <button
                className=" btn-obtener btn-obtener1"
                onClick={() => asignarRecinto("A")}
              >
                Obtener
              </button>
            </div>
            <p className="precio">Q250</p>

            <div className="recinto">
              <p>Recinto B</p>
              <button
                className="btn-obtener  btn-obtener2"
                onClick={() => asignarRecinto("B")}
              >
                Obtener
              </button>
            </div>
            <p className="precio">Q150</p>

            <div className="recinto">
              <p>Recinto C</p>
              <button
                className="btn-obtener btn-obtener3"
                onClick={() => asignarRecinto("C")}
              >
                Obtener
              </button>
            </div>
            <p className="precio">Q75</p>
          </div>
        </div>
      </div>

      {/* Asientos */}
      <div className="asientos-card">
        <h3>Asientos</h3>
        <div className="selectores-asientos">
          <select value={fila} onChange={(e) => setFila(e.target.value)}>
            <option>Fila 1</option>
            <option>Fila 2</option>
            <option>Fila 3</option>
            <option>Fila 4</option>
            <option>Fila 5</option>
            <option>Fila 6</option>
            <option>Fila 7</option>
          </select>
          <select value={numero} onChange={(e) => setNumero(e.target.value)}>
            {Array.from({ length: 100 }, (_, i) => (
              <option key={i + 1} value={`Asiento ${i + 1}`}>
                Asiento {i + 1}
              </option>
            ))}
          </select>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option>General</option>
            <option>VIP</option>
          </select>
        </div>
      </div>

      {/* Precios */}
      <div className="tabla-precios">
        <h3>Precios</h3>
        <table>
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Recinto A</td>
              <td>Q250</td>
            </tr>
            <tr>
              <td>Recinto B</td>
              <td>Q150</td>
            </tr>
            <tr>
              <td>Recinto C</td>
              <td>Q75</td>
            </tr>
            <p></p>
            <tr>
              <td>Fila 1</td>
              <td>+Q30</td>
            </tr>
            <tr>
              <td>Fila 2</td>
              <td>+Q20</td>
            </tr>
            <tr>
              <td>Fila 3</td>
              <td>+Q10</td>
            </tr>
            <tr>
              <td>Fila 4-7</td>
              <td>+Q0</td>
            </tr>
            <p></p>
            <tr>
              <td>Tipo VIP</td>
              <td>+Q50</td>
            </tr>
            <tr>
              <td>Tipo General</td>
              <td>+Q0</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total y Reservar */}
      <div className="total-reserva">
        <p>
          <strong>Total</strong>
          <br />
          Q{total}
        </p>
        <p className="warning"> *El precio está basado en la fila seleccionada y en si es General o VIP* </p>
        <button
          className="btn-reservar"
          onClick={() =>
            navigate("/reservas", {
              state: {
                idUsuario: 1, // o el ID real del usuario logueado
                idEvento: 1,
                fila,
                numero,
                tipo,
                total,
                recinto: recintoSeleccionado, 
              },
            })
          }
        >
          Reservar &gt;
        </button>
      </div>
    </div>
  );
}
