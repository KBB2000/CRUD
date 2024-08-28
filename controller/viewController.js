const studentModal = require("../modal/studentSchema");

const viewController = async (req, res) => {
    try {
        const record = await studentModal.findById(req.params.id);
        if (record) {
            res.render("view", { record });
        } else {
            res.send('Record not found');
        }
    } catch (error) {
        res.send('Server error');
    }
};

module.exports =  viewController ;
