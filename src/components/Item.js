import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

function Item({producto}) {
  const onAdd = () =>{
    console.log ('agregar carrito')
  }

  return (
    
      
      <div className='col-sm-6 mb-4 '>
        <div className="card">
          <img src={producto.image} className="card-img-top w-50 mx-auto" />
            <div className="card-body">
              <h5 className="card-title">{producto.producto}</h5>
              <h4 className="card-subtitle mb-2 text-muted">{producto.precio}</h4>
              <Link to={`/detalle/${producto.id}`}><button type="button" className="btn btn-secondary mt-4" >Ver más</button></Link>
              <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
            </div>
        </div>
      </div>
  
  
    
        
      

  
    
  )
}

export default Item