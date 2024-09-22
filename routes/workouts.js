const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// require auth middleware for all workout routes
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);
// GET all workouts
router.get("/", getAllWorkouts);

// GET a single workout
router.get("/:id", getSingleWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

// UPDATE a workout
router.put("/:id", updateWorkout);

module.exports = router;
