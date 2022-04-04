import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import {stockProductos} from '../Stock/Stock'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

function ItemDetailContainer() {

    
    const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState (false)

    // const productos= stockProductos
    

    const {itemId} = useParams()

    useEffect(()=>{
      const getData = async()=>{
          const query = doc(db, 'items', (itemId));
          const response = await getDoc(query);
          const dataDoc = response.data();
          console.log (response);
          console.log(dataDoc)
          const dataItem = {id: response.id, ...dataDoc};
          setProducts(dataItem)
          
      }
      getData();
  },[])

  
    // const getProducts= new Promise ((resolve, reject)=>{

    //   setTimeout (()=>{
          
    //       if(productos.length===0){
    //           reject("error productos")
    //       }else {
    //           resolve(productos)
    //       }
    //   },1500)
    // })

    // console.log(itemId)
    
    // useEffect(()=>{
      
    //   getProducts.then((respuesta)=> {
    //   setProducts(respuesta.find((productos)=> productos.id === Number(itemId)))
    // })
    //   .catch((error)=> console.log(error))
    // },[itemId])

  return (
    <div>
      
      <ItemDetail item={products}/>
      
    </div>
  )
}

export default ItemDetailContainer