import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
//import logo from "../assets/concierto_playa.jpg"; 
import "../index.css"

export default function Home(){
    const navigate = useNavigate();

    return (
        <div className="background">
            <div className="overlay-box">

                <DefaultLayout>

                <div className="title-line">
                    <h1>ULTRA</h1>
                    <h1 className="year">20</h1>
                </div>

                <div className="title-line">
                    <h1>MIAMI</h1>
                    <h1 className="year">25</h1>
                </div>
                    <button onClick={() => navigate("/asignacion")}>Entradas</button>

                </DefaultLayout>
            
            </div>
        </div>
    );
}