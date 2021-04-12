const express = require("express");
const schedulingInformationController = require("../controllers/scheduling-information.controller");

const schedulingInformationRouter = express.Router();

schedulingInformationRouter.post(
   "/patient/status/create",
   schedulingInformationController.create
);
schedulingInformationRouter.get(
   "/patient/status/get/:id",
   schedulingInformationController.get
);

module.exports = schedulingInformationRouter;
