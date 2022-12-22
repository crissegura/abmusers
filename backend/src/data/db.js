import mysql2 from 'mysql2/promise';

const conexion = mysql2.createConnection({
   
})

export const getConexion = ( ) => {
    return conexion
}