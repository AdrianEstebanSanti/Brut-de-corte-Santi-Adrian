import React, {useContext, useState} from 'react'
import { CartContex } from '../CartContex/CartContex'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'




export const ItemDetail = ({image, id, producto, descripcion, maridaje, precio, stock})=>{

  const [cantidad, setCantidad] = useState (0)

  const {addCart, isInCart} = useContext(CartContex)

    const onAdd = () =>{
      if(cantidad === 0) return

        if(!isInCart(id)){
          const itemToCart ={
            id,
            cantidad,
            producto,
            precio,
            stock,
          }

          addCart(itemToCart)
          console.log(itemToCart)
        }
        
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
                      {
                        isInCart(id)
                        ?<div className='d-grid gap-2 d-md-flex justify-content-md-center mt-4'>
                            <Link to='../Cart/Cart.js'><button type='button' className='btn btn-primary'>
                              Finalizar Compra
                              </button>
                            </Link>
                            
                            <Link to='/'><button type='button' className='btn btn-primary'>
                              Seguir comprando
                              </button>
                            </Link>
                          </div>
                  
                        :
                        
                        <>
                          <ItemCount 
                          stock={stock} 
                          count={cantidad}
                          setCount={setCantidad}
                          />

                          <button 
                          className='onAdd btn btn-primary' 
                          onClick={onAdd}
                          disabled={cantidad === 0} >
                            Añadir al Carrito
                          </button>
                        </>

                      }
                    </div>
            </div>
          </div>
        </div>                        
      </div>
    </div>
  )
}

