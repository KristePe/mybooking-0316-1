const validator = require("email-validator");
const userSchema = require('../schemas/userSchema')

const sendError = (res, msg) => {
    res.send({success: false, message: msg})
}

module.exports = {
    registerValidate: async (req, res, next) => {
        const {email, pass1, pass2} = req.body

        if (pass1.length > 20 || pass1.length < 4) return sendError(res, "Bad password")
        if (pass1 !== pass2) return sendError(res, "Password does not match")
        if (!validator.validate(email)) return sendError(res,"Email is not valid")
        next()
    },


    loginValidate: async (req, res, next) => {
        const {email, pass1} = req.body
        const user = await userSchema.findOne({email: email}); //kreipiasi i db ir tikrina, ar user yra

        if (!user) return sendError(res, "User does not exist")
        if (user.passEncrypted !== pass1) return sendError(res,"Password does not match")

        next()
    },

    uploadValidate: async (req, res, next) => {
        const {photos, description, city, price, owner} = req.body

        if (photos === '' || description === '' || city === '' || price === '')
        return sendError(res,"Fill all fields")

        next()
    },

}