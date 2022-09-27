const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({

    exercise: { 
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        duration: Number,
        distance: Number
    }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);

