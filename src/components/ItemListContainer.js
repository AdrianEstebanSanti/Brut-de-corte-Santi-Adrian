import React from 'react'

function ItemListContainer(props) {
  return (
    <div>
        <h2>{props.item1}</h2>
        <h2>{props.item2}</h2>
        <h2>{props.item3}</h2>
        <h2>{props.item4}</h2>
    </div>
  )
}

export default ItemListContainer