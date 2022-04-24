import { collection, Timestamp, addDoc, writeBatch, query, where, documentId, getDocs} from 'firebase/firestore'
import { db } from "../../utils/firebase";
import Swal from 'sweetalert2'


export const sendOrder = async(nombre, phone, email, productosCarrito, getTotalPrice, setOrderId, clear)=>{
    
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

    const q = query(productRef, where(documentId(), 'in', productosCarrito.map((item) => item.item.id)))
    const productos = await getDocs (q);
    const outOfStock = [];
    

    productos.docs.forEach((doc)=>{
        const item = productosCarrito.find((item)=> item.item.id === doc.id)
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
        Swal.fire('LO SENTIMOS', 'Producto sin stock', 'danger')
    }
}