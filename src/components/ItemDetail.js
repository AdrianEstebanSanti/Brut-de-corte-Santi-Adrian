import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({lista}) {
    const onAdd = () =>{
        console.log ('agregar carrito')
      }
  return (
    <div className='container'>
    <div className=' row row-cols-1 row-cols-md-3 g-4 mt-4'>
        {lista.map((productos)=><div className='col-sm-6 mb-4 ' key={productos.id}>
                                    <div className="card">
                                        <img src={productos.imagen} className="card-img-top w-75 mx-auto" />
                                        <div className="card-body">
                                        <h5 className="card-title">{productos.producto}</h5>
                                        <p className="card-text">{productos.descripcion}</p>
                                        <h4 className="card-subtitle mb-2 text-muted">{productos.precio}</h4>
                                        <ItemCount stock={productos.stock} initial={1} onAdd={onAdd}/>
                                        </div>
                                    </div>
                                </div>
                                 )}
    </div>
    </div>
  )
}

export default ItemDetail