const { connect, connection } = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost:2701/socialDB';

connect(connectionString, {
    useNewParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;