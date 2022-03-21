import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <BrowserRouter>

      
      <NavBar/>
    
      <Routes>
        
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
          <Route path='/detalle/:itemId' element= {<ItemDetailContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
            
      </Routes> 
       
    </BrowserRouter>
    
  );
}

export default App;
