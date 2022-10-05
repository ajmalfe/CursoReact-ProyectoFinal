import React from 'react';

const ItemListContainer = ({item}) => {

    console.log(item);

    return (
        
      <div className="card border-secondary m-4" style={{"maxWidth": "25rem"}}>
        <div className="card-header">
          <h4>A</h4>
        </div>
        <div className="card-body">
          <p className="card-text text-muted">B</p>
        </div>
      </div>
    );
}

export default ItemListContainer;
