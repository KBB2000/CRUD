const mongoos = require("mongoose")

const connestDb = async () => {
    const connect = await mongoos.connect("mongodb://localhost:27017/crud_opr")
    if(connect){
        console.log("Connection Succesfullly.1..");
    }else{
        console.log("Not connected....");
    }
}
module.exports = connestDb;