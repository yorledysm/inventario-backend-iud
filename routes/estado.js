const { Router } = require('express')
const {createEstado, getEstados, updateEstadoByID} = require('../controllers/estado')

const router = Router()

// crear
router.post('/', createEstado)

// consultar todos
router.get('/', getEstados)

router.put('/', updateEstadoByID)

module.exports= router;
