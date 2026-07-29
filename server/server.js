require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const resumeRouter = require('./routes/resumeRoutes')

app.use(express.json())
app.use(cors())
app.use('/', resumeRouter)

app.listen(process.env.PORT, ()=> {
    console.log('[server connected]')
})