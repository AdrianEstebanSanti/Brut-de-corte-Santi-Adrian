import { createContext, useState } from "react";


export const CartContex = createContext ()

export const CartContexProvider = ({children})=>{

    const [cart, setCart] = useState([])
    
    const addCart = (item)=>{
        setCart([...cart, item])
    }

    const isInCart = (id)=>{
        return cart.some((producto)=> producto.id === id)
    }

    const quantityCart = ()=>{
        return cart.reduce((acc, producto)=> acc + producto.cantidad, 0)
    }

    const totalCart = ()=>{
        return cart.reduce((acc, producto)=> acc + producto.cantidad * producto.precio, 0)
    }

    const clearCart = ()=>{
        setCart([])
    }

    const removeItem = (id)=>{
        setCart(cart.filter((producto)=> producto.id !== id))
    }

    return(
        <CartContex.Provider value={{
            cart,
            addCart,
            isInCart,
            quantityCart,
            totalCart,
            clearCart,
            removeItem
            }
        }>

        {children}
        </CartContex.Provider>
    )
}