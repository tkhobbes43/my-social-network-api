const router = require('express').Router();

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
router.route('/').get(getAllUsers).post(createUser);
// /api/users/:userId GET, PUT, and DELETE by user's ID
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);
// /api/users/:userId/friends/:friendId POST and DELETE
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;