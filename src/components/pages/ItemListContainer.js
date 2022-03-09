import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

  const onAdd = () =>{
    console.log ('agregar carrito')
  }
  return (
    <div>
        <h2>{props.item1}</h2>
        <h2>{props.item2}</h2>
        <h2>{props.item3}</h2>
        <h2>{props.item4}</h2>

        <div>
          <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default ItemListContainer