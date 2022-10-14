import React from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useState, useContext } from 'react';

const ItemDetail = ({producto}) => {

    const [cantidad, setCantidad] = useState(1);
    //const  = [];

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext);

    const cantProducto = (operacion) => {
        if(operacion == "+")
        {
            if(cantidad < producto.stock)
            {
                setCantidad(cantidad + 1);
            }
        }
        else if(operacion == "-")
        {
            if(cantidad > 1)
            {
                setCantidad(cantidad - 1);
            }
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <img src={`${producto.img}`} className="img-fluid rounded-start" alt="" style={{"maxWidth": "20rem", "display": "block", "margin-left": "auto", "margin-right": "auto"}}  />
                </div>
                <div className="col-md-4">
                    <div className="card-body rounded-start" style={{"border": "1px solid #CDCDCD", "height": "100%", "position": "relative"}}>
                        <h3 className="card-title">{producto.nombre}</h3>
                        <p className="card-text">Marca: <b>{producto.marca}</b></p>
                        <p className="card-text">Modelo: <b>{producto.modelo}</b></p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        
                        <button className='btn btn-dark' onClick={() => cantProducto("+")}>+</button>
                        <p className="card-text">Cantidad: {cantidad}</p>
                        <button className='btn btn-dark' onClick={() => cantProducto("-")}>-</button>

                        <button className='btn btn-dark' style={{"right": "10px", "bottom": "10px", "position": "absolute"}} onClick={() => agregarProducto(producto, cantidad)}>Agregar al Carrito</button>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default ItemDetail;
