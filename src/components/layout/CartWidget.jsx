import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

function CartWidget() {

    const {calcularCantidad} = useContext(CarritoContext);
    
    return (
        <>
            <Link className='btn btn-secondary' to="/carrito">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <span className='badge bg-danger mb-3 l-10'>
                {calcularCantidad()}
            </span>
        </>
    );
}

export default CartWidget;