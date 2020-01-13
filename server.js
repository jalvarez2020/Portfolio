require('dotenv').config();
const express = require('express')
const server = express()
const helmet = require('helmet')
const cors = require('cors')

const port = process.env.PORT || 5000

//server middleware
server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req , res) => {
    res.send(`Hello Wrold from Express!`)
})


server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})