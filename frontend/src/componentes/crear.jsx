import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Select from 'react-select';

const Crear = ( ) => {

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [role, setRole] = useState([])
    

    const getName = (e) => {
        setName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const getRole = (value) => {
        setRole(value)
    }

    const opcionesRol = [
        {value:'admin',label:'admin'},
        {value:'bo',label:'bo'},
        {value:'tr',label:'tr'},
        {value:'red',label:'red'},
        {value:'inhouse',label:'inhouse'},
    ]

    const subirUsuario = () => {
        axios.post('http://localhost:5500/users',{
            name: name,
            email: email,
            password: password,
            role: role.value,
         }) 
        Swal.fire({
            icon: 'success',
            text: 'Usuario creado correctamente!',
            timer: 1500,
            showConfirmButton:false
          })
    }

    console.log(role.value)

    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column',alignItems:'center'}}>
            <h1>Crear nuevo usuario</h1>
            <Form className="m-3 w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={getName} placeholder="Ingrese el nombre o email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={getEmail} placeholder="Ingrese el email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={getPassword} placeholder="Password" />
                </Form.Group>
                <Form.Group className="m-3">
                <Form.Label>Role</Form.Label>
                <Select
                    options={opcionesRol}
                    onChange={getRole}
                    value={role}
                />
                </Form.Group>
                <Link to='/'>
                    <Button variant="primary" type="submit" onClick={subirUsuario}>
                        Guardar usuario
                    </Button>
                </Link>
                
            </Form>
        
        </div>
    )

}

export default Crear;