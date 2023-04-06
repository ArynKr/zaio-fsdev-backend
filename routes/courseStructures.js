const { Router } = require('express')
const { getCourseStructure } = require('../controllers/courseStructures')

const router = Router()

router.route('/').get(getCourseStructure)

module.exports = router