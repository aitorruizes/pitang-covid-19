const express = require("express");
const schedulingRouter = require("./scheduling.routes");
const schedulingInformationRouter = require("./scheduling-information.routes");

const router = express.Router();

router.use(schedulingRouter);
router.use(schedulingInformationRouter);

module.exports = router;