const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter the exercise type"
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter the exercise name"
      },
      duration: {
        type: Number,
        required: "Please enter the exercise duration in minutes"
      },
      distance: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      weight: {
        type: Number
      }
    }
  ]
});

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;