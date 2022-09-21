import React from 'react';
import Form from './Form'
import Dropdown from './Dropdown';
import Secciones from './Secciones';

const Navbar = () => {

    const listDrowdon = ["Hombre", "Mujer", "Niños", "Bebe"]
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <Secciones/>
                    <Dropdown lista={listDrowdon}/>
                </ul>
                <Form busqueda="Buscar Producto"/>
                </div>
            </div>
            </nav>
        </>
    );
}


export default Navbar;
