import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/inicio';
import Header from './componentes/header';
import Crear from './componentes/crear';
import Editar from './componentes/editar';
import Ingresar from './componentes/ingresar'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route  path='/' element={<Ingresar/>} />
          <Route  path='/inicio' element={<Inicio/>} />
          <Route  path='/crearusuario' element={<Crear/>} />
          <Route  path='/editarusuario/:id' element={<Editar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
