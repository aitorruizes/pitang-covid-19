const SchedulingModel = require("../models/scheduling.model");

class SchedulingController {
   async create(req, res) {
      const data = req.body;

      const receivedBirthdate = data.birthdate.split("/");
      const receivedYear = receivedBirthdate[2];

      const findPatient = await SchedulingModel.find();

      findPatient.forEach(async (patient) => {
         console.log(patient);
         let searchedBirthdate = patient.birthdate.split("/");
         let searchedYear = searchedBirthdate[2];

         const actualYear = 2021;

         if (
            actualYear - receivedYear >= 60 &&
            actualYear - receivedYear > actualYear - searchedYear &&
            data.schedulingHour === patient.schedulingHour
         ) {
            await SchedulingModel.findByIdAndDelete(patient._id);
         }
      });

      const newScheduling = await SchedulingModel.create(data);

      res.send({ scheduling: newScheduling });
   }

   async getAll(req, res) {
      const schedulings = await SchedulingModel.find()
         .sort({ schedulingDate: "asc", schedulingHour: "asc" })
         .exec();

      if (schedulings.length == 0) {
         res.send({ message: "There is no schedulings registered." });
      }

      res.send({ schedulings });
   }
}

module.exports = new SchedulingController();
