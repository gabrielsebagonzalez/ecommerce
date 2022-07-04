import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting="Lista de Productos" />
    </div>

  );
}
export default App;








