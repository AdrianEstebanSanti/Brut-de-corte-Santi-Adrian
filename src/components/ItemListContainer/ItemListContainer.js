import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {stockProductos} from '../Stock/Stock'

function ItemListContainer() {

  const [listProducts, setListProducts ] = useState([])
 
  
  const productos = stockProductos

  const getProducts= new Promise ((resolve, reject)=>{
    
      setTimeout (()=>{
        
          if(productos.length===0){
              reject("error productos")
          }else {
              resolve(productos)
          }
      },1500)
      
    })

  

    const {categoryId} = useParams ()

    useEffect(()=>{
      getProducts
      .then((respuesta)=>{
        if (!categoryId){ 
          setListProducts(respuesta)
        } else{
          setListProducts(respuesta.filter((prod)=>prod.categoria === categoryId))
        }
      })
        .catch((error)=> console.log(error))
        
    },[categoryId])


  return (
    <>
      
      <ItemList listProducts={listProducts}/>
      
      
      
    </> 
  )
}

export default ItemListContainer