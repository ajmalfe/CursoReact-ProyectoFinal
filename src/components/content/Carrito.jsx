import React, {useContext, useEffect, useState, useCallback} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import Menu from '../layout/Menu';
import { addOrder } from '../../utils/funciones/firebase';
import { useNavigate } from 'react-router-dom';

const Carrito = () => {

    const {carrito, quitarProducto, calcularImporteTotal, vaciarCarrito} = useContext(CarritoContext);
    const [carritoLocal, setCarritoLocal] = useState([]);
    
    const borrarProducto = (p) => {
        quitarProducto(p)
    }

    const handelInputChange = (e) => {
        const { name, value } = e.target;
    };
    
    const navigate = useNavigate();
    const handleIrAlCheckout = useCallback((id) => navigate('/checkout/' + id, {replace: true}), [navigate]);
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        const datosCliente = {
            nombre: event.target.elements.nombre.value,
            apellido: event.target.elements.apellido.value,
            telefono: event.target.elements.telefono.value,
            email: event.target.elements.email1.value
        }

        const order = {
            items: carrito,
            comprador: {datosCliente},
            precioTotal: calcularImporteTotal()
        }

        addOrder(order)
        .then(res => {
                vaciarCarrito();
                handleIrAlCheckout(res.id);
            }
        )
    }

    useEffect(() => {

        const productosMostrar = carrito.map((producto, i) => 
            <div key={producto.id} className="col-lg-12  mt-1 mb-1">
                <div className="card-body rounded" style={{"border": "1px solid #CDCDCD", "height": "100%", "position": "relative"}}>
                    <div className="row">
                        <div className="col-md-2 m-1">
                            <img src={`${producto.img}`} className="img-fluid rounded-start img-same-min" alt='Imagen Producto' />
                        </div>
                        <div className="col-md-1 mx-auto">
                            <h3 className="card-text m-4">{producto.cantidad}x</h3>
                        </div>
                        <div className="col-md-5">
                            <h4 className="card-title m-4">{producto.nombre}</h4>
                        </div>
                        <div className="col-md-2">
                            <h3 className="card-text m-4" style={{"float": "right"}}> <span style={{"color": "#AAAAAA", "fontSize": "24px", "position": "relative", "top": "-3px"}}>$</span>{(producto.precio * producto.cantidad).toFixed(2)}</h3>
                        </div>
                        <div className="col-md-1 p-4">
                        <button className='btn btn-dark' onClick={() => borrarProducto(producto) }><i className="fas fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        )

        setCarritoLocal(productosMostrar);

    }, [carrito]);

    if(carritoLocal.length !== 0){
        return (
            <>
                <div className='row'>
                    <div className="col-lg-6 offset-1">
                        <h1 className="m-4">Elementos del Carrito ({carrito.length})</h1>
                        {carritoLocal}
                        <div key="TOTAL" className="col-md-12 mt-4 mb-4">
                            <div className="card-body rounded" style={{"border": "1px solid #CDCDCD", "height": "100%", "position": "relative", "backgroundColor": "#EFEFEF"}}>
                                <div className="row">
                                    <div className="col-md-2 m-1">
                                        
                                    </div>
                                    <div className="col-md-1 mx-auto">
                                        
                                    </div>
                                    <div className="col-md-5">
                                        <h3 className="card-title m-4" style={{"float": "right"}}>TOTAL</h3>
                                    </div>
                                    <div className="col-md-2">
                                        <h3 className="card-text m-4" style={{"float": "right"}}> <span style={{"color": "#AAAAAA", "fontSize": "24px", "position": "relative", "top": "-3px"}}>$</span>{(calcularImporteTotal()).toFixed(2)}</h3>
                                    </div>
                                    <div className="col-md-1 p-4">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4 mb-4">
                        <div className="card-body rounded" style={{"border": "1px solid #CDCDCD", "height": "100%", "position": "relative", "backgroundColor": "#EFEFEF"}}>
                            <div className="card">
                                <h2 className='m-4'>Checkout</h2>
                                <h5 style={{"marginLeft": "1.5rem"}}>Complete sus datos para enviar la orden</h5>
                                <form className='m-4' onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="form-group">
                                            <input name="nombre" onChange={handelInputChange}  className="form-control m-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                                            <input name="apellido" onChange={handelInputChange} className="form-control m-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Apellido" />
                                            <input name="telefono" onChange={handelInputChange} className="form-control m-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Telefono" />
                                            <input name="email1" onChange={handelInputChange} className="form-control m-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar E-Mail" />
                                            <input name="email2" onChange={handelInputChange} className="form-control m-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirmar E-Mail" />
                                        </div>
                                        <button type='submit' className="btn btn-info m-2" style={{"float": "right"}}>Finalizar Compra</button>
                                    </fieldset>
                                </form>    
                            </div>
                        </div>
                    </div>
                </div>
                
                
                    
                
            </>
        )
    } 
    else{
        return (
            <div className='row'>
                <div className="col-lg-4 offset-4">
                    <div className="card-body rounded m-4 p-4" style={{"border": "1px solid #CDCDCD", "position": "relative"}}>
                        <h1 className="m-4 p-4 text-center">El Carrito está vacío</h1>
                        <h4 className="m-4 p-4 text-center">Seguir comprando</h4>
                        <h4 className="p-4">Categorías</h4>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Carrito;
