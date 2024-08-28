const  mongoose  = require("mongoose")

const studentSchema = new mongoose.Schema({
    "name" : {
        type : String,
        require : true
    },
    "email" : {
        type : String,
        require : true
    },
    "city" : {
        type : String,
        require : true
    },
    "contact" : {
        type : String,
        require : true
    },
})
const studentModal = new mongoose.model("crud", studentSchema)

module.exports = studentModal;