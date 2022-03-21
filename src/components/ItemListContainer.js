import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer() {

  const [listProducts, setListProducts ] = useState([])
 
  const productos=[
    {id:1, producto:"Brut de Corte Malbec", stock: "10", precio:"$500", image: "https://i.postimg.cc/HWJ9wWfc/Malbec-Coleccion-2020.png", categoria:"malbec"},
    {id:2, producto:"Brut de Corte Merlot", stock: "15", precio:"$500", image: "https://i.postimg.cc/ZY1FVtSf/Merlot-Colecci-n-2020.png", categoria:"merlot"},
    {id:3, producto:"Brut de Corte Rosé", stock: "7", precio:"$500", image: "https://i.postimg.cc/rwTG21zx/Ros-de-Verano.png", categoria:"rose"},
    {id:4, producto:"Brut de Corte Torrontes", stock: "9", precio:"$500", image: "https://i.postimg.cc/BQH5zYZJ/Torront-s-Selecci-n.png", categoria:"torrontes"}]


  const getProducts= new Promise ((resolve, reject)=>{

      setTimeout (()=>{
          
          if(productos.length===0){
              reject("error productos")
          }else {
              resolve(productos)
          }
      },1500)
      
    })

    console.log(getProducts)

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