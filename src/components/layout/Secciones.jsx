import React from 'react';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
        <>
            <li className="nav-item" key="1">
              <Link className="nav-link active" to={"/"}><button className='btn btn-dark'><i className="fas fa-home"></i></button></Link>
            </li>
            <li className="nav-item" key="2">
              <Link className="nav-link" to={"/about"}><button className='btn btn-dark'><i className="fas fa-address-card"></i></button></Link>
            </li>
            <li className="nav-item" key="3">
              <Link className="nav-link" to={"/contacto"}><button className='btn btn-dark'><i className="fas fa-envelope"></i></button></Link>
            </li>
        </>
    );
}

export default Secciones;
