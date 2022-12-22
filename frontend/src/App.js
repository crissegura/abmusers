import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/inicio';
import Header from './componentes/header';
import Crear from './componentes/crear';
import Editar from './componentes/editar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path='/' element={<Inicio/>} />
          <Route  path='/crearusuario' element={<Crear/>} />
          <Route  path='/editarusuario/:id' element={<Editar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
