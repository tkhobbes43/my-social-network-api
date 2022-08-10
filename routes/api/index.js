const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const friendsRoutes = require('.friendsRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/friends', friendsRoutes);

module.exports = router;
