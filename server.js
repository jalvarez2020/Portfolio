require('dotenv').config()
const server = require(`./serverConfig`)
const db = require(`./dbRoutes`)


const port =  5000


server.get('/', (req , res) => {
    db.getMessages().then( messages => {
        res.status(200).json(messages)
    })
    .catch(error => { message: error })
})


server.post('/', (req, res) => {
    const message = req.params
    
    db.newMessage(message).then( reply => {
        console.log(message)
        res.status(200).json({ message: "Message Sent"})
    })
    .catch(error => { message: error})
})

server.delete('/', (req, res) => {
    const id = req.body.Id
    db.deleteMessage(id).then(reply => {
        res.status(200).json('Message deleted!')
    })
    .catch( error => { message: error })
})



server.listen(port, () => {
    console.log(`Server listening on ${port}`)
})