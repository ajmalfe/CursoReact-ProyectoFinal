import React from 'react';

const Dropdown = ({lista}) => {
    return (
        <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorías</a>
            <div className="dropdown-menu">
                {
                    lista.map(element => {
                        return (<a className="dropdown-item" href="#">{element[0]}</a>)
                    })
                }
            </div>
        </li>
        </>
    );
}

export default Dropdown;
