const express = require("express");
const schedulingController = require("../controllers/scheduling.controller");

const schedulingRouter = express.Router();

schedulingRouter.post("/patient/scheduling/create", schedulingController.create);
schedulingRouter.get("/patient/scheduling/getAll", schedulingController.getAll);

module.exports = schedulingRouter;