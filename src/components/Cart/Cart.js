import React, { useContext } from "react"
import { CartContex } from "../CartContex/CartContex"


const Cart = () =>{

const{productosCarrito} = useContext(CartContex)
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
        
            {productosCarrito.map((item) => (
                    <div className=" row cart-item p-0" key={item.id}>
                        <div className="col-4 ">
                            <div className="d-flex align-items-center h-100 border-bottom pb-2 pt-3 ">
                            <img src={item.image} className="w-25 mx-auto " alt={item.producto}/>
                            <h6>{item.producto}<p className="fw-light text-wrap pt-2">{item.descripcion}</p></h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="d-flex align-items-center justify-content-center h-100 border-bottom pb-2 pt-3 ">
                                <p>Cantidad: {item.cantidad}</p>
                            </div>

                        </div>
                        <div className="col-4 ">
                            <div className="d-flex align-items-center justify-content-center border-bottom h-100 pb-2 pt-3">
                                <p>${item.cantidad * item.precio}</p>
                            </div>
                        </div>
                        


                    </div>
                ))
            }

        
    </div>
    </>
    )

}


export default Cart