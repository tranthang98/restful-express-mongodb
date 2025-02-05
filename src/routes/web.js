const { getHomepage, getABC, getHoiDanIT } = require('../controllers/homeController')
const express = require('express')
const router = express.Router()

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)

module.exports = router;