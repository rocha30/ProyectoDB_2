import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import App from './App';
import Asignacion from './routes/asignacion.tsx'
import Home from './routes/Home.tsx'
import Reservas from './routes/Reservas.tsx'

//Creación rutas en URL
const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/reservas",
    element: <Reservas />,
  },
  {
    path: "/asignacion",
    element: <Asignacion />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
