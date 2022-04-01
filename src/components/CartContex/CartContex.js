import { createContext, useState } from "react";


export const CartContex = createContext ()

export const CartContexProvider = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

  
    const addItem = (item, quantity)=>{
        if(isInCart(item.id)){
           
            const newProducts = [...productosCarrito];
            
            const productIndex = newProducts.findIndex(prod=>prod.item.id === item.id);
           
            console.log(newProducts[productIndex]);
            newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
          
            console.log('productos actualizado',newProducts);
            setProductosCarrito(newProducts);
        } else{
            
            const newProduct = {
                item,
                quantity
            }
            console.log('newProduct',newProduct)
           
            setProductosCarrito([...productosCarrito, newProduct]);
        }
    }

    const removeItem = (itemId)=>{
        console.log('itemId', itemId);
        const nuevosProductos = productosCarrito.filter(producto=>producto.item.id !== itemId);
        console.log('nuevosProductos',nuevosProductos)
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