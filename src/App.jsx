import logo from './logo.svg';
import './App.css';

import NavBar from './components/navbar/NavBar';

import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    
      <div className='App'>
        <NavBar/>
        <div>
        
          <ItemListContainer/>
          <ItemDetailContainer/>
          
            
           
        </div>
        
      </div>
      
    
  );
}

export default App;
