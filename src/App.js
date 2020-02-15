import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Ejercicios from './Ejercicios';
import EjerciciosNuevo from './EjerciciosNuevo';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/ejercicio" component={Ejercicios} />
      <Route exact path="/ejercicio/nuevo" component={EjerciciosNuevo} />
    </BrowserRouter>
  )
}

export default App;
