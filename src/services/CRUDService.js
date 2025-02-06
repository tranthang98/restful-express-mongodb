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


module.exports = {
    getAllUsers
}