const router = require("express").Router();
const Workout = require("../models/workout.js");

//creates new workout route
router.post("/workout", ({ body }, res) => {
    Workout.create({})
        .then(WorkoutDB => {
            console.log(`post: ${WorkoutDB}`)
            res.json(WorkoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//finds all workouts in db route
router.get("/workout", (req, res) => {
   //aggregate function
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .then(WorkoutDB => {
            console.log(`get: ${WorkoutDB}`);
            res.json(WorkoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//adds a workout route
router.put("/workout/:id", ({ params, body }, res) => {

    Workout.findOneAndUpdate(
        { _id: params.id },
        { $push: { exercises: body } },
        { new: true })
        .then(WorkoutDB => {
            console.log(`put: ${WorkoutDB}`)
            res.json(WorkoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        });
})

//retrieves last 7 workouts for stats page route
router.get("/workout/range", (req, res) => {
   //aggregate function
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
                totalWeight: { $sum: "$exercises.weight" }
            }
        }
    ])
        .limit(7)
        .then(WorkoutDB => {
            console.log(`range: ${WorkoutDB}`)
            res.json(WorkoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = router;