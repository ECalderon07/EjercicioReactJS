import React from 'react';
import { Link } from 'react-router-dom'
import buttomImg from './add.png';
import './Boton.css';

const Button = () => (
    <Link to="/exercise/new">
        <img src={buttomImg} className="Fitness-Add" alt="exercise"/>
    </Link>
)

export default Boton