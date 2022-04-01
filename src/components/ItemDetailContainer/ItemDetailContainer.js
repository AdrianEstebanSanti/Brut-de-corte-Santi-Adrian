import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {stockProductos} from '../Stock/Stock'

function ItemDetailContainer() {

    
    const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState (false)

    const productos= stockProductos
    

    const {itemId} = useParams()
    const getProducts= new Promise ((resolve, reject)=>{

      setTimeout (()=>{
          
          if(productos.length===0){
              reject("error productos")
          }else {
              resolve(productos)
          }
      },1500)
    })

    console.log(itemId)
    
    useEffect(()=>{
      
      getProducts.then((respuesta)=> {
      setProducts(respuesta.find((productos)=> productos.id === Number(itemId)))
    })
      .catch((error)=> console.log(error))
    },[itemId])

  return (
    <div>
      
      <ItemDetail item={products}/>
      
    </div>
  )
}

export default ItemDetailContainer