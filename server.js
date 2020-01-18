require('dotenv').config()
const server = require(`./serverConfig`)
const db = require(`./dbRoutes`)

const port = process.env.PORT || 5000



server.get('/', (req , res) => {
    db.getMessages().then(messages => {
        res.status(200).json(messages)
    })
    .catch(error => {message: error})
})

server.post('/', (req, res) => {
    let message = req.body
    db.newMessage(message).then( reply => {
        res.status(200).send('Your message has been sent.')
    })
})




server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})