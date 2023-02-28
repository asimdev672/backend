const express=require('express')
const isoRout=require('./routes/isoRout')
const cors = require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.use('/uploads',express.static('uploads'))

// *************** MiddelWare*************************
app.use('/api/v1/iso', isoRout);

module.exports=app