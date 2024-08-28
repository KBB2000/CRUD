const studentModal = require("../modal/studentSchema")

const editController = async (req, res) => {
    try {
        const record = await studentModal.findById({"_id" : req.params.id})
        if (record) {
            res.render("edit", {record})
        }
        res.render("edit")
    } catch (error) {
        
    }
}

const updateController = async (req, res) => {
    try {
        const updateRecords = await studentModal.findByIdAndUpdate(req.params.id, req.body)
    if (updateRecords) {
        res.redirect("/read")
    }else{
        res.redirect("read")
    }
    } catch (error) {
        console.log(error.message);
        
    }
}

const deleteController = async (req, res) => {
    try {
        const deleteRo = await studentModal.findByIdAndDelete(req.params.id)
        if (deleteRo) {
            res.redirect("/read")
        }else{
            res.redirect("/")
        }
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {editController, updateController, deleteController}