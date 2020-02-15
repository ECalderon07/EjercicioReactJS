import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import buttomImg from './add.png';
import './Boton.css';

function Boton() {
    return (
        <BrowserRouter>
            <Link to="/exercise/new">
                <img src={buttomImg} className="Fitness-Add" alt="exercise" />
            </Link>
        </BrowserRouter>
    )
}



export default Boton