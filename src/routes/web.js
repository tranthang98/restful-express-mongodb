const { getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage, getUpdatePage,
    postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)

router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);

module.exports = router;