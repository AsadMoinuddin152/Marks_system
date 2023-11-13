const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentname: {
        type: String,
        required: [true, 'student name is require'],
    },
    rollnumber: {
        type: String,
        required: [true, 'email is require'],
    },
    numberofclassconducted: {
        type: Number,
        default: 0,
    },
    numberofclassattendent: {
        type: Number,
        default: 0,
    },
});

const attendanceModel = mongoose.model('attendances', attendanceSchema);

module.exports = attendanceModel;