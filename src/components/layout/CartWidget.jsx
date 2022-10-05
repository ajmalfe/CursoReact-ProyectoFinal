import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const [contador, setContador] = useState(0);

    return (
        <>
            <Link className='btn btn-secondary' to="/carrito">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <span className='badge bg-danger mb-3 l-10'>
                {contador}
            </span>
        </>
    );
}

export default CartWidget;
