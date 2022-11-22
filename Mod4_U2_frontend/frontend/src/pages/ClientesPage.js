import React from 'react';

import '../styles/components/pages/ClientesPage.css'

const ClientesPage = (props) => {
    return (
        <main className="holder">
            
            <div className="clientes">
                <h2>Algunos de Nuestros Clientes</h2>
                {/* <h3>Fintech, Banca, Seguros, Tecnología y Consultoría</h3> */}
                <h4>Despegar</h4>
                <p>Es la empresa de viajes líder en Latinoamérica. Desde hace 21 años revoluciona la industria del turismo
                    a través de la tecnología, y, con su continua apuesta al desarrollo del sector.
                </p>
                <hr></hr>
                <h4>Mercado Libre</h4>
                <p>Es una empresa multinacional de origen argentino con sede en Buenos Aires dedicada al comercio electrónico en Latinoamérica.
                    Fundada en el año 1999, cuenta con operaciones en Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Ecuador, El Salvador,
                    Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, República Dominicana, Uruguay y Venezuela.
                </p>
                <hr></hr>
                {/* <h3>Retail & FMCGs</h3> */}
                <h4>Easy</h4>
                <p>Empresa fundada en Argentina en 1993 y luego en 1994 se expandió también hacia Chile. En 2002 integra a sus operaciones en Chile
                    la cadena especialista en productos agrícolas Proterra (pertenecientes a Empresas Iansa)2​ y las tiendas Home Depot en Argentina,
                    que abandonaba sus operaciones sudamericanas.
                </p>
                <hr></hr>
                <h4>Zuccardi</h4>
                <p>Empresa familiar fundada en 1963 por el Ing. Alberto Zuccardi. Hoy, desde sus viñedos y olivares ubicados
                    en distintas zonas de Mendoza, son reconocidos a nivel local e internacional por la elaboración de grandes vinos y aceites
                    de oliva. Que llegan a más de 60 países de los cinco continentes.
                </p>
                <hr></hr>
            </div>

        </main>
    );
}

export default ClientesPage;