const { Router } = require('express')

const router = Router()

router.route('/').get((req, res) => {
  res.send('Get all courses')
})

module.exports = router
