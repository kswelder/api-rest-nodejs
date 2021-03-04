const route = require('express').Router()
const database = require('../database')

route.get('/user',async (req, res) => {
    const { username } = req.body

    let response = ""

    await database.select(["username","password","email"]).where({username}).table('user').then(data => {
        response = data[0]
    }).catch(err => {
        console.log(err)
    })

    res.json({message: response})
})

route.post('/user',async (req, res) => {
    const {username,password,email} = req.body

    await database('user').insert({username,password,email}).then().catch( err => {
        console.log(err)
    })

    res.json({username,password,email})
})

route.put('/user',async (req, res) => {
    const { username,newUsername,password } = req.body

    if(! newUsername) {
        newUsername = username
    }

    await database.update({username,password}).where({newUsername}).table('user').then(data => {
        console.log('Updated sucessfull')
    }).catch(err => {
        console.log(err)
    })

    res.json({message:'OK'})
})

route.delete('/user',async (req, res) => {
    const { username } = req.body

    await database.where({username}).del().table('user').then(data => {
        console.log('Delete sucessfull')
    }).catch(err => {
        console.log(err)
    })

    res.json({message:'OK'})
})

module.exports = route
