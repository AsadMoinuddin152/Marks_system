const facultyModel = require("../models/facultyModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const FacultyModel = require("../models/facultyModel");

// login callback
const loginController = async (req, res) => {
  try {
    // get user data from request body
    let { email, password } = req.body;
    // check if user exists
    const existingUser = await facultyModel.findOne({ email });
    console.log(existingUser);
    if (!existingUser) {
      return res.status(200).send({
        message: "faculty not found",
        success: false,
      });
    }
    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(200).send({
        message: "Invalid credentials",
        success: false,
      });
    }
    // generate token
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1d" }
    );
    // send user data
    res.status(200).send({
      success: true,
      data: existingUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "login error",
      success: false,
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    // check if user exists
    const existingUser = await FacultyModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).json({
        message: "faculty already exists",
        success: false,
      });
    }

    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newFaculty = new FacultyModel(req.body);
    await newFaculty.save();

    res.status(200).json({
      message: "faculty created successfully",
      success: true,
      data: newFaculty,
    });
  } catch (err) {
    console.log("register controller err", err);
    res.status(500).json({
      message: "register error",
      success: false,
      err,
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
