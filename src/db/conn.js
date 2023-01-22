const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Employee")
    .then(() => {
        console.log("Connection is Successful")
    }).catch((err) => {
        console.log(`Connection is Failed ${err} `)
    });