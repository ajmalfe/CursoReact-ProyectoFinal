// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//process.env.API_KEY

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUTjLgJ0Wca0SwXuOSHtF5-sINanF6GBs",
  authDomain: "react-34755-2022-27c36.firebaseapp.com",
  projectId: "react-34755-2022-27c36",
  storageBucket: "react-34755-2022-27c36.appspot.com",
  messagingSenderId: "156050046547",
  appId: "1:156050046547:web:f4a653599f45df51ed90a6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBaseDeDatos = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach( async(producto) => {
     await addDoc(collection(db,"productos"), {
          nombre: producto.nombre,
          marca: producto.marca,
          modelo: producto.modelo,
          precio: producto.precio,
          stock: producto.stock,
          img: producto.img,
          categoria: producto.categoria,
          descripcion: producto.descripcion
     })
  })
}

const addOrder = async (order) => {
  const ordenGrabada = await addDoc(collection(db,"orders"), {order})
  return ordenGrabada
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  return prod
}

export {cargarBaseDeDatos, getProductos, getProducto, addOrder}