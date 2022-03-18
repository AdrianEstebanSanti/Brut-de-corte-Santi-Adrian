import React, { useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    // const mockApi = "https://623264a8961530db4aa4bc39.mockapi.io/productos"
    const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState (false)

    const productos=[
    {id:"1", producto:"Brut de Corte Malbec", descripcion:"Típico malbec de San Rafael. La expresión total del varietal.", maridaje:"Acompaña muy bien a las carnes rojas, carnes a la parrilla, quesos duros y pastas con salsa de tomate.", stock: "10", precio:"$500", imagen: "https://i.postimg.cc/HWJ9wWfc/Malbec-Coleccion-2020.png"},]

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
      getProducts.then((respuesta)=> setProducts(respuesta))
      .catch((error)=> console.log(error))
    },[])


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