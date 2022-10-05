import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './components/content/Navbar';
import './App.css'
import Home from './components/content/Home';
import Producto from './components/content/Producto';
import About from './components/content/About';
import Contacto from './components/content/Contacto';
import Carrito from './components/content/Carrito';
import Footer from './components/content/Footer';
import Categoria from './components/content/Categoria';

const App = () => {

    let listCategorias = ["Mouse", "Pendrive", "Auriculares", "Teclados"];

    return (
      <>
        <BrowserRouter>
          <Navbar lista={listCategorias} />
          <Routes>
            <Route path="/" element={<Home listCategorias={listCategorias}/>} />
            <Route path="/producto/:id" element={<Producto/>} />
            <Route path="/categoria/:categoria" element={<Categoria listCategorias={listCategorias}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacto" element={<Contacto/>} />
            <Route path="/carrito" element={<Carrito/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
}


export default App;
