import React from 'react'
import { Link } from 'react-router-dom'


const ItemCount = ({stock,  onAdd, count, setCount}) => {
    

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count > 1 && setCount(count - 1)
    }
    
    
  return (
    <div>
        <div className='container mt-3'>
            <button className='buttonCart btn btn-outline-primary' onClick={restar} >-</button>
            <span className='count' >{count} </span>
            <button className='buttonCart btn btn-primary' onClick={sumar}>+</button>
        </div>
        <div>
            <Link to= '../Cart/Cart.js'>
                <button className='onAdd btn btn-primary' onClick={onAdd} >Añadir al Carrito</button>
            </Link>
        </div>
        

    </div>
  )
}

export default ItemCount