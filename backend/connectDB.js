const mongoose = require("mongoose")

async function connectToDB(URL){
    try {
        return mongoose.connect(URL);
    } catch (error) {
        console.log("Error Connecting to DB")
    }
}

module.exports = connectToDB;