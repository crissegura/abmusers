import { getConexion } from "../data/db.js";

export const getUsers = async ( req, res ) => {
    try {
        const conexion = await getConexion()
        const result = await conexion.query('SELECT * FROM users')
        res.json(result)
    } catch (error) {
        console.log('ERROR:',error)
    }
}

export const getUSer = async ( req, res ) => {
    try {
        const {id} = req.params
        let conexion = await getConexion()
        let result =  await conexion.query('SELECT * FROM users WHERE id=?',id)
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}

export const deleteUSer = async ( req, res ) => {
    try {
        const {id} = req.params
        let conexion = await getConexion()
        let result =  await conexion.query('DELETE FROM users WHERE id=?',id)
        res.json('Eliminado correctamente.')
    } catch (error) {
        console.log(error)
    }
}

export const addUSer = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let {name,email,password,role} = req.body
        let user = {name,email,password,role}
        let result =  await conexion.query('INSERT INTO users SET ?',user)
        res.json('Usuario agregado correctamente.')
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async ( req, res) => {
    try {
        let conexion = await getConexion()
        let {id} = req.params
        let {name,email,password,role} = req.body
        let user = {name,email,password,role}
        let result = await conexion.query('UPDATE users SET ? WHERE id = ?',[user,id])
        res.json('Usuario editado correctamente.')
    } catch (error) {
        console.log(error)
    }
}