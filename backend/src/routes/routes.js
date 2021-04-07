const express = requir("express");
const schedulingRouter = require("./scheduling.routes");

const router = express.Router();

router.use(schedulingRouter);

module.exports = router;