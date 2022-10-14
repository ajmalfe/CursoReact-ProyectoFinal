import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
            <Link to={"/"} className="navbar-brand">
                <img src={'./img/logo-blanco.png'} style={{"maxWidth": "10rem"}} />
            </Link>
        </>
    );
}

export default Logo;
