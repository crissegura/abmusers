import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Select from "react-select";
import Header from "./header";


const Editar = () =>{

    const {id} = useParams()

    const [user, setUser ] = useState([])

    const getUsers = async () => {
        const res = await axios.get(`http://localhost:5500/users/${id}`)
        setUser(res.data[0][0])
    }

    useEffect (() => {
        getUsers()
    }, []);

    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [role, setRole] = useState([])

    const getName = (e) =>{
        setName(e.target.value)
    }
    const getEmail = (e) =>{
        setEmail(e.target.value)
    }
    const getPassword = (e) =>{
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

    const update =  () => {
            axios.put(`http://localhost:5500/users/${id}`,{
            name: name,
            email: email,
            password: password,
            role: role.value,
         }) 
         Swal.fire({
            icon: 'success',
            text: 'Actualizado correctamente!',
            timer: 1500,
            showConfirmButton:false
          })
    }
    

    return(
        <>
        <Header />
        <div  style={{display:'flex', justifyContent:'center'}}>
            <Form className="m-3 w-50">
                <Form.Group className="mb-3" controlId="formBasic">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={getName} placeholder={user.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" onChange={getEmail} placeholder={user.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={getPassword} placeholder={user.password} />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Role</Form.Label>
                    <Select
                        options={opcionesRol}
                        onChange={getRole}
                        value={role}
                        placeholder={user.role}
                    />
                </Form.Group>
                <Link to='/'>
                    <Button variant="primary" type="submit" onClick={update}>
                        Guardar cambios
                    </Button>
                </Link>
            </Form>
        </div >
    </>
    )
}


export default Editar;