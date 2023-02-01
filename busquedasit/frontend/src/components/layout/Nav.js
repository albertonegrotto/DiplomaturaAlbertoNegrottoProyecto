import React from "react";

import { NavLink } from "react-router-dom";

import "../../styles/components/layout/Nav.css"

const classNameFunc = ({ isActive }) => (isActive ? "activo" : "");

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink className={classNameFunc} to="/">Inicio</NavLink></li>
                    <li><NavLink className={classNameFunc} to="/nosotros">Quienes Somos</NavLink></li>
                    <li><NavLink className={classNameFunc} to="/clientes">Clientes</NavLink></li>
                    <li><NavLink className={classNameFunc} to="/servicios">Servicios</NavLink></li>
                    <li><NavLink className={classNameFunc} to="/galeria">Galería</NavLink></li>
                    <li><NavLink className={classNameFunc} to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;