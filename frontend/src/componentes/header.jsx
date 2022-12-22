import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img src="https://conexion-hr.com/wp-content/uploads/2022/01/conexion-hr-w-bb-300x47.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;