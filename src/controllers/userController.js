const route = require('express').Router()
const database = require('../database')

route.get('/user',async (req, res) => {
    const { username } = req.body

    let response = ""

    await database.select(["username","password"]).where({username}).table('user').then(data => {
        response = data[0]
    }).catch(err => {
        console.log(err)
    })

    res.json({message: response})
})

route.post('/user', (req, res) => {
    const {username,password} = req.body

    database('user').insert({username,password}).then().catch( err => {
        console.log(err)
    })

    res.json({username,password})
})

route.put('/user', (req, res) => {})

route.delete('/user', (req, res) => {})

module.exports = route
