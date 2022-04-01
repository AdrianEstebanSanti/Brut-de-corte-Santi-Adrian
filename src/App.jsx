
import './App.css';


import NavBar from './components/navbar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartContexProvider } from './components/CartContex/CartContex';
import  Cart  from './components/Cart/Cart';


function App() {
  
  return (
    <CartContexProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
            <Route path='/detalle/:itemId' element= {<ItemDetailContainer/>}/>
            <Route path='/compra' element={<Cart/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>
              
        </Routes> 
      </BrowserRouter>
    </CartContexProvider>
    
  );
}

export default App;
