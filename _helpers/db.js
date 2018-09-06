const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
//Server config
// mongoose.connect(config.prodURL);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};