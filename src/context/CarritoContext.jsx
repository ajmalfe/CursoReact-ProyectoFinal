import React, {useState, createContext} from 'react';

const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidad, setCantidad] = useState(0);

    const agregarProducto = (prod, cant) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto.id == prod.id)

        if(indice != -1){
            aux[indice].cantidad = cant;
        }
        else{
            const prodCarrito = {id: prod.id, cantidad: cant}
            aux.push(prodCarrito);
        }

        setCarrito(aux);

        //console.log(aux);
        console.log(carrito);
        console.log(carrito.length);
    }

    const quitarProducto = (prod) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto.id == prod.id)

        if(indice >= 0)
        {
            aux.splice(indice, 1);
            setCarrito(aux);
        }

        console.log(carrito);
        console.log(carrito.length);
    }

    const cantidadCarrito = () => {
        const cant = carrito.length;
        setCantidad(cant);
        return cant;
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, cantidadCarrito, cantidad}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
