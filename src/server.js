require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web');
const connection = require('./config/database');
const mongoose = require('mongoose');

const app = express();// app express
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME;

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRouters);

const kittySchema = new mongoose.Schema({
    name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({ name: 'Silence' });
console.log(cat.name); // 'Silence'
cat.save();

(async () => {
    try {
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>> Error connect to DB: ", error)
    }
})()