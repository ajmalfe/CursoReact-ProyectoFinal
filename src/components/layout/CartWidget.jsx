import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

function CartWidget() {

    const {carrito, cantidadCarrito} = useContext(CarritoContext);
    const [valor, setValor] = useState(0);

    const cambiarValor = () => {
        let sum = carrito.reduce(function(prev, current) {
            return prev + current.cantidad;
          }, 0);

        setValor(sum);
    }

    return (
        <>
            <Link className='btn btn-secondary' to="/carrito">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <button onClick={() => cambiarValor()}>PRUEBA</button>
            <span className='badge bg-danger mb-3 l-10'>
                {cantidadCarrito()}
            </span>
        </>
    );
}

export default CartWidget;
