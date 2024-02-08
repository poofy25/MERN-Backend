const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController.js')

// require auth for every request
const requireAuth = require('../middleware/requireAuth.js')

const router = express.Router()

router.use(requireAuth)

// GET all workouts
router.get('/' , getWorkouts)

// GET a single workout
router.get('/:id' , getWorkout)

// POST a workout
router.post('/' , createWorkout)

// DELETE a workout
router.delete('/:id' , deleteWorkout)

// UPDATE a workout
router.patch('/:id' , updateWorkout)





module.exports = router