import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listProducts}) =>{
  
  return (
    <div className=' container'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-1 g-4 mt-4 '>
            {listProducts.map((producto)=>
              <Item  key= {producto.id} producto={producto}/>
            )}
        </div>
    </div>
    
  )
}

export default ItemList