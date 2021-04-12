const mongoose = require("mongoose");

const SchedulingInformationSchema = mongoose.Schema(
   {
      isVaccinated: { type: Boolean, default: false },
      vaccine: { type: String, default: "Nenhuma" },
      schedulingId: { type: String },
      hasConfirmedScheduling: { type: Boolean, default: false },
   },
   { timestamps: true }
);

const SchedulingInformationModel = mongoose.model(
   "schedulingInformation",
   SchedulingInformationSchema
);

module.exports = SchedulingInformationModel;
