import { Router } from "express";
import { getUsers,deleteUSer,addUSer,updateUser,getUSer } from "../controles/contols.js";

const route = Router()

route.get('/',(req,res)=>{
    res.send('Servidor corriendo...')
})

route.get('/users',getUsers)
route.get('/users/:id',getUSer)
route.put('/users/:id',updateUser)
route.delete('/users/:id',deleteUSer)
route.post('/users',addUSer)


export default route;