const express= require('express');
const interviewRouter = express.Router();
const authUser = require("../middlewares/auth.middleware");
const {generateInterViewReportController,getInterviewReportByIdController,getAllInterviewReport} = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');


interviewRouter.post("/",authUser,upload.single("resume"),generateInterViewReportController);


interviewRouter.get("/report/:interviewId",authUser,getInterviewReportByIdController);


interviewRouter.get("/",authUser,getAllInterviewReport)

module.exports = interviewRouter;