import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonX } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="/inicio">
        <img src="https://conexion-hr.com/wp-content/uploads/2022/01/conexion-hr-w-bb-300x47.png" alt="" />
        </Navbar.Brand>
        <Link to="/">
          <button className="cerrarsesion">
            <BsPersonX/> Cerrar sesión
          </button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;