// const {v4: uid} = require("uuid")
const userSchema = require('../schemas/userSchema')
const apartmentSchema = require('../schemas/apartmentSchema')


module.exports = {
    registerUser: async (req, res) => {
        const {email, pass1, admin} = req.body //duomenys is tinklapio

        console.log(req.body)

        const newUser = new userSchema();

        newUser.email = email;
        newUser.isAdmin = admin;
        newUser.passEncrypted = pass1;

        await newUser.save(); //nusiuncia user i mongodb

        res.send({inform: 'userRegister, ok'}) //siuncia atsakyma tinklapiui
    },

    loginUser: async (req, res) => {
        const {email, pass1} = req.body //duomenys is tinklapio


        const user = await userSchema.findOne({email: email});

        res.send({inform: 'userLogged, ok', userId: user._id, admin: user.isAdmin}) //siuncia atsakyma tinklapiui
    },

    uploadApartment: async (req, res) => {
        const {photos, description, city, price, owner} = req.body //duomenys is tinklapio

        console.log(req.body)

        const newApartment = new apartmentSchema();

        newApartment.photos = photos;
        newApartment.description = description;
        newApartment.city = city;
        newApartment.price = price;
        newApartment.owner = owner;

        await newApartment.save();

        res.send({inform: 'apartment uploaded, ok', apartment: newApartment}) //siuncia atsakyma tinklapiui
    },
}