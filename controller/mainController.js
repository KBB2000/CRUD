const studentSchema = require("../modal/studentSchema")

const mainController = (req, res) => {
    res.render("index")
};
const createController = async (req, res) => {
    res.render("index")
    console.log(req.body);
    const {name, email, contact, city} = req.body;
    const record = await studentSchema({
        name,
        email, 
        city,
        contact
    })
    if(record){
        await record.save()
        console.log("Data save successfully...");
    }else{
        console.log("No0t send");
        
    }
};

module.exports = {
    mainController, createController
};
