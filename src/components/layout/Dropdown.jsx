import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({lista}) => {
    return (
        <li className="nav-item dropdown m-2 p-0" key="4">
            <button className="nav-link dropdown-toggle btn btn-dark" data-bs-toggle="dropdown"  >Categorias</button>
            <div className="dropdown-menu">
                {
                    lista.map((element, indice) => {
                        return (<Link className="dropdown-item" to={"/categoria/" + element}>{element}</Link>)
                    })
                }
            </div>
        </li>
    );
}

export default Dropdown;
