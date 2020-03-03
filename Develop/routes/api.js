const Workout = require("./../models/workout");
const router = require("express").Router();

//add a new exersise and workout

router.post("/api/workouts", ({ body }, res) => {
  const workout = new Workout(body);
  Workout.create(workout)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//add exersize to workout, put route, api/workout/:id

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.updateOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      $push: {
        exercises: {
          type: req.body.type,
          name: req.body.name,
          distance: req.body.distance,
          duration: req.body.duration,
          weight: req.body.weight,
          sets: req.body.sets,
          reps: req.body.reps
        }
      }
    },
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});
// router.put('/api/workouts/:id', (req, res) => {
//   let body = req.body;
//   console.log(body, '**********************');
//   Workout.updateOne(
//     { _id: req.params.id },
//     { $set: { body } },
//     { multi: true, new: true }
//   )
//     .then(dbWorkout => {
//       if (dbWorkout) {
//         res.send(dbWorkout);
//       } else {
//         console.log('no go');
//       }
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

//push to workout id with exersize

//delete workout api.workouts

//get all workouts api/workouts

// get specific workout last 7 work outs api/workouts/range
module.exports = router;
