import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { CartContex } from '../CartContex/CartContex'
import { MensajeCompraID } from './MensajeCompraID';
import Form from 'react-bootstrap/Form';
import { sendOrder } from './sendOrderFirebase';
import './Checkout.css';



function Checkout() {
    const {productosCarrito, getTotalPrice, clear,} = useContext(CartContex)
    const [user, setUser] = useState({name:'', phone:'', email:''});
    
    const [orderId, setOrderId] = useState(null)
    const [errorName, setErrorName] = useState({valido:null})
    const [errorPhone, setErrorPhone] = useState({valido:null})
    const [errorEmail, setErrorEmail] = useState({valido:null})
    const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}
    
    const onChangeInput = (e)=>{
        setUser({...user, [e.target.name]: e.target.value});  
    }

       const validacion =()=>{
       if(expresiones){
            if(expresiones.nombre.test(user.name)){
                setErrorName({...errorName, valido: true}); 
            } else {
                setErrorName({...errorName, valido: false});     
            }
            if(expresiones.telefono.test(user.phone)){
                setErrorPhone({...errorPhone, valido: true});  
            } else {
                setErrorPhone({...errorPhone, valido: false});
            }
            if(expresiones.correo.test(user.email)){
                setErrorEmail({...errorEmail, valido: true});
            } else {
                setErrorEmail({...errorEmail, valido: false});    
            }
        }  
    }

    const handlerSubmit =  (e)=>{
        e.preventDefault();
        
            const nombre = user.name;
            const phone = user.phone;
            const email = user.email;
           
        sendOrder(nombre,phone,email,productosCarrito, getTotalPrice, setOrderId, clear)  
    }
    

    if (orderId) {
        return <MensajeCompraID order={orderId}/>
    }
    
    if (productosCarrito.length === 0) {
        return <Navigate to="/"/>
    }
  return (
      <>
      
    <div className='container registry'>
        <div className=' form-container '>
                <div className="form-header">
                    <h2>Firebase Form User</h2>
                </div>
        
            <Form onSubmit={handlerSubmit} className='formulario needs-validation' >
                <Form.Group className='box'>
                    <Form.Label htmlFor="validationCustom" >Nombre</Form.Label>
                    <Form.Control 
                        onChange={onChangeInput}
                        // className="form-control "
                        type='text'
                        placeholder='Tu nombre'
                        name='name'
                        onKeyUp={validacion}
                        onBlur={validacion}
                        required
                    />
                    {errorName.valido == false && (<Form.Text className="text-danger">El nombre solo puede contener letras y espacios.</Form.Text>)} 
                    {errorName.valido == true &&(<Form.Text className="text-success">¡Campo válido!</Form.Text>)}
                </Form.Group>

                <Form.Group className='box' >
                    <Form.Label htmlFor="validationCustom" >Telefono de contacto</Form.Label>
                    <Form.Control 
                        onChange={onChangeInput}
                        // className="form-control "
                        type='text'
                        placeholder='Ej. 2615984000 (sin 0 al comienzo ni 15)'
                        name='phone'
                        onKeyUp={validacion}
                        onBlur={validacion}
                        required
                    />
                    {errorPhone.valido == false && (<Form.Text className="text-danger">El telefono solo puede contener numeros y el maximo son 14 dígitos.</Form.Text>)}
                {errorPhone.valido == true &&(<Form.Text className="text-success">¡Campo válido!</Form.Text>)}  
                </Form.Group>

                <Form.Group className='box'>
                    <Form.Label htmlFor="validationCustom">Email</Form.Label>
                    <Form.Control 
                            onChange={onChangeInput}
                            // className="form-control "
                            type='email'
                            placeholder='usuario@gmail.com'
                            name='email'
                            onKeyUp={validacion}
                            onBlur={validacion}
                            required
                        />
                    {errorEmail.valido == false && (<Form.Text className="text-danger">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</Form.Text>)}
                    {errorEmail.valido == true && <Form.Text className="text-success">¡Campo válido!</Form.Text>}   
                </Form.Group>

                <button 
                    className=" btn btn-primary "
                    type="submit"  
                    disabled={
                        !(errorName.valido==true  && 
                        errorPhone.valido==true  && 
                        errorEmail.valido==true)}
                >
                    Enviar
                </button>
            </Form>                          
        </div> 
    </div>
            <div className='container mb-2'>
                        <Link to='/'>
                        <button type='button'
                            className='btn btn-primary mt-4'>
                            Volver
                        </button>
                        </Link>
            </div>
    </>
    ) 
}
               

export default Checkout