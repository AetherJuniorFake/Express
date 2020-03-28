var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [3,"El nombre es muy corto bro, echale mas ganas"],
        maxlength: [12,"Ahora te pasaste bro, es demaciado largo"],
        required: [true,"Nececitas un Nombre"]
    },
    email: {
        type: String,
        required: [true,"Nececitas un correo carnal, si no pos como?"]
    },
    type: {
        type:String,
        enum: ["Estudihambre","Maistro"],
        required: [true,"Nececitas ingresar un tipo de zombie"]
    }
});

var Zombie = mongoose.model("Zombie", modelSchema);
module.exports = Zombie;