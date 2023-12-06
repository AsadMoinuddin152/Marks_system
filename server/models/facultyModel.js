const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
    },
    id: {
      type: String,
      required: [true, "id is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
      type: String,
      enum: ["faculty", "admin"],
      default: "faculty",
    },
  },
  { timestamps: true }
);

const FacultyModel = mongoose.model("Faculty", FacultySchema);

module.exports = FacultyModel;
