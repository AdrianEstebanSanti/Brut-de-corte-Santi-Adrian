import { collection, Timestamp, addDoc} from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CartContex } from '../CartContex/CartContex'
import { db } from "../../utils/firebase";




function Checkout() {
    const {productosCarrito, getTotalPrice} = useContext(CartContex)
    const [user, setUser] = useState({name:'', phone:'', email:''});
    
    const campos = [
        {title: 'Nombre', inputName: 'name', placeholder:'Tu nombre', type:'text'},
        {title: 'Telefono', inputName: 'phone',placeholder:'teléfono',type:'text'},
        {title: 'Email', inputName: 'email',placeholder:'ejemplo@gmail.com',type:'emal'},
    ]

    
    const onChangeInput = (e)=>{
        
        setUser({...user, [e.target.name]: e.target.value})
       }
       console.log(user)

    const sendOrder = async(e)=>{
        e.preventDefault ();
        console.log('hola')

       const nombre = user.name;
        const phone = user.phone;
        const email = user.email;

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
        console.log('time', sendOrder)
        const ordersCollection = collection(db, 'orders');
        const docReference = await addDoc (ordersCollection, newOrder);
    }
      
  return (
      <div className='container registry'>

        <div className=' form-container '>
        <div class="form-header">
                <h2>Firebase Form User</h2>
            </div>
      
        <form onSubmit={sendOrder} className=' form  needs-validation' >
        { campos.map(campo=>(
            <div key={campo.title} className='form-box'>
            <label htmlFor="validationCustom" className="form-label">{campo.title}:</label>
            <input 
                    onChange={onChangeInput}
                    className="form-control "
                    type={campo.type}
                    placeholder={campo.placeholder}
                    name={campo.inputName}
                    required
                />
               <div className="valid-feedback">¡Campo válido!</div>
                <div className="invalid-feedback">Debe completar los datos.</div>
        </div>))}

        <button
         data-bs-toggle="modal" data-bs-target="#exampleModal"
         type="submit"  
         className="btn btn-primary "
         disabled={
             !(user.name  && user.email  && user.phone)}
         >
             Enviar
         </button>
        </form>

                    
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-secondary" id="exampleModalLabel">¡Gracias!</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-success">
                    Formulario enviado con éxito
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                    
                </div>
                </div>
            </div>
            </div>
                                   
    </div> 
    </div> ) 

}
               

export default Checkout