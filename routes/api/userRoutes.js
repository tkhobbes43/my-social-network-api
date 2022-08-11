const router = require('expres').Router();

// will import controller functions here
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users GET all and POST

// /api/users/:userId GET, PUT, and DELETE by user's ID

// /api/users/:userId/friends/:friendId POST and DELETE

module.exports = router;