const express = require("express");
const colors = require("colors");
const morgan = require("morgan"); // Fixed typo
const dotenv = require("dotenv");
const connectDB = require("./server/config/db");

// dotenv config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// Routes
app.use("/api/v1/faculty", require("./server/routes/facultyRoutes"));

// Port
const port = process.env.PORT || 8080;

// Listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
