const mongoose = require("mongoose");


const WorkoutSchema = new mongoose.Schema({
    day: Date,

    exercises:[
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});


module.exports = mongoose.model("Workout", WorkoutSchema);