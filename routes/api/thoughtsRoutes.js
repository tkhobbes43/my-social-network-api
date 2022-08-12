const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts and POST thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET, PUT, and DELETE a thought by id
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions POST a reaction to a thought
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE a reaction by id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
