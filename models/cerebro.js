var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    flavor:{
        type: String,
        minlength: [4,"El nombre es muy corto bro, echale mas ganas"],
        maxlength: [20,"Ahora te pasaste bro, es demaciado largo"],
        required:[true,"Ingresa una sabor"]
    },
    descripcion:{
        type: String,
    
    },
    iq:{
        type: Number,
        maxlength:[3,"No puedes tener mas de 3 digitos que iq carnal"],
        required:[true,"Ingresa una iq"]
    },
    picture:{
        type: String,
        required:[true,"Ingresa una imagen"]
    }
});

var Cerebro = mongoose.model("Cerebro", modelSchema);
module.exports = Cerebro;