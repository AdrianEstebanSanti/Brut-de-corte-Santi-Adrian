import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial)
    const sumar = () => {
        if(count < stock){
            setCount (count +1)
        }
    }

    const restar = () => {
        if (count > 0){
            setCount (count -1)
        }
    }
    
    
  return (
    <div>
        <div>
            <button className='buttonCart' onClick={restar} >-</button>
            <span className='count'>{count} </span>
            <button className='buttonCart' onClick={sumar}>+</button>
        </div>
        <div>
            <button className='onAdd' onClick={onAdd} >Añadir al Carrito</button>
        </div>
        

    </div>
  )
}

export default ItemCount