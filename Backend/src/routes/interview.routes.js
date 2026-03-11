const express= require('express');
const interviewRouter = express.Router();
const authUser = require("../middlewares/auth.middleware");
const {generateInterViewReportController} = require('../controllers/interview.controller');
const upload = require('../middlewares/file.middleware');


interviewRouter.post("/",authUser,upload.single("resume"),generateInterViewReportController);

module.exports = interviewRouter;