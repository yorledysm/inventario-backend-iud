const app= require('./app')
//const mongoConn= require('./databases/configuration')
const {mongoConn} = require('./databases/configuration')
const dotenv = require('dotenv').config()

app.set('port', process.env.PORT || 3000)//middleware

const conn = mongoConn()

   app.listen(app.set('port'),() =>{
    console.log(`Arranco  por el puerto: ${app.get('port')}`)

   })


