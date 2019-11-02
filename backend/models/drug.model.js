const mongoose = require('mongoose');
const drugSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    apis: {
        type: String,
        required: true,
    },
    interactions: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Drug = mongoose.model('Drug', userSchema);

module.exports = Drug;