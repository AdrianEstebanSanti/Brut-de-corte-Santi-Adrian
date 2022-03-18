import React, {useEffect, useState}from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

function ItemListContainer() {

  const [listProducts, setListProducts ] = useState([])
  const productos=[
    {id:"1", producto:"Brut de Corte Malbec", stock: "10", precio:"$500", image: "https://i.postimg.cc/HWJ9wWfc/Malbec-Coleccion-2020.png"},
    {id:"2", producto:"Brut de Corte Merlot", stock: "15", precio:"$500", image: "https://i.postimg.cc/ZY1FVtSf/Merlot-Colecci-n-2020.png"},
    {id:"3", producto:"Brut de Corte Rosé", stock: "7", precio:"$500", image: "https://i.postimg.cc/rwTG21zx/Ros-de-Verano.png"},
    {id:"4", producto:"Brut de Corte Torrontes", stock: "9", precio:"$500", image: "https://i.postimg.cc/BQH5zYZJ/Torront-s-Selecci-n.png"}]


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
    <div> 
      <ItemList listProducts={listProducts}/>
    
    </div>
  )
}

export default ItemListContainer