const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results }) // x <- y
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let { email, myname, city } = req.body;

    // connection.query(
    //     `  INSERT INTO 
    //     Users (email, name, city) 
    //     VALUES (?, ?, ?) `,
    //     [email, myname, city],
    //     function (err, results) {
    //         res.send(' Created user succeed !')
    //     }
    // );

    try {
        let [results, fields] = await connection.query(
            `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, myname, city]
        );
        res.send(' Created user succeed !')
    } catch (error) {
        console.log(">>> error: ", error);
        res.status(500).send('Error creating user');
    }
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage
}