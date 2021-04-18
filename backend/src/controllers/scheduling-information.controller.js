const SchedulingInformationModel = require("../models/scheduling-information.model");
const schedulingInformationRouter = require("../routes/scheduling-information.routes");

class SchedulingInformationController {
   async create(req, res) {
      const data = req.body;

      const newSchedulingInformation = await SchedulingInformationModel.create(
         data
      );

      res.send({ schedulingInformation: newSchedulingInformation });
   }

   async get(req, res) {
      const id = req.params.id;

      const findedSchedulingInformation = await SchedulingInformationModel.findOne(
         { schedulingId: id }
      ).exec();

      res.send({ findedSchedulingInformation });
   }
}

module.exports = new SchedulingInformationController();
