import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {   
            const producto1 = productos.find(p => p.id == id)
            setProducto(producto1);
        })
    }, [])

    return (
        <>
            <div className="card mb-3 m-4 p-4">
                <ItemDetail producto={producto} />
            </div>
        </>
    );
}

export default Producto;
