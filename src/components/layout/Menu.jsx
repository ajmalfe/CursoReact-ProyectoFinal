import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    let listCategorias = ["Mouse", "Pendrive", "Auriculares", "Teclados"];

    return (
        <div className="m-4" >
            <ul className="list-group">
                {
                    listCategorias.map((element, indice) => {
                        return (
                            <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
                            <Link to={"/categoria/" + element}>{element}</Link>
                            <span className="badge bg-primary rounded-pill"></span>
                            </li>
                        )
                    })    
                }
            </ul>
        </div>
    );
}

export default Menu;
