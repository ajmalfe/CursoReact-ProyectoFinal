import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../../utils/funciones/firebase';
import ItemDetail from './ItemDetail';

const Producto = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const consultarItem = async () => {

            const p = await getProducto(id);

            p[1].id = id;
            
            setProducto(p[1]);
        }

        consultarItem();

        return () => {

        };
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
