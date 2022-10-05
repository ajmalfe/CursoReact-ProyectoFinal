import React, {useState, useEffect} from 'react';
import ItemListContainer from '../layout/ItemListContainer';
import Menu from '../layout/Menu';
import Producto from './Producto';
import { Link } from 'react-router-dom';

const Home = ({listCategorias}) => {

    const [productos, setProductos] = useState([]);
    useEffect(() => {

        const consultarItem = async () => {
            const response = await fetch('../json/productos.json')
            const productos = await response.json();

            const cardProductos = productos.map(producto => 
                <div className="col-md-4">
                  <div className='card border-secondary m-4' key={producto.id}>
                    <div className="card-header">
                      <h4>{producto.nombre}</h4>
                    </div>
                    <img src={`${producto.img}`} className="img-fluid rounded-start" style={{"maxWidth": "20rem", "maxHeight": "20rem"}} />
                    
                    <div className="card-body" style={{"backgroundColor": "#d5dbe3"}}>
                    <p className="card-text">Marca: <b>{producto.marca}</b></p>
                    <p className="card-text">Modelo: <b>{producto.modelo}</b></p>
                    <p className="card-text">Precio: <b>${producto.precio}</b></p>
                    <p className="card-text">Stock: {producto.stock}</p>
                    <Link className='btn btn-dark' style={{"float": "right"}} to={"/producto/" + producto.id} >VER PRODUCTO</Link>
                  </div>
                </div>
              </div>
              )

            setProductos(cardProductos);
        }

        consultarItem();

        return () => {

        };
    }, []);

    return (
        <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-lg-3">
            <div className="page-header">
              <h1 className="p-4">Categorías</h1>
            </div>
            <Menu lista={listCategorias} />
          </div>
          <div className="col-lg-9">
            <div className="page-header">
              <h1 className="p-4">Productos</h1>
            </div>
            <div className="row" style={{"--bs-gutter-x": "0"}}>
              {productos}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;
