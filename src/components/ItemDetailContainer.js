import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    // const mockApi = "https://623264a8961530db4aa4bc39.mockapi.io/productos"
    const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState (false)

    const productos=[
    {id:1, producto:"Brut de Corte Malbec", descripcion:"Típico malbec de San Rafael. La expresión total del varietal.", maridaje:"Acompaña muy bien a las carnes rojas, carnes a la parrilla, quesos duros y pastas con salsa de tomate.", stock: "10", precio:"$500", imagen: "https://i.postimg.cc/HWJ9wWfc/Malbec-Coleccion-2020.png"},
    {id:2, producto:"Brut de Corte Merlot", descripcion:"Gran merlot de San Rafael. Expresión perfecta de los vinos de bordeux.",stock: "15", precio:"$500", imagen: "https://i.postimg.cc/ZY1FVtSf/Merlot-Colecci-n-2020.png" },
    {id:3, producto:"Brut de Corte Rosé", descripcion:"Serie limitada de verano. Vino fresco y perfumado. Ideal para todo momento.",stock: "7", precio:"$500", imagen: "https://i.postimg.cc/rwTG21zx/Ros-de-Verano.png"},
    {id:4, producto:"Brut de Corte Torrontes",descripcion:"Gran torrontes artesanal con frutos verdes y ananá. Selección privada", stock: "9", precio:"$500", imagen: "https://i.postimg.cc/BQH5zYZJ/Torront-s-Selecci-n.png"}]

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
      setProducts(respuesta.filter((productos)=> productos.id === Number(itemId)))
    })
      .catch((error)=> console.log(error))
    },[itemId])


    // useEffect (()=>{
    //   setLoading (true);
    //   setTimeout(()=>{
    //     fetch (`${mockApi}`)
    //     .then((res)=>res.json())
    //     .then((producto)=>{
    //         console.log(producto)
    //         setProducts(producto);
    //         setLoading (false);
    //     })
    //     .catch((error)=> console.log(error))
    //   },2000);
    // },[])

    // if (loading) return <div className="spinner-border" role="status">
    //                         <span className="visually-hidden"></span>
    //                     </div>

  return (
    <div>
      
      <ItemDetail lista={products}/>
      
    </div>
  )
}

export default ItemDetailContainer