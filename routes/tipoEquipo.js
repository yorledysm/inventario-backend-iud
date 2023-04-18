const { Router } = require('express')
const {createTipoEquipo, getTipoEquipos, updateTipoEquipoByID} = require('../controllers/tipoEquipo')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// consultar todos
router.get('/', getTipoEquipos)

 // actualizar

 router.put('/:id',updateTipoEquipoByID)
 // elimanar 
 

 

module.exports = router;