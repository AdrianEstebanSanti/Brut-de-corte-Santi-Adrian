import logo from './logo.svg';
import './App.css';

import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    
      <div className='App'>
        <NavBar/>
        <ItemListContainer item1='Malbec' item2='Cabernet Sauvignon' item3='Chardonnay' item4='Merlot'/>
      </div>
      
    
  );
}

export default App;
