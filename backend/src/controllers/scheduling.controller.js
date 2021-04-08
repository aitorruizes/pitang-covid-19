const SchedulingModel = require("../models/scheduling.model");

class SchedulingController {

    async create(req, res) {
        const data = req.body;

        const newScheduling = await SchedulingModel.create(data);

        res.send({ scheduling: newScheduling });
    }

    async getAll(req, res) {
        const schedulings = await SchedulingModel.find().sort({ schedulingDate: "asc", schedulingHour: "asc"}).exec();

        if(schedulings.length == 0) {
            res.send({ message: "There is no schedulings registered." });
        }

        res.send({ schedulings });
    }

}

module.exports = new SchedulingController();