const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is require"],
    },
    lastName: {
      type: String,
      required: [true, "lastName is require"],
    },
    Id: {
      type: String,
      required: [true, "Id is require"],
    },
    email: {
      type: String,
      required: [true, "email is require"],
    },
    password: {
      type: String,
      required: [true, "password is require"],
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
