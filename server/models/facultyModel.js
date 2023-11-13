const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  userId: {
    type: String,
    required: [true, "userId is require"],
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
    enum: ['faculty', 'admin',],
    default: 'faculty',
},
},
{ timestamps: true }
);

const FacultyModel = mongoose.model("Facultys", FacultySchema);

module.exports = FacultyModel;
