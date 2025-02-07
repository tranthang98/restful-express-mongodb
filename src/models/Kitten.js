const mongoose = require("mongoose");

// data structure
const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);
module.exports = Kitten;

// const cat = new Kitten({ name: 'Silence' });
// console.log(cat.name); // 'Silence'
// cat.save();