import React from 'react'
import Item from './Item'
import ItemListContainer from './ItemListContainer'





const ItemList = ({listProducts}) =>{

    
 
    
  return (
    <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
            
            {listProducts.map((producto)=>
        <Item  key= {producto.id} producto={producto}/>
        )}
            
      
        </div>
       

    </div>
  )
}

export default ItemList