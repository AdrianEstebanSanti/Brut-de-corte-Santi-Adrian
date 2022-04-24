import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import CarouselWine from './CarouselWine'

function ItemListContainer() {

  const [listProducts, setListProducts ] = useState([])
 
    const {categoryId} = useParams ()

    useEffect(()=>{
      const getData = async()=>{
          const queryCollection = collection(db, 'items');
          const q = categoryId ? query(queryCollection, where("categoria", "==", categoryId)) : queryCollection
          const response = await getDocs(q);
          const dataItems = response.docs.map(doc=>{return{id: doc.id, ...doc.data()}});
          setListProducts(dataItems)
          
      }
      getData();
  },[categoryId])

   

  return (
    <>
      <CarouselWine/>
      <ItemList listProducts={listProducts}/>
    </> 
  )
}

export default ItemListContainer