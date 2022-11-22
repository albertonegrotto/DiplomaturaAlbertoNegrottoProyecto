import React from "react";

import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {
    return (
        <main className="holder">

            <div>
                <div className="columnas">
                    <div className="bienvenidosizquierda">
                        <img src="images/Imagen_Home_2.jpg" alt="Bienvenidos 1" />
                        <h2>Estamos enfocados en conectar con tus necesidades de desarrollo</h2>
                        <p>Ofrecemos un servicio innovador e integral en Consultoría del talento humano y comunicación,
                            creación de marca empleadora, gestión de equipos y dirección estratégica para que puedas seguir creciendo.
                            Posibilitamos la co-creación de nuevos escenarios que generen una conexión significativa con los valores,
                            intereses y objetivos de la organización.</p>
                    </div>
                    <div className="bienvenidosderecha">
                        <img src="images/Imagen_Home.jpg" alt="Bienvenidos 2" />
                        <h2>Nos especializamos en el Sector IT, con servicios 100% remotos</h2>
                        <p>Los programas de Trainings de Búsquedas IT acompañan el camino del desarrollo profesional dentro de la organización
                            para mejorar el rendimiento laboral y maximizar la productividad y el liderazgo. Contribuimos con la búsqueda
                            y atracción de candidatos viables y personal calificado, mediante estrategias de Reclutamiento IT.
                            Todo en modalidad online.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default HomePage;