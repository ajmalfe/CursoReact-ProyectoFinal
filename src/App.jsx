import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './components/content/Navbar';
import './App.css';
import ItemListContainer from './components/content/ItemListContainer';
import ItemDetailContainer from './components/content/ItemDetailContainer';
import About from './components/content/About';
import Contacto from './components/content/Contacto';
import Carrito from './components/content/Carrito';
import Footer from './components/content/Footer';
import { CarritoProvider } from './context/CarritoContext';
import CartWidget from './components/layout/CartWidget';

const App = () => {

    let listCategorias = ["Mouse", "Pendrive", "Auriculares", "Teclados"];

    return (
      <>
        <CarritoProvider>
          <BrowserRouter>
            <Navbar lista={listCategorias} />
            <Routes>
              <Route path="/" element={<ItemListContainer listCategorias={listCategorias}/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/categoria/:categoria" element={<ItemListContainer listCategorias={listCategorias}/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contacto" element={<Contacto/>} />
              <Route path="/carrito" element={<Carrito/>} />
              <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CarritoProvider>
      </>
    );
}


export default App;
