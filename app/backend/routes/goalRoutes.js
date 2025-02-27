const express = require('express')
const router = express.Router()
const {
    getGoals,
    getGoalById,
    addGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.get('/', getGoals)
router.get('/:id', getGoalById)
router.post('/', addGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

module.exports = router