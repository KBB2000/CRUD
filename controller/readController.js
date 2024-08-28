const studentSchema = require("../modal/studentSchema")
const readController = async (req, res) => {
    try {
        let records = await studentSchema.find({})
           if(records){
            res.render("read", {"records" : records})
           }else{
            res.send("read")
           }

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = readController