const facultyModel = require("../models/facultyModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const FacultyModel = require("../models/facultyModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await facultyModel.findOne({ email });

    if (!existingUser) {
      return res.status(200).send({
        message: "Faculty not found",
        success: false,
      });
    }

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

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).send({
      success: true,
      data: existingUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Login error",
      success: false,
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const existingUser = await FacultyModel.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(200).json({
        message: "Faculty already exists",
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
      message: "Faculty created successfully",
      success: true,
      data: newFaculty,
    });
  } catch (err) {
    console.log("Register controller error", err);
    res.status(500).json({
      message: "Register error",
      success: false,
      error: err,
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
