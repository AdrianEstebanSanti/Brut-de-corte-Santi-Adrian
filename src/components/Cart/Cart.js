import React, { useContext } from "react"
import { CartContex } from "../CartContex/CartContex"

export const Cart = () =>{

const{cart} = useContext(CartContex)
return (
    <div className="container">
        <div className="cart-item">
            <div>

            </div>

        </div>
    </div>

    )

}