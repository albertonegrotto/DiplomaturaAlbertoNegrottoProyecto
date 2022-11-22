import React from "react"

import "../../styles/components/layout/Header.css"

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div id="contenedor">
                    <div className="izquierdo">
                        <img src="images/LogoBusIT.jpg" width="100" alt="Busquedas IT" />
                        <h1>Búsquedas IT</h1>
                    </div>
                    <div className="derecho">
                        <ul>
                            <li className="social"><a href="https://www.facebook.com/busquedasit/" target="_blank" rel="noreferrer" title="Seguinos en Facebook">
                                <img src="images/logoacebook.jpg" alt="facebook" /></a>
                            </li>
                            <li className="social"><a href="https://www.instagram.com/busquedasit_arg/" target="_blank" rel="noreferrer" title="Nuestro Instagram">
                                <img src="images/logoInstagram.jpg" alt="instagram"/ ></a>
                            </li>
                            <li className="social"><a href="https://twitter.com/busquedasit_arg/" target="_blank" rel="noreferrer" title="Seguinos en Twitter">
                                <img src="images/logoTwitter.jpg" alt="twitter" /></a>
                            </li>
                            <li className="social"><a href="https://www.youtube.com/channel/UCtMHAAu6xiF-4ZCHvfYo4pA" rel="noreferrer" target="_blank" title="Seguinos en Youtube">
                                <img src="images/logoyoutube.jpg" alt="youtube" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;