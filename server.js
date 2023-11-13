const express = require('express');
const colors = require('colors');
const moragan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./server/config/db');



//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//rest obejct
const app = express();

//Routes
app.use('/api/v1/faculty', require('./server/routes/facultyRoutes'));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
    console.log(
        `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
            .bgCyan.white
    );
});