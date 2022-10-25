import React, {useState, createContext} from 'react';

const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    
    const agregarProducto = (prod, cant) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto.id === prod.id)

        if(indice !== -1){
            aux[indice].cantidad = cant;
        }
        else{
            prod.cantidad = cant;
            aux.push(prod);
        }

        setCarrito([...aux]);
    }

    const quitarProducto = (prod) => {
        const aux = carrito;
        let indice = aux.findIndex(producto => producto.id === prod.id)

        if(indice >= 0)
        {
            aux.splice(indice, 1);
        }

        setCarrito([...aux]);
    }

    const vaciarCarrito = (prod) => {
        setCarrito([]);
    }

    const calcularCantidad = () => {
        let subtotal = 0;
        carrito.map((prod) => (subtotal += (prod.cantidad))); 
        return subtotal;
    }

    const calcularImporteTotal = () => {
        let subtotal = 0;
        carrito.map((prod) => (subtotal += (prod.cantidad * prod.precio))); 
        return subtotal;
    }

    return (
        <>
            <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, calcularCantidad, calcularImporteTotal, vaciarCarrito}}>
                {props.children}
            </CarritoContext.Provider>
        </>
    );
}

export {CarritoContext, CarritoProvider};
