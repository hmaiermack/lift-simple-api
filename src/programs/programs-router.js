const express = require('express')
const ProgramsService = require('./programs-service')


const programsRouter = express.Router()

programsRouter
    .route('/')


programsRouter
    .route('/:auth_id')

    .get((req, res, next) => {
        ProgramsService.getData(
            req.app.get('db'),
            req.params.auth_id
        )
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    error: { message: `User doesn't exist`}
                })
            }
            res.json(user)
        })
        .catch(next)
    })

    .post((req, res, next) => {
        ProgramsService.createUser(
            req.app.get('db'),
            req.params.auth_id
        )
        .then(user =>{
            return res.status(201)
            .json(user)}
        )
        .catch(next)
    })

    .put((req, res, next) => {
        console.log(req.body.workouts)
        ProgramsService.updateData(
            req.app.get('db'),
            req.params.auth_id,
            req.body
        )
        .then(data => {
            return res.status(201)
            .json(data)
        })
        .catch(next)
    })


module.exports = programsRouter