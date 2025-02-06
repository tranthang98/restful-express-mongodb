const { getAllUsers, getUserByID, createUser, updateUserById, deleteUserById } = require('../services/CRUDService')

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
    await createUser(email, myname, city);
    res.send(' Created user succeed !')
}

const postUpdateUser = async (req, res) => {
    let { userId, email, myname, city } = req.body;
    await updateUserById(userId, email, myname, city);
    // res.send(' Updated user succeed !')
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserByID(userId);
    res.render('delete.ejs', { userEdit: user })
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.userId;
    await deleteUserById(userId);
    res.redirect('/');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserByID(userId);
    res.render('edit.ejs', { userEdit: user })
}


module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser
}