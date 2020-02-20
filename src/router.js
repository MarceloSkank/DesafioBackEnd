const router = require('express').Router()

const UserController = require('./control/user')

router.get('/tools' , (req,res) => {

    const objQuery  = {}
    const key = Object.keys(req.query)[0]
    objQuery[key] = req.query[key]

    UserController.find(objQuery,res)
})


router.post("/tools", (req,res) => UserController.store(req.body,res))
router.delete("/tools/:id", (req,res) => UserController.delete(req.params, res))

module.exports = router
