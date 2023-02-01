import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClienteItem from '../components/clientes/ClientesItem';

const ClientesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const cargarClientes = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/clientes');
            setClientes(response.data);
            setLoading(false);
        };

        cargarClientes();
    }, []);

    return (
        <section className="holder">
            <h2>Algunos de Nuestros Clientes</h2>
            {loading ? (
               <p>Cargando...</p>
            ) : (
                 clientes.map(item => <ClienteItem key={item.id}
                    name={item.nombre} activity={item.actividad}
                    coment={item.comentario}  imagen={item.imagen} />)
            )}

        </section>
    );
}

export default ClientesPage;