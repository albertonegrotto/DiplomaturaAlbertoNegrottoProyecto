import React from 'react';

import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de Comunicación</h2>
                <p>También puede comunicarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 4219 1782</li>
                    <li>Email: contacto@busquedasit.com.ar</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;