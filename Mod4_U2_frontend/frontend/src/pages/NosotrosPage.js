import React from 'react';

import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="quienessomos">
                <p>Somos una Consultora que busca promover el potencial, desarrollo y bienestar de las personas,
                    sabiendo que son ellas las que transforman y hacen evolucionar los negocios, las organizaciones y la
                    sociedad.</p>
            </div>
            <div className="staff">
                <h2>Nuestro Equipo</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/quienes/quien_1.jpg" alt="Dana Litch" />
                        <h5>Dana Litch</h5>
                        <h6>Coach Ontológico y Organizacional. PNL practitioner. Asesora de imagen.</h6>
                    </div>
                    <div className="persona">
                        <img src="images/quienes/quien_2.jpg" alt="Lorena Nardi" />
                        <h5>Lorena Nardi</h5>
                        <h6>Bioingeniera.Coach Ontológico y Ejecutivo.Especialista en Gestión de Equipos.</h6>
                    </div>
                    <div className="persona">
                        <img src="images/quienes/quien_3.jpg" alt="Daiana Perez Mamakian" />
                        <h5>Daiana Perez Mamakian</h5>
                        <h6>Lic. en Gestión de Negocios. Técnica superior de RRHH. Maestrando en Dirección de RRHH.</h6>
                    </div>
                </div>
            </div>
            <h2>Testimonios</h2>
            <div className="testimonios">
                <div className="testimonio">
                    <span className="cita">"Más que contenta! Excelente equipo de trabajo. Te responden a tiempo, cumplen sus
                        objetivos y en nuestro caso seleccionaron al mejor candidato! Totalmente recomendable"</span>
                    <span className="autor">Sofía</span>
                </div>
                <div className="testimonio">
                    <span className="cita">"Es un grupo humano con mucha disponibilidad y garantía académica. Nos han ayudado a plantear nuevos
                        desafíos y a ponerlos en marcha, con un gran acompañamiento y servicio!!! Mil gracias por estos años que llevamos
                        trabajando juntos!"</span>
                    <span className="autor">María Ayelen</span>
                </div>
            </div>
            <br />
        </main>
    );
}

export default NosotrosPage;