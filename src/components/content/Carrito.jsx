import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {

        const carritoProductos = [];

        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {   
            carrito.forEach(element => {
                const prod = productos.find(p => p.id == element.id)
                prod.cantidad = element.cantidad;
                carritoProductos.push(prod);
            });

            const productosMostrar = carritoProductos.map((p, i) => 
                    <div key={p.id}>
                        <div className="col-md-8 offset-1 m-4">
                            <div className="card-body rounded" style={{"border": "1px solid #CDCDCD", "height": "100%", "position": "relative"}}>
                                <div className="row">
                                    <div className="col-md-2 m-1">
                                        <img src={`${p.img}`} className="img-fluid rounded-start img-same-min" />
                                    </div>
                                    <div className="col-md-1 mx-auto">
                                        <h3 className="card-text m-4">{p.cantidad}x</h3>
                                    </div>
                                    <div className="col-md-5">
                                        <h3 className="card-title m-4">{p.nombre}</h3>
                                    </div>
                                    <div className="col-md-2">
                                        <h3 className="card-text m-4" style={{"float": "right"}}> <span style={{"color": "#AAAAAA", "fontSize": "24px", "position": "relative", "top": "-3px"}}>$</span>{(p.precio * p.cantidad).toFixed(2)}</h3>
                                    </div>
                                    <div className="col-md-1 p-4">
                                        <button className='btn btn-dark' onClick={() => quitarProducto(p)}><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            setCarritoLocal(productosMostrar);
        })

    }, [carrito]);

    if(carritoLocal.length != 0){
        return (
            <>
                <h1 className="m-4">Elementos del Carrito ({carrito.length})</h1>
                {carritoLocal}
            </>
        )
    } 
    else{
        return (
            <div>
                <h1>No existen elementos del Carrito</h1>
            </div>
        );
    }
}

export default Carrito;
