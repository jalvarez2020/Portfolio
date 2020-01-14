require('dotenv').config()
const server = require(`./serverConfig`)
const db = require(`./dbRoutes`)

const port = process.env.PORT || 5000



server.get('/', (req , res) => {
    res.send(`Hello Wrold from Express!`)
})


server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})