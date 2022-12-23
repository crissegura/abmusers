import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BsPencil,BsArchiveFill,BsFillCloudPlusFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './header';

const Inicio = ( ) => {

    const [ users, setUsers ] = useState([])

    const getUsers = async () => {
        const res = await axios.get('http://localhost:5500/users')
        setUsers(res.data)

    }

    useEffect (() => {
        getUsers()
    }, []);

    const [texto, setTexto] = useState([])

    const getTexto = (e) =>{
        setTexto(e.target.value)
        console.log(e.target.value)
    }

    const usuarios = users[0]

    const buscar=usuarios && usuarios.filter(user=>user.email.toLowerCase().includes(texto.toString().toLocaleLowerCase()))

    const deleteUser =  ( id, name ) => {
        Swal.fire({
            title: `¿Eliminar definitivamente el usuario ${name}?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Eliminar',
            denyButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
                const res = axios.delete(`http://localhost:5500/users/${id}`)
                Swal.fire({
                    timer:1500,
                    title:'Eliminado correctamente!',
                    showConfirmButton:false
                })
                getUsers()
            }
          })
    }

    const [usuario, setUsuario] = useState([])
    const [password, setPassword] = useState([])

    const getUsuario = (e) =>{
        setUsuario(e.target.value)
    }
    const getPassword = (e) =>{
        setPassword(e.target.value)
    }

    
    
    return(
        <>  
            <Header />
            <div style={{margin:'10px',display:'flex', justifyContent:'space-evenly'}}>
               <Link to='/crearusuario'>
                <Button variant='success'>
                    <BsFillCloudPlusFill /> Nuevo 
                </Button>
               </Link>
                <Form className="d-flex">
                <Form.Label style={{fontSize:'20px', margin:'5px'}}>Buscador </Form.Label>
                    <Form.Control
                    type="text"
                    value={texto}
                    onChange={getTexto}
                    placeholder="email@email.com"
                    className="me-2"
                    aria-label="Search"
                    />
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>role</th>
                    <th>actions</th>
                    </tr>
                </thead>
                {
                    buscar?.map((x)=>{
                        return <tbody>
                                    <tr>
                                    <td> {x.name} </td>
                                    <td> {x.email} </td>
                                    <td> {x.password} </td>
                                    <td> {x.role} </td>
                                    <td> 
                                        <Link to={`/editarusuario/${x.id}`}>
                                            <Button variant='secondary' className='mx-1'>
                                                <BsPencil  />
                                            </Button>
                                        </Link>
                                        <Button variant='danger' className='mx-1' onClick={()=>deleteUser(x.id,x.name)}>
                                            <BsArchiveFill />
                                        </Button>
                                    </td>
                                    </tr>
                                </tbody>
                    })
                }
            </Table>
        </>
    )
}

export default Inicio;