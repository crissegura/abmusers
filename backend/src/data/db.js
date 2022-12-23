import mysql2 from 'mysql2/promise';

const conexion = mysql2.createConnection({
    host:'127.0.0.1',
    port:3309,
    database:'conexion',
    user:'root',
    password:'Oracle50'
})

export const getConexion = ( ) => {
    return conexion
}