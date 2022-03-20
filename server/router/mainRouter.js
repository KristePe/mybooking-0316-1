const express = require('express')
const router = express.Router()
const controller = require("../controllers/mainController")

const {registerValidate, loginValidate, uploadValidate} = require("../middle/validator")


router.post('/register', registerValidate, controller.registerUser)
router.post('/login', loginValidate, controller.loginUser)
router.post('/upload', uploadValidate, controller.uploadApartment)

module.exports = router