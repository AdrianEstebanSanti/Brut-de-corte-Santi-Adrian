import { collection, Timestamp, addDoc, writeBatch, query, where, documentId, getDocs} from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { CartContex } from '../CartContex/CartContex'
import { db } from "../../utils/firebase";
import { MensajeCompraID } from './MensajeCompraID';
import * as yup from 'yup';



function Checkout() {
    const {productosCarrito, getTotalPrice, clear} = useContext(CartContex)
    const [user, setUser] = useState({name:'', phone:'', email:''});
    
    const campos = [
        {title: 'Nombre', inputName: 'name', placeholder:'Tu nombre', type:'text'},
        {title: 'Telefono', inputName: 'phone',placeholder:'teléfono',type:'text'},
        {title: 'Email', inputName: 'email',placeholder:'ejemplo@gmail.com',type:'emal'},
    ]

    const [orderId, setOrderId] = useState(null)

    
    const onChangeInput = (e)=>{
        
        setUser({...user, [e.target.name]: e.target.value})
       }
       console.log(user)


    const sendOrder = async(e)=>{
        e.preventDefault ();
        

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
        const batch = writeBatch(db)
        const ordersCollection = collection(db, 'orders');
        const productRef = collection(db, 'items')

        const q = query(productRef, where(documentId(), 'in', productosCarrito.map((el) => el.id)))
        const productos = await getDocs (q);
        const outOfStock = [];
        console.log('query', sendOrder)

        productos.docs.forEach((doc)=>{
            const item = productosCarrito.find((el)=> el.id === doc.id)
            if (doc.data().stock >= item.quantity){
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.quantity

                })
            }else{
                outOfStock.push(item)
            }
        })

        if (outOfStock.length===0) {
            addDoc(ordersCollection, newOrder)
            .then((doc)=>{
                batch.commit()
                setOrderId(doc.id)
                clear()
            })
        }   else{
            alert ('items sin stock')
        }
    }
    if (orderId) {
        return <MensajeCompraID order={orderId}/>
    }
    
    if (productosCarrito.length === 0) {
        return <Navigate to="/"/>
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
        //  data-bs-toggle="modal" data-bs-target="#exampleModal"
         type="submit"  
         className="btn btn-primary "
         disabled={
             !(user.name  && user.email  && user.phone)}
         >
             Enviar
         </button>
        </form>

                    
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            </div> */}
                                   
    </div> 
    </div> ) 

}
               

export default Checkout