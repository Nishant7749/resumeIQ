const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const analyze = require('../controller/resumeController')

router.post('/analyze', upload.single('resume'), analyze)

module.exports = router