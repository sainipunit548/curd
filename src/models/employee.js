const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    phone_no: {
        type: Number,
        required: true,
        unique:true
    },
    password: {
        type: String,
       required:true 
    },
    cpassword: {
        type: String,
        required:true
    },
    file: {
        type: String,
        required:true
    }
})

const Employee_details = mongoose.model("Employee_details", employeeSchema);

module.exports = Employee_details;