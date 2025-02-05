const { getHomepage, getABC, getHoiDanIT, postCreateUser } = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)

router.post('/create-user', postCreateUser);

module.exports = router;