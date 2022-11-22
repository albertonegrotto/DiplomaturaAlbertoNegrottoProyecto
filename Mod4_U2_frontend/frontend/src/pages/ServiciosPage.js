import React from 'react';

import '../styles/components/pages/ServiciosPage.css'

const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Servicios</h2>
            <div className="servicio">
                <img src="images/servicios/servicios_1.jpg" alt="Servicio 1" />
                <div className="info">
                    <h4>Servicio de Recruting</h4>
                    <p>Planificación Estratégica. Sourcing y Head Hunting. Búsqueda, Selección e Inducción del Personal.
                        Entrevistas y elaboración de informes. Fidelización y Engagement del colaborador para retención del talento.
                        Evaluación y desarrollo de equipos. Diseño de dinámicas para reforzar el trabajo en equipo y el clima de la organización.
                        Procesos End to End. Onboarding.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/servicios_2.jpg" alt="Servicio 2" />
                <div className="info">
                    <h4>Servicio de Desarrollo</h4>
                    <p>Soft Skills para el desarrollo profesional y la gestión de talento. Diseño y ejecución de Soluciones de Aprendizaje.
                        Entrenamiento y formación continua del personal. Objetivos organizacionales, Procesos, Instructivos y Procedimientos,
                        Liderazgo Accountable y Empowerment. Liderazgo y Habilidades Gerenciales. Equipos de Alto Rendimiento. Team Building.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/servicios_3.jpg" alt="Servicio 3" />
                <div className="info">
                    <h4>Servicio de Consultoría</h4>
                    <p>Evaluación y planificación estratégica integral de la comunicación corporativa y organizacional. Gestión y soporte de la cultura interna.
                        Desarrollo de estrategias, análisis, implementación, cuidado y cultura organizacional. Soporte de Change Management.
                        Fidelización y Engagement del colaborador para para el logro de objetivos. Resolución de conflictos y
                        entrenamiento en Comunicación para Escenarios de Crisis.</p>
                </div>
            </div>
        </main>
    );
}

export default ServiciosPage;