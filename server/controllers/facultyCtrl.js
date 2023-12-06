const FacultyModel = require("../models/facultyModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await FacultyModel.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "Faculty not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      data: existingUser,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Login error",
      error: error.message,
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
