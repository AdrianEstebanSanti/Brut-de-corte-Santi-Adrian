import { collection, Timestamp, addDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { CartContex } from '../CartContex/CartContex'
import { db } from "../../utils/firebase";




function Checkout() {
    const {productosCarrito, getTotalPrice} = useContext(CartContex)
    

    

   
    const sendOrder = async(e)=>{
        e.preventDefault();
        const nombre = e.target[0].value;
        const phone = e.target[1].value;
        const email = e.target[2].value;

        const newOrder = {
            buyer:{
                nombre,
                phone,
                email
            },
            items: productosCarrito,
            total: getTotalPrice(),
            date: Timestamp.fromDate(new Date())
        }
        

        const ordersCollection = collection(db, 'orders');
        const docReference = await addDoc (ordersCollection, newOrder);
       
    }

          
    
    

  return (
    <div className='container mt-4 '>
        
        <form onSubmit={sendOrder} className='col-md-8 needs-validation'>
            <div>
            <label for="validationCustom01" class="form-label mt-2">Nombre:</label>
            <input 
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    name='name'
                    required
                />
               <div class="valid-feedback">¡Campo válido!</div>
                <div class="invalid-feedback">Debe completar los datos.</div>
            </div>
                
            
            <div>
            <label for="validationCustom02" class="form-label mt-2">Email:</label>
                <input
                        className="form-control my-2"
                        type='email'
                        placeholder="ejemplo@gmail.com"
                        name='email'
                        required
                    />
                    <div class="valid-feedback">¡Campo válido!</div>
                <div class="invalid-feedback">Debe completar los datos.</div>
            </div>  
                
            <div>
            <label for="validationCustom03" class="form-label mt-2">Teléfono:</label>
            <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    name='phone'
                    required
                />
                <div class="valid-feedback">¡Campo válido!</div>
                <div class="invalid-feedback">Debe completar los datos.</div>
            </div>     
                

                <button type="submit"  className="btn btn-primary mt-4">
                    Enviar
                </button>
            </form>
    </div>
  )
}

export default Checkout