const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is require'],
    },
    rollnumber: {
        type: String,
        required: [true, 'Roll Number is require'],
    },
    years : {
        type: String,
        required: [true, 'year is require'], 
    },
    section: {
        type: String,
        required: [true, 'section is require'],
    },
    branch :{
        type: String,
        required: [true, 'branch is require'], 
    },
    attendance: {
        type: Number,
        default: 0,
    },
    marks: {
        type: Number,
        default: 0,
    },
    photo: {
        type: String,
        default: 'https://www.w3schools.com/howto/img_avatar.png',
    }
});

const studentModel = mongoose.model('students', studentSchema);

module.exports = studentModel;