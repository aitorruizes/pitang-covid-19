const mongoose = require("mongoose");

const SchedulingSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      birthdate: { type: String, required: true },
      schedulingDate: { type: Date, required: true },
      schedulingHour: { type: String, required: true },
   },
   { timestamps: true }
);

const SchedulingModel = mongoose.model("scheduling", SchedulingSchema);

module.exports = SchedulingModel;