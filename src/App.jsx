import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Menu from './components/Menu';

const App = () => {

    const listCategorias = [["Mouse", 10], ["Pen Drive", 5], ["Auriculares", 3], ["Teclados", 8]];
    const listItems = ["Mouse Inalambrico Logitech G502", "Mouse Razer Basilisk V3 Pro", "Mouse de juego Xinua M3", "Mouse de juego HyperX  Pulsefire Raid"];

    return (
      <>
        <Navbar lista={listCategorias}/>
        <div className="bs-docs-section clearfix">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-header">
                <h1 className="p-4">Categorías</h1>
              </div>
              <Menu lista={listCategorias} />
            </div>
            <div className="col-lg-8">
              <div className="page-header">
                <h1 className="p-4">Productos</h1>
              </div>
              {
                listItems.map(item => {
                  return (<ItemListContainer item={item}/> )
                })
              }               
            </div>
          </div>
        </div>
      

      </>
    );
}


export default App;
