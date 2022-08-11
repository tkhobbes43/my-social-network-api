const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // get a user by ID
    getUserById(req,res) {
        User.findOne({ _id: req.params.userId })
        .populate('thoughts')
        .populate('friends')
        .select('-__v')
        .then(async (user) => 
            !user
                ? res.status(404).json({ message: 'No user found with that ID'})
                : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // create a user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    
}
