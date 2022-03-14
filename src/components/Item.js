import React from 'react'
import ItemCount from './ItemCount'

function Item({producto}) {
  const onAdd = () =>{
    console.log ('agregar carrito')
  }

  return (
    
      
      <div className='col-sm-6 mb-4 '>
        <div className="card">
          <img src={producto.image} className="card-img-top w-75 mx-auto" />
            <div className="card-body">
              <h5 className="card-title">{producto.producto}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <h4 className="card-subtitle mb-2 text-muted">{producto.precio}</h4>
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>
      </div>
  
  
    
        
      

  
    
  )
}

export default Item