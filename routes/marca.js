const { Router } = require('express')
const { createMarca, getMarcas, updateMarcaByID} =
 require('../controllers/marca')

const router = Router()

// crear
router.post('/', createMarca)

// consultar todos
router.get('/', getMarcas)

router.put('/', updateMarcaByID)

module.exports = router;