import React from 'react'



const ItemCount = ({stock, count, setCount}) => {
    

    const sumar = () => {
        count < stock && setCount(count + 1)
    }

    const restar = () => {
        count >= 1 && setCount(count - 1)
    }
    
    
  return (
    <div>
        <div className='container mt-3'>
            <button className='buttonCart btn btn-outline-primary'
                onClick={restar}
                disabled={count===0} >-</button>
            <span className='count' >{count} </span>
            <button className='buttonCart btn btn-primary' 
                onClick={sumar}>+</button>
        </div>
    </div>
  )
}

export default ItemCount