import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {stockProductos} from '../Stock/Stock'
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firebase";

function ItemListContainer() {

  const [listProducts, setListProducts ] = useState([])
 
  
  // const productos = stockProductos

  // const getProducts= new Promise ((resolve, reject)=>{
    
  //     setTimeout (()=>{
        
  //         if(productos.length===0){
  //             reject("error productos")
  //         }else {
  //             resolve(productos)
  //         }
  //     },1500)
      
  //   })

  

    const {categoryId} = useParams ()

    useEffect(()=>{
      const getData = async()=>{
          const queryCollection = collection(db, 'items');
          const q = categoryId ? query(queryCollection, where("categoria", "==", categoryId)) : queryCollection
          const response = await getDocs(q);
          console.log (response);
          const dataItems = response.docs.map(doc=>{return{id: doc.id, ...doc.data()}});
          setListProducts(dataItems)
          
      }
      getData();
  },[categoryId])

    // useEffect(()=>{
    //   getProducts
    //   .then((respuesta)=>{
    //     if (!categoryId){ 
    //       setListProducts(respuesta)
    //     } else{
    //       setListProducts(respuesta.filter((prod)=>prod.categoria === categoryId))
    //     }
    //   })
    //     .catch((error)=> console.log(error))
        
    // },[categoryId])


  return (
    <>
      
      <ItemList listProducts={listProducts}/>
      
      
      
    </> 
  )
}

export default ItemListContainer