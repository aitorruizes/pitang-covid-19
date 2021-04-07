const express = require("express");
const schedulingController = require("../controllers/scheduling.controller");

const schedulingRouter = express.router();

schedulingRouter.post("/patient/scheduling/create", schedulingController.create);
schedulingRouter.get("/patient/scheduling/getAll", schedulingController.getAll);

module.exports = schedulingRouter;