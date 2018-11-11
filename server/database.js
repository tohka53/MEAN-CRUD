const mongoose = require('mongoose');
const MONGO_URI =  process.env.MONGO_URI || 'mongodb://localhost/mean-crud'

mongoose.connect(MONGO_URI)
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;
