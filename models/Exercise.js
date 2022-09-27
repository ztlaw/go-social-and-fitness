const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({

    exercise: {
        type: String,
        required: true
    },
    weightNumber: {
        type: Number,
        "sets": Number
    },
    duration: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
