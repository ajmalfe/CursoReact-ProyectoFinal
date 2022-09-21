import React from 'react';

const Menu = ({lista}) => {
    return (
        <div className="m-4" >
            <ul className="list-group">
                {
                    lista.map(element => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                            {element[0]}
                            <span className="badge bg-primary rounded-pill">{element[1]}</span>
                            </li>
                        )
                    })    
                }
            </ul>
        </div>
    );
}

export default Menu;
