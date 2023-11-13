const facultyModel = require('../models/facultyModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const attendanceModel = require('../models/attendanceModel');
const studentModel = require('../models/studentModel');
const moment = require('moment');

// login callback
const loginController = async (req, res) => {
    try {
        const faculty = await facultyModel.findOne({ email: req.body.email });
        if (!faculty) {
            return res
                .status(200)
                .send({ message: 'faculty not found', success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, faculty.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: 'Invalid EMail or Password', success: false });
        }
        const token = jwt.sign({ id: faculty._id }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        res.status(200).send({
            message: 'Login Success',
            success: true,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: `Error in Login CTRL ${error.message}`,
        });
    }
};

const authController = async (req, res) => {
    try {
        const faculty = await facultyModel.findById({ _id: req.body.facultyId });
        faculty.password = undefined;
        if (!faculty) {
            return res.status(200).send({
                message: 'faculty not found',
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: faculty,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'auth error',
            success: false,
            error,
        });
    }
};


module.exports = {
    loginController,
    authController,
};