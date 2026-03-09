const express = require('express');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());


// api Routes
app.use("/api/auth",authRouter);




app.get('/',(req,res)=>{
    res.end("Hello");
})

module.exports = app;