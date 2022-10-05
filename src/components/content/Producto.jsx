import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './DetalleProducto';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {   
            console.log({id});
            const producto1 = productos.find(productArray => productArray.id == id)
            console.log(producto1);
            setProducto(producto1);
        })
    }, [])

    return (
        <>
            <div className="card mb-3 m-4 p-4">
                <DetalleProducto producto={producto} />
            </div>
        </>
    );
}

export default Producto;
