const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rosterSchema = new Schema({
    first_name:{
        type: String,
        require: true,
    },
    last_name:{
        type: String,
        require: true,
    },
    position:{
        type: String,
        require: true,
    },
    year_salary:{
        type: String,
        require: true,
    },
    years_in_the_league:{
        type: Number,
        require: true,
    }
});

//Export schema to be used in other files
module.exports = mongoose.model("RosterInformation", rosterSchema);