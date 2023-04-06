const { Router } = require('express')
const { getCourses } = require('../controllers/courses')

const router = Router()

router.route('/').get(getCourses)

module.exports = router
