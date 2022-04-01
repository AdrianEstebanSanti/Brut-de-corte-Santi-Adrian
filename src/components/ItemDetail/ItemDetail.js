import React, {useContext, useState} from 'react'
import { CartContex } from '../CartContex/CartContex'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'





export const ItemDetail = ({item})=>{
  const [stockProducto, setStockProducto] = useState(10);

  const carritoContext = useContext(CartContex);

  console.log('carritoContext', carritoContext);

  const [productosAgregados, setProductosAgregados] = useState(0);
  

  const onAdd = (quantityToAdd)=>{
      setProductosAgregados(quantityToAdd)
      setStockProducto(stockProducto - quantityToAdd);
      carritoContext.addItem(item, quantityToAdd);}
  
      
  return (
    <div className='container'>
      <div className=' row row-cols-1 row-cols-md-3 g-4 mt-4'>
        <div className="card mb-3 w-75 " >
          <div className="row g-0">
              <div className="col-md-4">
                <img src={item.image} className="img-fluid rounded-start" alt={item.producto}/>
              </div>
            <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title mt-2">{item.producto}</h4>
                  <p className="card-text m-0">{item.descripcion}</p>
                  <p className="card-text ">{item.maridaje}</p>
                  
                  <h3 className="card-subtitle mt-2 text-muted">${item.precio}</h3>
                </div>
                    <div >
                    <ItemCount 
                          stock={stockProducto} 
                          onAdd={onAdd}

                          />
                    
                      {
                        productosAgregados >0 &&
                        <div className='d-grid gap-2 d-md-flex justify-content-md-center mt-4 mb-4'>
                            <Link to='/Compra'><button type='button' className='btn btn-primary'>
                              Finalizar Compra
                              </button>
                            </Link>
                            
                          </div>

                      }
                    </div>
            </div>
          </div>
        </div>  
              <div>
                  <Link to='/'>
                    <button type='button'
                        className='btn btn-primary mt-4'>
                        Volver
                    </button>
                  </Link>
              </div>
      </div>
    </div>
  )
}

