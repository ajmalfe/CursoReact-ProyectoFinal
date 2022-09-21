import React from 'react';

const ItemListContainer = ({item}) => {
    return (
        
      <div className="card border-secondary m-4">
        <div className="card-header">
          <h4>{item}</h4>
        </div>
        <div className="card-body">
          <p className="card-text text-muted">[Aquí va el detalle]</p>
        </div>
      </div>
    );
}

export default ItemListContainer;
