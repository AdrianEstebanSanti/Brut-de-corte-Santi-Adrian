import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";


function ItemDetailContainer() {

    const [products, setProducts] = useState([])
    const {itemId} = useParams()

    useEffect(()=>{
      const getData = async()=>{
          const query = doc(db, 'items', (itemId));
          const response = await getDoc(query);
          const dataDoc = response.data();
          const dataItem = {id: response.id, ...dataDoc};
          setProducts(dataItem)     
  } 
      getData();
  },[])

  
  return (
    <div>
      
      <ItemDetail item={products} stock={products.stock}/>
      
      
    </div>
  )
}

export default ItemDetailContainer