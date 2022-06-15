const express = require('express');
require('dotenv').config()
const cors = require('cors')
const  {router} = require('./routes/routes.js')

const app = express()
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port = process.env.PORT || 3000

app.use('/', router)

app.listen(port, ()=>console.log(`server running: ${port}`))

