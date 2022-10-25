import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {

    const {id} = useParams();

    return (
        <div className='row'>
            <div className="col-lg-6 offset-3">
                <div className="card-body rounded m-4 p-4" style={{"border": "1px solid #CDCDCD", "position": "relative"}}>
                    <h4 className="m-4 p-4 text-center">Su pedido quedó registrado con el código</h4>
                    <h4 className="m-4 p-4 text-center">{id}</h4>
                    <h4 className="p-4 text-center">Muchas gracias por su compra</h4>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
