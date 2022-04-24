import { createContext, useState } from "react";
import Swal from 'sweetalert2'


export const CartContex = createContext ()

export const CartContexProvider = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

  
    const addItem = (item, quantity)=>{
        if(isInCart(item.id)){
            Swal.fire('UPS!', 'este producto esta repetido en tu carrito', 'warning')
            
        } else{
            
            const newProduct = {
                item,
                quantity
            }
            setProductosCarrito([...productosCarrito, newProduct]);
        }
    }
    

    const removeItem = (itemId)=>{
        const nuevosProductos = productosCarrito.filter(producto=>producto.item.id !== itemId);
        setProductosCarrito(nuevosProductos);
    }
      
       const clear = ()=>{
        setProductosCarrito([]);
    }

   
    const isInCart = (id) =>{
        return productosCarrito.some(producto=>producto.item.id === id);
    }

    const getTotalCount = ()=>{
        const totalCount = productosCarrito.reduce((acc,item)=>acc+item.quantity,0)
        return totalCount;
    }

    const getTotalPrice = ()=>{
        const totalPrice = productosCarrito.reduce((acc,prod)=>acc+(prod.quantity*prod.item.precio),0)
        return totalPrice;
    }

    return(
        <CartContex.Provider value={{
            productosCarrito,
            addItem,
            isInCart,
            getTotalCount,
            clear,
            getTotalPrice,
            removeItem,
            
            }
        }>

        {children}
        </CartContex.Provider>
    )
}