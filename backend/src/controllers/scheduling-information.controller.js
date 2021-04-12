const SchedulingInformationModel = require("../models/scheduling-information.model");

class SchedulingInformationController {
    async create(req, res) {
        const data = req.body;
        
        const newSchedulingInformation = await SchedulingInformationModel.create(data);

        res.send({ schedulingInformation: newSchedulingInformation});
    }

    async get(req, res) {
        const schedulingId = req.params.id;

        const findedSchedulingInformation = await SchedulingInformationModel.findById(schedulingId);

        console.log(findedSchedulingInformation)
    }
}

module.exports = new SchedulingInformationController();