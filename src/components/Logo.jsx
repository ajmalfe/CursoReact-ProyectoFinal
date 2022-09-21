import React from 'react';

const Logo = () => {
    return (
        <a href="../" class="navbar-brand">
            <img src={require('../images/logo-blanco.png')} style={{"max-width": "10rem"}} />
        </a>
    );
}

export default Logo;
