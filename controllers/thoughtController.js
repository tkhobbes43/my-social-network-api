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
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID!'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a thought and then pushing created thought's id to associated user's thoughts array
    createThought(req, res) {
        Thought.create(req.body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $push: { thoughts: _id } },
                    { runValidators: true, new: true }
                );
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // update thought by id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, New: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete a thought by id
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID!' })
                    : User.findOneAndUpdate(
                        { thoughts: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { runValidators: true, new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'Thought deleted, but no user found!' })
                    : res.json({ message:'Thought successfully deleted!'})
            )
            .catch((err) => res.status(500).json(err));
    },
    createReaction(req, res) {

    },
    deleteReaction(req, res) {

    }
};
