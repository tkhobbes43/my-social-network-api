const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },
    // get a thought by id
    getThoughtById(req, res) {
        Thought.findOne({ })
    },
    createThought(req, res) {

    },
    updateThought(req, res) {

    },
    deleteThought(req, res) {

    },
    createReaction(req, res) {

    },
    deleteReaction(req, res) {

    }
};
