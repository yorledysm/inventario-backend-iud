const Estado = require('../models/estado')
const { request, response} = require('express')

// crear
const createEstado= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const estadoDB = await Estado.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(estadoDB){
            return res.status(400).json({msg: 'El nombre ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const estado = new Estado(data)
        console.log(estado)
        await estado.save()
        return res.status(201).json(estado)
    }catch(e){
        return res.status(500).json({
            msg: 'Ohh error general ' + e
        })
    }
}

//listar todos
const getEstados = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const estadosDB = await Estado.find({estado})//select * from estados where estado=?
            return res.json(estadosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}




const updateEstadoByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const estado = await Estado.findByIdAndUpdate(id, data, {new: true})
        return res.json(estado)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

// actualizar por ID



module.exports = {createEstado, 
    getEstados, 
    updateEstadoByID}