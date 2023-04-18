const { Router } = require('express')
const { createInventario, getInventarios, updateInventarioByID} =
 require('../controllers/inventario')

const router = Router()

// crear
router.post('/', createInventario)

// consultar todos
router.get('/', getInventarios)

router.put('/', updateInventarioByID)



module.exports=router;