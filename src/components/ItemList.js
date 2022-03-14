import React, {useEffect, useState} from 'react'
import Item from './Item'
import img1 from '../image/Malbec-Coleccion-2020.png'
import img2 from '../image/Merlot-Colección-2020.png'
import img3 from '../image/Rosé-de-Verano.png'
import img4 from '../image/Torrontés-Selección.png'




const ItemList = ({}) =>{

    
    const [listProducts, setListProducts ] = useState([])
        const productos=[
          {id:"1", producto:"Brut de Corte Malbec", descripcion:"Típico malbec de San Rafael. La expresión total del varietal.", stock: "10", precio:"$500", image: img1},
          {id:"2", producto:"Brut de Corte Merlot", descripcion:"Gran merlot de San Rafael. Expresión perfecta de los vinos de bordeux.", stock: "15", precio:"$500", image: img2 },
          {id:"3", producto:"Brut de Corte Rosé", descripcion:"Serie limitada de verano. Vino fresco y perfumado. Ideal para todo momento.", stock: "7", precio:"$500", image: img3},
          {id:"4", producto:"Brut de Corte Torrontes", descripcion:"Gran torrontes artesanal con frutos verdes y ananá. Selección privada.", stock: "9", precio:"$500", image: img4}]
      
      
    const getProducts= new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            
            if(productos.length===0){
                reject("error productos")
            }else {
                resolve(productos)
            }
        },2000)
    })

    console.log(getProducts)

    useEffect(()=>{
        getProducts.then((respuesta)=> setListProducts(respuesta))
        .catch((error)=> console.log(error))
    },[])

   
    
  return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
            
            {listProducts.map((producto)=>
        <Item  key= {producto.id} producto={producto}/>
        )}
            
      
        </div>
       

    </div>
  )
}

export default ItemList