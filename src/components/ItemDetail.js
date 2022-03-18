import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({lista}) {
    const onAdd = () =>{
        console.log ('agregar carrito')
      }
  return (
    <div className='container'>
    <div className=' row row-cols-1 row-cols-md-3 g-4 mt-4'>
        {lista.map((productos)=><div key={productos.id}className="card mb-3 w-75 " >
                                  <div className="row g-0">
                                      <div className="col-md-4">
                                        <img src={productos.imagen} className="img-fluid rounded-start"/>
                                      </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                          <h4 className="card-title mt-2">{productos.producto}</h4>
                                          <p className="card-text m-0">{productos.descripcion}</p>
                                          <p className="card-text ">{productos.maridaje}</p>
                                          <p className="card-text"><small className="text-muted">Stock disponible: {productos.stock}</small></p>
                                          <h3 className="card-subtitle mt-2 text-muted">{productos.precio}</h3>
                                        </div>
                                        <div >
                                              <ItemCount stock={productos.stock} initial={1} onAdd={onAdd}/>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                                 )}
    </div>
    </div>
  )
}

export default ItemDetail