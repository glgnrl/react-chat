    // server.js

    const express = require('express')
    const bodyParser = require('body-parser')
    const cors = require('cors')
    const Chatkit = require('@pusher/chatkit-server')
    const app = express()

    // init chatkit
    const chatkit = new Chatkit.default({
      instanceLocator: 'v1:us1:871bdf69-d33e-4113-8c42-37e137ddcf3d',
      key: '9e0991d5-8e79-4c6e-a8c1-83431a1ea9d2:vaILd6t8+Tz1WsvLflpGycf4OZxdv5I+jTx5+ACIKEk=',
    })
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(cors())

    // create users
    app.post('/users', (req, res) => {
      const { username } = req.body
      console.log(username);
      chatkit
        .createUser({ 
        id: username, 
        name: username 
         })
        .then(() => res.sendStatus(201))
        .catch(error => {
          if (error.error_type === 'services/chatkit/user_already_exists') {
            res.sendStatus(200)
          } else {
            res.status(error.status).json(error)
          }
        })
    })
    app.get('/', (req, res) => {
        res.send("hello World")
    } )
    const PORT = 3001
    app.listen(PORT, err => {
      if (err) {
        console.error(err)
      } else {
        console.log(`Running on port ${PORT}`)
      }
    })