import express, { json } from 'express';
import cors from 'cors';
import route from './rutas/rutas.js';


const app = express()

app.use(cors())
app.use(json())
app.use(route)

app.listen(5500,()=>{
    console.log(
        'Servidor en puerto http://localhost:5500'
    )
})