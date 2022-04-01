import { createContext, useState } from "react";


export const CartContex = createContext ()

export const CartContexProvider = ({children})=>{
    const [productosCarrito, setProductosCarrito] = useState([]);

    // agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity)=>{
        if(isInCart(item.id)){
            //el producto ya existe
            const newProducts = [...productosCarrito];
            //buscamos la posicion del producto dentro del arreglo.
            const productIndex = newProducts.findIndex(prod=>prod.item.id === item.id);
            //index del producto
            console.log(newProducts[productIndex]);
            newProducts[productIndex].quantity = newProducts[productIndex].quantity + quantity;
            //cantidad actualizada del producto que se repite
            console.log('productos actualizado',newProducts);
            setProductosCarrito(newProducts);
        } else{
            //el producto no ha sido agregado
            const newProduct = {
                item,
                quantity
            }
            console.log('newProduct',newProduct)
            //agregamos el nuevo producto al carrito
            setProductosCarrito([...productosCarrito, newProduct]);
        }
    }

    // const [cart, setCart] = useState([])
    
    // const addItem = (item)=>{
    //     setCart([...cart, item])
    // }

    const isInCart = (id)=>{
        return productosCarrito.some((producto)=> producto.id === id)
    }

    // const quantityCart = ()=>{
    //     return cart.reduce((acc, producto)=> acc + producto.cantidad, 0)
    // }

    const totalCart = ()=>{
        return productosCarrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

    const clear = ()=>{
        setProductosCarrito([])
    }

    const removeItem = (id)=>{
        setProductosCarrito(productosCarrito.filter((producto)=> producto.id !== id))
    }

    return(
        <CartContex.Provider value={{
            productosCarrito,
            addItem,
            isInCart,
            totalCart,
            clear,
            removeItem
            }
        }>

        {children}
        </CartContex.Provider>
    )
}