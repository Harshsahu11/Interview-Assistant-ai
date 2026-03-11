const express = require('express');
const authRouter = require('./routes/auth.routes');
const interviewRouter = require('./routes/interview.routes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());

// api Routes
app.use("/api/auth",authRouter);
app.use("/api/interview",interviewRouter)




app.get('/',(req,res)=>{
    res.end("Hello");
})

module.exports = app;