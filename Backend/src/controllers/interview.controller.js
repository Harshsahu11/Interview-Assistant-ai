const pdfParse = require('pdf-parse');
const generateInterviewReport = require("../services/ai.service");
const interviewReportModel = require('../models/interviewReport.model');



async function generateInterViewReportController(req,res){

    const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText();
    const {selfDescription,jobDescription} = req.body;

    const interViewReportByAi = await generateInterviewReport({
        resume:resumeContent.text,
        jobDescription,
        selfDescription
    });


    const interviewReport = await interviewReportModel.create({
        user:req.user._id,
        resume:resumeContent.text,
        selfDescription,
        jobDescription,
        ...interViewReportByAi
    });


    res.status(201).json({
        message:"Interview Report generated Successfully",
        interviewReport
    })

}


module.exports = { generateInterViewReportController }