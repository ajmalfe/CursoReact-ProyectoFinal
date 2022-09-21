import React from 'react';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import Logo from './Logo';

const Navbar = ({lista}) => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Logo />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown lista={lista}/>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Navbar;
