import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Ingresar = ( ) => {

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [password, setPassword] = useState([])

    const usuario = 'cristian'
    const contraseña = '1234'

    const getUser = (e) => {
        setUser(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const entrar =()=>{
        if(usuario===user && contraseña===password){
            navigate("/inicio");
        }else{
            Swal.fire({
                timer:1500,
                icon:'error',
                title:'¡Datos incorrectos!',
                showConfirmButton:false
            })
        }
    }

    return (
        <>
        <Navbar className='navbar' expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <img src="https://conexion-hr.com/wp-content/uploads/2022/01/conexion-hr-w-bb-300x47.png" alt="" />
                </Navbar.Brand>
            </Container>
        </Navbar>
        <div class="formInicioSesion" >
            <h2 style={{color:'#221969'}}>Iniciar sesión</h2>
            <label style={{color:'#221969', fontSize:'20px'}}>Username</label>
            <input type="text" onChange={getUser} className='form-control my-2' />
            <label style={{color:'#221969', fontSize:'20px'}}>Password</label>
            <input type="password" onChange={getPassword} className='form-control' />
            <Button className="m-2" onClick={entrar} style={{fontWeight:'bold',width:'100px',backgroundColor:'#221969'}}>
                Entrar
            </Button>
        </div>
        </>
    )

}

export default Ingresar;