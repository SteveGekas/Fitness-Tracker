const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: 'Please choose exercise type to continue',
      },
      name: {
        type: String,
        required: 'Please enter the name of the exercise to continue',
      },
      duration: {
        type: Number,
        required: 'Please enter length of exercise in minutes to continue',
      },
      weight: {
        type: Number,
        required: "Enter your weight to continue"
      },
      sets: {
        type: Number,
        required: "Enter number of sets to continue"
      },
      reps: {
        type: Number,
        required: "Enter number of sets to continue"
      },
      distance: {
        type: Number,
        required: "Enter distance of exercise to continue"
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const workout = required('workout', workoutSchema);

module.exports = workout;