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
            required: 'Please enter length of exercise in minutes',
          },
          weight: {
            type: Number,
            required: isRequired('weight')
          },
          sets: {
            type: Number,
            required: isRequired('sets')
          },
          reps: {
            type: Number,
            required: isRequired('reps')
          },
          distance: {
            type: Number,
            required: isRequired('distance')
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