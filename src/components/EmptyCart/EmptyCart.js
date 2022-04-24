import react from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.css';



const EmptyCart = ()=>{
    return(
        <div className='container  '>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='empty'></div>
                <div className='text-center mt-2'>
                <h3>Tu carrito se encuentra vacio</h3>
                </div>

                <div className='d-grid gap-2 d-md-flex justify-content-md-center mt-4 mb-4'>
                <Link to='/'>
                        <button type='button'
                            className='btn btn-primary mt-4'>
                            Volver
                        </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart