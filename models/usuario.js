var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [6, "El nombre es muy corto: min 6 caracteres"],
        maxlength: [12, "El sabor es muy largo: max 12 caracteres"]
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: [true, "El correo electrónico es obligatorio"]
    },
    porfilePhoto:
    {
        type: String
    }
})

var usuario = mongoose.model("usuarios", modelSchema)
module.exports = usuario;