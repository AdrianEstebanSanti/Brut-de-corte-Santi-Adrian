import { collection, Timestamp, addDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { CartContex } from '../CartContex/CartContex'
import { db } from "../../utils/firebase";
import { useForm } from "react-hook-form";



function Checkout() {
    const {productosCarrito, getTotalPrice} = useContext(CartContex)
    const { register, handleSubmit, formState: { errors } } = useForm();

   
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
        
        <form onSubmit={sendOrder} className='col-md-8'>
            
            <input 
                    className="form-control my-2"
                    type='text'
                    placeholder="Tu nombre"
                    name='name'
                    {...register("nombre", { required: true, maxLength: 20, message: "Necesitas este campo" })}
                />
               {errors.nombre && <span>necesitas ese campo</span>}
            
                
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="ejemplo@gmail.com"
                    name='email'
                    {...register("email", {
                        required: {
                          value: true,
                          message: "Necesitas este campo"
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto"
                        }
                    })}
                />
                 {errors.email && <span>{errors.email.message}</span>}
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Tu teléfono"
                    name='phone'

                />

                <button type="submit" className="btn btn-primary mt-4">
                    Enviar
                </button>
            </form>
    </div>
  )
}

export default Checkout