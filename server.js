const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./server/config/db");
const facultyRoutes = require("./server/routes/facultyRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json()); // Parse JSON requests

app.use("/api/v1/faculty", facultyRoutes); // Use the entire facultyRoutes with "/api/v1/faculty" prefix

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${port}`
  );
});
