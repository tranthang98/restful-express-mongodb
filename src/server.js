require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web');

const app = express();// app express
const port = process.env.PORT || 8888

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//config template engine
configViewEngine(app);

//khai báo route
app.use('/', webRouters);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})