import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'


const ItemCount = ({ onAdd, stock}) => {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        
        if (stock===0) {
            Swal.fire('"UPS!', 'no hay mas productos disponibles', 'error')
        }
        return () => { }
    }, [stock])

    useEffect(() => {
        
        if (count === stock) {
            Swal.fire('es tu oportunidad!', 'este es el ultimo disponible', 'info')
            
        }
        
        return () => { }
    }, [count])
    
    

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count >= 1 && setCount(count - 1)
    }

    const reset = () =>{
        setCount(0)
    }
    
    
  return (
    <div>
        <div className='container mt-3'>
        <p className="card-text"><small className="text-muted">Stock disponible: {stock}</small></p>
            <button className='buttonCart btn btn-outline-primary'
                onClick={restar}
                disabled={count === 0} >-</button>

            <span className='count' >{count} </span>

            <button className='buttonCart btn btn-primary' 
                onClick={sumar}>+</button>
                
        </div>
        <div>
                <button 
                          className='onAdd btn btn-primary' 
                          onClick={()=>{onAdd(count);reset()}}
                          disabled={count === 0} >
                            Añadir al Carrito
                </button>
        </div>
    </div>
  )
}

export default ItemCount