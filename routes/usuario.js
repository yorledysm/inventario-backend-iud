const { Router } = require('express')
const {createUsuario, getUsuarios, updateUsuarioByID} =
 require('../controllers/usuario')

const router = Router()

// crear
router.post('/',createUsuario)

// consultar todos
router.get('/',getUsuarios)


router.put('/',updateUsuarioByID)    

module.exports = router;