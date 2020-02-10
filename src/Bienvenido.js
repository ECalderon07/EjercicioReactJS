import React from 'react';
import './Bienvenido.css';

function Bienvenido(props){ //Componentes funcionales
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Welcolme {props.username}</h1>
                <p>Let's workout to get someone gains!</p>
            </div>
        </div>
    )
}

export default Bienvenido