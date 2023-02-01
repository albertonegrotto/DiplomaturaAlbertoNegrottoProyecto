
import React from 'react';

const ClienteItem = (props) => {
    const { name, activity, coment, imagen } = props;

    return (
        <div className="clientes">
            <div className='encabezado'>
               <img src={imagen} alt='logo' />
               <div className='empresa'>
                  <h1>{name}</h1>
               </div>
            </div>
            <h3>{activity}</h3>            
            <div dangerouslySetInnerHTML={{__html: coment}} />
            <hr />
        </div>
    );
}

export default ClienteItem;