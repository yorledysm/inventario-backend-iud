const app= require('./app')
//const mongoConn= require('./databases/configuration')
const {mongoConn} = require('./databases/configuration')
const dotenv = require('dotenv').config()

app.get('/prueba', (req, res)=>{   // para conectar  postman
 res.json(  
 {
    'saludo': 'Hola estoy viendo el curso de Web II'
 } // la respuesta me la en formato json
 )
 })         // que sea un metodo de consulta 
   console.log(mongoConn)
   const conn = mongoConn()
   app.listen(3000, function(){
    console.log('Arranco el sevidor  con el puerto: 3000')
})









