import { clear } from "@testing-library/user-event/dist/clear"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContex } from "../CartContex/CartContex"


const Cart = () =>{
    
const {productosCarrito, removeItem, clear} = useContext(CartContex)
console.log('cart', productosCarrito)
return (
    <> 
    
    <div className="container mt-4 mb-2 pt-5">
        <div className="row">
            <div className="col mb-2 shop-cart-header">
                <h5>Carrito</h5>
            </div>
        </div>
    </div>

    <div className="container">
        
            {productosCarrito.map((item) => 
                    <div className=" row cart-item p-0" key={item.item.id} >
                        <div className="col-4 ">
                            <div className="d-flex align-items-center h-100 border-bottom pb-2 pt-3 ">
                            <img src={item.item.image} className="w-25 mx-auto " alt={item.item.producto}/>
                            <h6>{item.item.producto}<p className="fw-light text-wrap pt-2">{item.item.descripcion}</p></h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="d-flex align-items-center justify-content-center h-100 border-bottom pb-2 pt-3 ">
                                <p>Cantidad: {item.quantity}</p>
                            </div>

                        </div>
                        <div className="col-4 ">
                            <div className="d-flex align-items-center justify-content-center border-bottom h-100 pb-2 pt-3">
                                <p>Total: ${item.quantity * item.item.precio}</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="  d-flex align-items-center justify-content-center border-bottom h-100 pb-2 pt-3">
                                <button onClick={()=>removeItem(item.item.id)} className='btn btn-danger'>Eliminar producto</button>
                            </div>

                        </div>
                    </div>
            )}
            
                <div>
                    <div className="d-flex justify-content-start">
                    <Link to='/'>
                    <button type='button'
                        className='btn btn-primary mt-4'>
                        Volver
                    </button>
                     </Link>
                    </div>
                    
                  <div className="d-flex  justify-content-end">
                        <button type="button" onClick={()=>clear()}
                        className="btn btn-danger mt-4 me-2">
                            Vaciar carrito
                        </button>
                        <button type="button"
                        className="btn btn-primary mt-4 ">
                            Finalizar Compra
                        </button>

                  </div>
                  
                </div>
                
    </div>
    </>
    )
}


export default Cart