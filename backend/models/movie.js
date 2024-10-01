const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    director: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    description: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},  // Movie created by a user
},{timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema);
