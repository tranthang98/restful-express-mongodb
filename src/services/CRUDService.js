const connection = require("../config/database")

const getAllUsers = async () => {
    try {
        let [results, fields] = await connection.query('SELECT * FROM Users');
        return results;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error; // Re-throw the error if you want to propagate it further
    }
};

const getUserByID = async (id) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`, [id]
    );

    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const createUser = async (email, name, city) => {
    // connection.query(
    //     `  INSERT INTO 
    //     Users (email, name, city) 
    //     VALUES (?, ?, ?) `,
    //     [email, myname, city],
    //     function (err, results) {
    //         res.send(' Created user succeed !')
    //     }
    // );

    await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    );
}

const updateUser = async (id, email, name, city) => {
    await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`,
        [email, name, city, id]
    );
}

module.exports = {
    getAllUsers, getUserByID, createUser, updateUser
}