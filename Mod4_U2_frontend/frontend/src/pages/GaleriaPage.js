import React from 'react';

import '../styles/components/pages/GaleriaPage.css'

const GaleriaPage = (props) => {
    return (
        <main className="holder">
            <h2>Galería</h2>
            <div className="galeria">
                <img src="images/galeria/galeria1.jpg" alt=" galeria 1" />
                <img src="images/galeria/galeria5.jpg" alt=" galeria 5" />
                <img src="images/galeria/galeria4.jpg" alt=" galeria 4" />
                <img src="images/galeria/galeria3.jpg" alt=" galeria 3" />
                <img src="images/galeria/galeria2.jpg" alt=" galeria 2" />
                <img src="images/galeria/galeria6.jpg" alt=" galeria 6" />
                <img src="images/galeria/galeria7.jpg" alt=" galeria 7" />
                <img src="images/galeria/galeria9.jpg" alt=" galeria 9" />
                <img src="images/galeria/galeria8.jpg" alt=" galeria 8" />
            </div>
        </main>
    );
}

export default GaleriaPage;