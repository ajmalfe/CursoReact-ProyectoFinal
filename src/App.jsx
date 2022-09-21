import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import Form from './components/Form'

const App = () => {
    return (
      <>
        <Navbar/>
        <Form busqueda="Buscar Usuario"/>
      </>
    );
}


export default App;
