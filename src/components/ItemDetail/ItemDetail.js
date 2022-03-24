import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'




export const ItemDetail = ({image, id, producto, descripcion, maridaje, precio, stock})=>{
  const [count, setCount] = useState (0)
    const onAdd = () =>{
        const itemToCart ={
          id,
          count,
          producto,
          precio,
          stock,
        }
        console.log (itemToCart)
      }
  return (
    <div className='container'>
      <div className=' row row-cols-1 row-cols-md-3 g-4 mt-4'>
        <div className="card mb-3 w-75 " >
          <div className="row g-0">
              <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt={producto}/>
              </div>
            <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title mt-2">{producto}</h4>
                  <p className="card-text m-0">{descripcion}</p>
                  <p className="card-text ">{maridaje}</p>
                  <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
                  <h3 className="card-subtitle mt-2 text-muted">{precio}</h3>
                </div>
                    <div >
                          <ItemCount 
                          stock={stock} 
                          // initial={1} 
                          onAdd={onAdd} 
                          count={count}
                          setCount={setCount}
                          />
                    </div>
            </div>
          </div>
        </div>                        
      </div>
    </div>
  )
}

