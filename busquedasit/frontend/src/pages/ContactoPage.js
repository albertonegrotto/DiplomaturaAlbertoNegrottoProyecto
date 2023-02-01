import '../styles/components/pages/ContactoPage.css'
import React, { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value // forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre}
                            onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" value={formData.email}
                            onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono}
                            onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje}
                            onChange={handleChange} ></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
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